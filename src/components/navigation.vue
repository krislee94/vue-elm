<template>
  <div class="nav-box">
    <!-- @select="handleSelect" -->
    <el-menu class="elm-box" mode="horizontal" router="true">
      <el-menu-item index="/" class="elm-item">首页</el-menu-item>
      <el-menu-item index="find" class="elm-item">发现</el-menu-item>
      <el-menu-item index="order" class="elm-item">订单</el-menu-item>
      <el-menu-item index="my" class="elm-item">我的</el-menu-item>
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
    }
  }
}
</style>