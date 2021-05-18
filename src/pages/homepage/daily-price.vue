<template>
  <div class="daily-box">
    <div class="daily-top-box">
      <span class="daily-top-box-span">天天特价</span>
      <van-count-down :time="time">
        <template #default="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
    </div>
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
      time: 20 * 60 * 60 * 1000,
      timeData: {
        hours: 4,
        minutes: 60,
        seconds: 60,
      },
    });

    const setTime = () => {
      this.state.timeData.hours = 1;
      this.state.timeData.minutes = 30;
      this.state.timeData.seconds = 40;
    };

    return {
      ...toRefs(state),
      setTime,
    };
  },
});
</script>

<style lang="less" scoped>
.daily-box {
  width: 50vw;
  border: 1px solid red;
  background-color: #f5f5f5;
  border-radius: 40px;
  padding: 40px 40px;
  height: 20vh;
  .daily-top-box {
    display: flex;
    flex-direction: row;
    padding: 10px 10px 10px 10px;
    .daily-top-box-span {
      margin-right: 40px;
    }
  }
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 150px;
  color: #fff;
  font-size: 30px;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  background-color: #ee0a24;
}
</style>