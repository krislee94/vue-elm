<template>
  <div class="big-log">
    <div v-for="item in mainCateData" :key="item">
      <div class="logo-item">
        <img :src="item.iconUrl" />
        <span>{{ item.span }}</span>
      </div>
    </div>
    <!-- 小logo -->
    <div></div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "BigLogoCate",
  props: {},
  setup: () => {
    const state = reactive({
      mainCateData: [
        {
          iconUrl: "/src/assets/images/meishi.png",
          span: "美食",
          router: "",
        },
        {
          iconUrl: "/src/assets/images/shangchao.png",
          span: "商超便利",
          router: "",
        },
        {
          iconUrl: "/src/assets/images/tuangou.png",
          span: "美食团购",
          router: "",
        },
        {
          iconUrl: "/src/assets/images/paotui.png",
          span: "跑腿代购",
          router: "",
        },
        {
          iconUrl: "/src/assets/images/yinpin.png",
          span: "甜品饮品",
          router: "",
        },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.big-log {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .logo-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 13vw;
      height: 13vw;
    }
    span {
      font-size: 20px;
    }
  }
}
</style>