<template></template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "GoodsItem",
  props: {},
  setup: () => {
    const state = reactive({
      itemInfos: {},
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style>
</style>