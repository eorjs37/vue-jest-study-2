<template>
  <section class="search-wrapper">
    <div class="search-form">
      <label for="title">제목 <span class="required">*</span> </label>
      <div class="input-form">
        <input class="input-text" type="text" name="제목" id="title" v-model="title" />
      </div>
    </div>
    <div class="search-form">
      <label for="contents">내용 <span class="required">*</span> </label>
      <div class="input-form">
        <input class="input-text" type="text" name="내용" id="contents" v-model="contents" />
      </div>
    </div>
  </section>
  <section class="search-button">
    <button type="button" id="search" @click="handleClick">검색</button>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  emits: ['searchClick'],
  setup(_, { emit }) {
    const title = ref('');
    const contents = ref('');

    const handleClick = () => {
      emit('searchClick', {
        title: title.value,
        contents: contents.value,
      });
    };

    return {
      title,
      contents,
      handleClick,
    };
  },
};
</script>

<style lang="css" scoped>
.search-wrapper {
  display: flex;
}
.search-form {
  padding: 10px;
  flex-basis: 50%;
}

label[for='title'],
label[for='contents'] {
  display: block;
}

.input-form {
  display: inline-block;
  width: 100%;
}

.search-button {
  text-align: right;
}

.required {
  color: red;
}
.input-text {
  width: 100%;
}
</style>
