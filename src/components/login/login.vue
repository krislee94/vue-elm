<template>
  <img src="../../assets/common/elm.png" />
  <h1>登录</h1>
  <!-- 登录 -->
  <div class="text-name">
    <div class="login-text-name">账号</div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>

  <!-- 密码 -->
  <div class="text-name login-margin-top">
    <div class="login-text-name">密码</div>
    <el-input
      v-model="inputPassword"
      placeholder="请输入密码"
      show-password
    ></el-input>
  </div>

  <!-- 登录按钮 -->
  <el-button type="primary" class="login-button" @click.once="login"
    >登录</el-button
  >

  <!-- 注册 -->
  <p href="">注册</p>
</template>

<script>
import { defineComponent } from "vue";
import md5 from "blueimp-md5";

export default defineComponent({
  name: "Login",
  props: {},
  data() {
    return {
      input: "",
      inputPassword: "",
    };
  },
  setup() {},
  methods: {
    async login() {
      //点击登录
      console.log(this.input);
      console.log(this.inputPassword);
      const hash = md5(this.inputPassword);
      console.log(hash);

      //密码是否需要用md5加密。
    },
  },
});
</script>

<style scoped>
.text-name {
  display: flex;
  flex-direction: row;
  padding-left: 40px;
  padding-right: 40px;
}
.login-text-name {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  width: 200px;
}
.login-margin-top {
  margin-top: 100px;
}
.login-button {
  width: 800px;
  height: 200px;
  margin-top: 100px;
}
</style>
