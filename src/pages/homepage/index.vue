<template>
  <div>
    <h1>这个是首页</h1>
    <i class="iconfont icon-gonggao"></i>
    <Navigation />
  </div>
</template>

<script>
// import { defineComponent } from "vue";
import Navigation from "../../components/navigation.vue";
export default {
  name: "Home",
  components: {
    Navigation,
  },
  props: {},
  // data() {
  //   return {};
  // },
  watch: {
    $route: (to, from) => {
      console.log(to);
      console.log(from);
    },
  },
  setup() {},
};
</script>

<style>
</style>