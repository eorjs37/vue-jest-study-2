## 2023-03-30

### form handling 기본

> form을 트리거 시켜 emit을 통해 전달해보는 방법

```javascript
// 다양한 폼 elements 다루기
// input, textarea, select , input[type=checkbox], input[type=radio]
<template>
  <form @submit.prevent="submit">
    <input type="email" v-model="form.email" />

    <textarea v-model="form.description" />

    <select v-model="form.city">
      <option value="new-york">New York</option>
      <option value="moscow">Moscow</option>
    </select>

    <input type="checkbox" v-model="form.subscribe" />

    <input type="radio" value="weekly" v-model="form.interval" />
    <input type="radio" value="monthly" v-model="form.interval" />

    <button type="submit">Submit</button>
  </form>
</template>
<script>
import { reactive } from 'vue';

export default {
  emits: ['submit'],
  setup(_, { emit }) {
    const form = reactive({
      email: '',
      description: '',
      city: '',
      subscribe: false,
      interval: '',
    });

    const submit = () => {
      emit('submit', form);
    };

    return {
      form,
      submit,
    };
  },
};
</script>
<style scoped></style>

```

```javascript
//formview2.test.js
import { shallowMount } from '@vue/test-utils';
import FormView2Vue from '../FormView2.vue';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(FormView2Vue);
});
describe('form view testing', () => {
  test('submit', async () => {
    const email = 'name@mail.com';
    const description = 'Lorem ipsum dolor sit amet';
    const city = 'moscow';
    //form에 들어가는 값을 세팅해준다
    await wrapper.find('input[type=email]').setValue(email);
    await wrapper.find('textarea').setValue(description);
    await wrapper.find('select').setValue(city);
    //radio,checkobox 같은 경우 파라미터 없이 setValue할 경우 값이 세팅이되며 checkbox같은경우 true로 세팅되고, radio같은 경우 [value=monthly]으로 세팅이 된다.
    await wrapper.find('input[type=checkbox]').setValue();
    await wrapper.find('input[type=radio][value=monthly]').setValue();

    //
    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.emitted('submit')[0][0]).toStrictEqual({
      email,
      description,
      city,
      subscribe: true,
      interval: 'monthly',
    });
  });
});
```
