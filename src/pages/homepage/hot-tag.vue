<template>
  <div id="hot-box">
    <div v-for="(item, index) in hotDataList" :key="item" class="hot-item">
      <div>
        <van-icon name="fire" color="#ee0a24" v-if="index == 0" />
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "HotTag",
  props: {},
  setup: () => {
    const hotDataList = ref(["coco", "黄焖鸡", "炸鸡", "有点东西", "华莱士"]);

    return {
      hotDataList,
    };
  },
});
</script>

<style lang="less" scoped>
#hot-box {
  width: 100vw;
  height: 5vh;
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  .hot-item {
    width: 18vw;
    height: 3vh;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px solid red;
    border-radius: 30vw;
    background-color: #f2f2f2;
    color: #333;
    font-size: 5px;
  }
}
</style>