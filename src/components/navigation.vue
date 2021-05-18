<template>
  <!-- <router-view /> -->
  <!-- @select="handleSelect" -->
  <van-tabbar v-model="active" @change="onChange" z-index="999">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/find" icon="search">发现</van-tabbar-item>
    <van-tabbar-item replace to="/order" icon="friends-o">订单</van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
  <!-- <el-menu class="elm-box" mode="horizontal" router="true">
      <el-menu-item index="/" class="elm-item">
        <div class="icon-box">
          <i
            class="iconfont icon-shandian- icon-item"
            style="font-size: 30px"
          ></i>
          <i class="text-sp">首页</i>
        </div>
      </el-menu-item>
      <el-menu-item index="find" class="elm-item">
        <div class="icon-box">
          <i
            class="iconfont icon-workstation icon-item"
            style="font-size: 30px"
          ></i>
          <i class="text-sp">发现</i>
        </div>
      </el-menu-item>
      <el-menu-item index="order" class="elm-item">
        <div class="icon-box">
          <i
            class="iconfont icon-order-list icon-item"
            style="font-size: 30px"
          ></i>
          <i class="text-sp">订单</i>
        </div>
      </el-menu-item>
      <el-menu-item index="mine" class="elm-item">
        <div class="icon-box">
          <i class="iconfont icon-person icon-item" style="font-size: 30px"></i>
          <i class="text-sp">我的</i>
        </div>
      </el-menu-item>
    </el-menu> -->
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Navigation",
  props: {},
  setup: () => {
    const active = ref(0);
    const onChange = (index) => {
      console.log(index);
    };
    return {
      active,
      onChange,
    };
  },
});
</script>

<style lang="less" scoped>
.nav-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
  .elm-box {
    display: flex;
    .elm-item {
      display: flex;
      flex: 1;
      height: 500px;
    }
  }
}
.icon-box {
  padding: 0;
  display: flex;
  flex-direction: column;
  .icon-item {
    width: 50px;
    height: 50px;
    color: aqua;
  }
  .text-sp {
    margin-top: 1.1rem;
  }
}
</style>