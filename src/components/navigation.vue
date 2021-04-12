<template>
  <div class="nav-box">
    <!-- @select="handleSelect" -->
    <el-menu class="elm-box" mode="horizontal" router="true">
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
          <i class="text-sp">首页</i>
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
      <el-menu-item index="my" class="elm-item">
        <div class="icon-box">
          <i class="iconfont icon-person icon-item" style="font-size: 30px"></i>
          <i class="text-sp">我的</i>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Navigation",
  props: {},
  setup: () => {},
});
</script>

<style lang="less" scoped>
.nav-box {
  position: fixed;
  bottom: 0;
  width: 100%;
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