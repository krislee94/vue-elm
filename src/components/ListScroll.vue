<template>
  <div ref="wrapper" class="scroll-wrapper">
    <slot></slot>
  </div>
</template>

<script>
/**
 * probeType定义：
 * 1. probeType 为 0，在任何时候都不派发 scroll 事件，
 * 2. probeType 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件，截流
 * 3. probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件，不会截流
 * 4. probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
 *
 * - -感觉没必要 直接用vant的list即可
 */
import BetterScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    // 点击列表是否派发click事件
    click: {
      type: Boolean,
      default: true,
    },
    //// 是否开启横向滚动
    scrollX: {
      type: Boolean,
      default: false,
    },
    //当设置 eventPassthrough 为 'horizontal' 的时候，该配置无效。
    scrollY: {
      type: Boolean,
      default: true,
    },
    // 是否派发滚动事件
    listenScroll: {
      type: Boolean,
      default: false,
    },
    // 列表的数据
    scrollData: {
      type: Array,
      default: null,
    },
    // 是否派发滚动到底部的事件，用于上拉加载
    pullup: {
      type: Boolean,
      default: false,
    },
    // 是否派发顶部下拉的事件，用于下拉刷新
    pulldown: {
      type: Boolean,
      default: false,
    },
    // 是否派发列表滚动开始的事件
    beforeScroll: {
      type: Boolean,
      default: false,
    },
    // 当数据更新后，刷新scroll的延时
    refreshDelay: {
      type: Number,
      default: 20,
    },
  },
  mounted() {},
  methods: {
    initScroll() {
      this.bs = new BetterScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.scroll-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
</style>