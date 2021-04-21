<template>
  <div class="home-box">
    <div class="header-box">
      <!-- 图标  -->
      <div @click="gotoLocation">
        <img src="../../assets/common/dingwei.png" class="dingwei" />
        <Location style="margin-left: 5px; color: #fff" />
        <i class="iconfont icon-arrow-down icon-ding"></i>
      </div>
    </div>
    <!-- <i class="iconfont icon-gonggao"></i> -->
    <Navigation />
  </div>
</template>

<script>
import { onMounted } from "vue";
import Navigation from "../../components/navigation.vue";
import Location from "../location/index.vue";
import { useRouter } from "vue-router";
import axios from "../../utils/axios.ts";
export default {
  name: "Home",
  components: {
    Navigation,
    Location,
  },
  props: {},
  // data() {
  //   return {};
  // },
  watch: {
    $route: (to, from) => {
      console.log(to);
      console.log(from);
    },
  },
  setup() {
    ////创建useRouter实例
    const router = new useRouter();
    console.log(router);
    onMounted(() => {
      axios.get("/api").then((res) => {
        console.log(res);
      });
    });
    const gotoLocation = () => {
      console.log("去城市定位");
      router.push({ path: "locationlist" });
    };

    return {
      gotoLocation,
    };
  },
  methods: () => {},
};
</script>

<style lang="less" scoped>
.home-box {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
  .m-l {
    margin-left: 5px;
  }
  .header-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 100px 100px 100px 100px;
    width: 100%;
    height: 500px;
    border: 1px solid red;
    /** 渐变色  */
    background-image: linear-gradient(
      141deg,
      #9fb8ad 0%,
      #1fc8db 51%,
      #2cb5e8 75%
    );
    .bottom-img {
      width: 10px;
      height: 10px;
    }
    .dingwei {
      width: 100px;
      height: 100px;
    }
    .icon-ding {
      font-size: 6px;
      margin-left: 5px;
    }
  }
}
</style>
