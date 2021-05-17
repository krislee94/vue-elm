<template>
  <div class="home-box">
    <div class="header-box">
      <!-- 图标  -->
      <div @click="gotoLocation">
        <img src="../../assets/common/dingwei.png" class="dingwei" />
        <Location style="margin-left: 5px; color: #fff" />
        <!-- <van-icon name="wap-nav" color="#fff" style="margin-top: 5px" /> -->

        <van-icon
          name="scan"
          color="#fff"
          size="1.2rem"
          style="margin-left: 50vw"
        />
        <van-icon
          name="chat-o"
          badge="9"
          color="#fff"
          size="1.2rem"
          style="margin-left: 5vw"
        />
        <i></i>
      </div>
    </div>

    <div class="body-box">
      <!-- 搜索框 -->
      <Search />
      <HotTag />
      <SwiperHome />
      <BigLogoCate />
      <LittleLogo />
      <img src="/src/assets/images/guanggao.png" class="guanggao-img" />
      <div class="bottom-box">
        <!-- 天天特价 -->
        <div class="daily-box">
          <DailyPrice />
        </div>
        <!-- 免配专区 -->
        <div class="free-box"></div>
      </div>
    </div>

    <FixedDiv />
    <!-- <i class="iconfont icon-gonggao"></i> -->
    <Navigation />
  </div>
</template>

<script>
import { onMounted } from "vue";
import Navigation from "../../components/navigation.vue";
import Location from "../location/index.vue";
import HotTag from "./hot-tag.vue";
import { useRouter } from "vue-router";
// import axios from "../../utils/axios.ts";
import Search from "./search.vue";
import SwiperHome from "./swiper-home.vue";
import BigLogoCate from "./big-log-cate.vue";
import LittleLogo from "./little-logo-cate.vue";
import FixedDiv from "../../components/fix-bottom.vue";
import DailyPrice from "./daily-price.vue";
export default {
  name: "Home",
  components: {
    Navigation,
    Location,
    Search,
    HotTag,
    SwiperHome,
    BigLogoCate,
    LittleLogo,
    FixedDiv,
    DailyPrice,
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
      // axios.get("/").then((res) => {
      //   console.log(res);
      // });
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
  background-color: #f5f5f5;
  .m-l {
    margin-left: 5px;
  }

  position: relative;
  .header-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 100px 100px 100px 100px;
    width: 100%;
    height: 500px;
    // border: 1px solid red;
    position: absolute;
    top: 0px;
    z-index: 8;
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
    .icon-scan {
      // font-size: 20px;
      color: #fff;
    }
  }
  .body-box {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 80vh;
    // border: 1px solid red;
    position: absolute;
    top: 400px;
    z-index: 11;
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
    background-color: #fff;
    overflow: auto;
    /** 搜索框 */

    .guanggao-img {
      width: 100vw;
      height: 15vh;
      margin-top: 5vh;
    }
    .bottom-box {
      width: 100vw;
      height: 20vh;
      display: flex;
      flex-direction: row;
      margin-top: 1vh;
      border-radius: 40px;
      background-color: #fff;
      padding-left: 2vw;
      padding-right: 2vw;
      // border: 1px solid red;
      .daily-box {
        width: 50vw;
        height: 15vh;
        // border: 1px soild red;
      }
      .free-box {
        width: 50vw;
        height: 15vh;
        // border: 1px solid red;
      }
    }
  }
}
</style>
