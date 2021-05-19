<template>
  <div class="goods-item-box"></div>
</template>

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

<style lang="less" scoped>
.goods-item-box {
  width: 20vw;
  height: 15vw;
  border: 1px solid red;
  border-radius: 40px;
}
</style>