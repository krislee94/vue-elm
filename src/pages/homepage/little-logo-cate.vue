<template></template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "LittleLogo",
  props: {},
  setup: () => {
    const state = reactive({
      //定义小logo
      logos: [
        {
          url: "",
          router: "",
          name: "",
        },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style>
</style>