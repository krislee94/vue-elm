<template>
  <div class="vue-demo-fixed-box"></div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "FixedDiv",
});
</script>

<style lang="less" scoped>
.vue-demo-fixed-box {
  position: fixed;
  width: 100vw;
  height: 10vh;
  bottom: 0;
  z-index: 1;
}
</style>