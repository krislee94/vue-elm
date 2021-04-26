<template>
  <div id="little-logo-box">
    <div v-for="item in logos" :key="item.name" class="little-logo-outer-box">
      <div class="img-logo-item">
        <img :src="item.url" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

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
          url: "/src/assets/images/xiawucha.png",
          router: "",
          name: "下午茶",
        },
        {
          url: "/src/assets/images/difangmeishi.png",
          router: "",
          name: "地方美食",
        },
        {
          url: "/src/assets/images/riliao.png",
          router: "",
          name: "日韩料理",
        },
        {
          url: "/src/assets/images/yao.png",
          router: "",
          name: "送药上门",
        },
        {
          url: "/src/assets/images/chaojihuiyuan.png",
          router: "",
          name: "超级会员",
        },
        {
          url: "/src/assets/images/haoquan.png",
          router: "",
          name: "省钱好券",
        },
        {
          url: "/src/assets/images/biandang.png",
          router: "",
          name: "快餐便当",
        },
        {
          url: "/src/assets/images/pingtuan.png",
          router: "",
          name: "拼团",
        },
        {
          url: "/src/assets/images/fenlei.png",
          router: "",
          name: "全部分类",
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
#little-logo-box {
  width: 100vw;
  height: 12vh;
  display: flex;
  flex-direction: row;
  margin-top: 5vw;
  //   justify-content: space-around;
  flex-wrap: wrap;
  .little-logo-outer-box {
    width: 18vw;
    height: 18vw;
    .little-logo-outer-box:nth-child(n + 2) {
      margin-left: 2vw;
    }
    .img-logo-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 10vw;
        height: 10vw;
      }
      span {
        font-size: 8px;
      }
    }
  }
}
</style>