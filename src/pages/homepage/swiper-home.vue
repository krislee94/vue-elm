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
        <!-- <span>{{ image }}</span> -->
        <img :src="image" fit="fill" class="image-box" />
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
  height: 20vh;
  .swiper-home-box {
    display: flex;
    flex-direction: row;
  }
  .swiper-item {
    width: 100vw;
    height: 18vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .image-box {
      width: 100vw;
      height: 15vh;
    }
  }
}
</style>