## 2023-04-02

## checkbox 멀티 체크 하기

> vue에서 실제 체크박스는 단건 선택하는 경우가 거의 없다.  
> 그리하여 다건선택할 경우 테스트 하는 방법에 대해 알려주고자 한다.

---

상황은 **"좋아하는 언어를 선택하기"** 이고 체크박스를 통해 **"자바,자바스크립트,C++"** 를 선택할 수 있다.
input[type=checkbox]를 통해 언어를 선택 하고, computed를 통해 선택된 언어를 **"javascript,java"** 를 표시 할려고 한다.  
아래는 멀티체크 하는 vue 파일이다.

```javascript
<template>
  <form @submit.prevent="submit">
    <fieldset>
      <legend>좋아하는 언어는?</legend>

      <div>
        <label for="checkbox1">자바</label>
        <input type="checkbox" v-model="formData.checkbox" id="checkbox1" value="java" />
      </div>
      <div>
        <label for="checkbox2">자바스크립트</label>
        <input type="checkbox" v-model="formData.checkbox" id="checkbox2" value="javascript" />
      </div>
      <div>
        <label for="checkbox3">C++</label>
        <input type="checkbox" v-model="formData.checkbox" id="checkbox3" value="c++" />
      </div>
    </fieldset>
  </form>

  <div id="select-language">
    {{ compCheckbox }}
  </div>
</template>
<script>
import { computed, reactive } from 'vue';

export default {
  setup() {
    const formData = reactive({
      checkbox: [],
    });

    const compCheckbox = computed(() => {
      return formData.checkbox.join();
    });

    const submit = () => {};

    return {
      formData,
      submit,
      compCheckbox,
    };
  },
};
</script>
<style scoped></style>

```

---

다음으로는 test 코드를 작성한다.

1. find함수를 통해 checkbox를 가져온다.
2. setValue 함수를 통해 값을 세팅해준다.(다만 checkbox는 인자에 아무것도 넣지 않으면, value에 세팅된 값으로 세팅된다.)
3. 선택된 값이 정확하게 화면에 뿌려지고 있는지 확인한다.

```javascript
//formview3.test.js
import { shallowMount } from '@vue/test-utils';
import FormView3 from '../FormView3.vue';
describe('formview3 vue', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(FormView3);
  });
  test('체크박스 값 세팅 및 비교', async () => {
    //1. find함수를 통해 checkbox를 가져온다.
    const chkbox1 = await wrapper.find('input[type="checkbox"][id=checkbox1]');
    const chkbox2 = await wrapper.find('input[type="checkbox"][id=checkbox2]');
    // 2.setValue 함수를 통해 값을 세팅해준다.(다만 checkbox는 인자에 아무것도 넣지 않으면, value에 세팅된 값으로 세팅된다.)
    await chkbox1.setValue();
    await chkbox2.setValue();
    //3.선택된 값이 정확하게 화면에 뿌려지고 있는지 확인한다.
    const selectLanguage = await wrapper.find('#select-language');
    expect(selectLanguage.text()).toBe('java,javascript');
  });
});
```
