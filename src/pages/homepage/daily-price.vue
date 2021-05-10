<template>
  <div class="daily-box">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "DailyPrice",
  props: {},
  setup: () => {
    const state = reactive({
      title: "天天特价",
      time: "", //这里的time ，需要从接口获取(YYYY-MM-DD HH:mm:ss) 和当前时间做换算
    });

    //倒计时时间
    const daoFun = () => {};

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
</style>