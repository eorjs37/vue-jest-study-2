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
