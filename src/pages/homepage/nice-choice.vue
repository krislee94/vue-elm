<template>
  <div class="free-choice">
    <div class="free-header">
      <span>免配专区</span>
      <span class="free-header-span">尽享美味</span>
    </div>

    <div class="sf"></div>
    <GoodsItem :itemInfos="itemInfos"></GoodsItem>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import GoodsItem from "./goods-item.vue";
import data from "../../mock/index";
export default defineComponent({
  name: "NiceChoice",
  props: {},
  components: { GoodsItem },
  setup: () => {
    const state = reactive({
      itemInfos: data.itemMockData,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.free-choice {
  display: flex;
  flex-direction: column;
  margin: 20px 20px 20px 20px;
  .sf {
    height: 10px;
    width: 10px;
  }
  .free-header {
    display: flex;
    flex-direction: row;
    .free-header-span {
      margin-left: 40px;
      color: chartreuse;
    }
  }
}
</style>