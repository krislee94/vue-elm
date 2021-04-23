<template>
  <div class="swiper-body">
    <van-swipe
      :autoplay="3000"
      lazy-render
      indicator-color="white"
      class="swiper-home-box"
    >
      <van-swipe-item
        v-for="image in swiperImage"
        :key="image"
        class="swiper-item"
      >
        <img :src="image" fit="contain" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { reactive, defineComponent, toRefs } from "vue";
export default defineComponent({
  name: "SwiperHome",
  props: {},
  setup: () => {
    const state = reactive({
      swiperImage: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.swiper-body {
  width: 100vw;
  height: 15vh;
  padding: 10vw 10vw 10vw 10vw;
  .swiper-home-box {
    display: flex;
    flex-direction: row;
  }
  .swiper-item {
    width: 80vw;
    height: 8vh;
    image {
      width: 80vw;
      height: 10vh;
    }
  }
}
</style>