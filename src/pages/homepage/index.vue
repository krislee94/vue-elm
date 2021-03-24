<template>
  <h1>这个是首页</h1>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  props: {},
  data() {
    return {};
  },
  setup() {},
  watch: {
    $route: (to, from) => {
      console.log(to);
      console.log(from);
    },
  },
});
</script>

<style>
</style>