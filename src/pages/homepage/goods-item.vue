<template>
  <div class="goods-item-box">
    <img :src="itemInfos.imgs[0]" />
    <p>{{ itemInfos.title }}</p>
    <div>
      <span class="item-price-1">{{ itemInfos.price }}</span>
      <span>/</span>
      <span class="item-price-2">{{ itemInfos.beforePrice }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import data from "../../mock/index";
export default defineComponent({
  name: "GoodsItem",
  props: {},
  setup: () => {
    const state = reactive({
      itemInfos: data.itemMockData, //这里用默认的值
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.goods-item-box {
  width: 45vw;
  height: 41vw;
  // border: 1px solid red;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 40vw;
    height: 30vw;
  }
  p {
    width: 45vw;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-price-1 {
    font-size: 20px;
    color: red;
  }
  .item-price-2 {
    font-size: 20px;
    color: #000;
    text-decoration: line-through;
  }
}
</style>