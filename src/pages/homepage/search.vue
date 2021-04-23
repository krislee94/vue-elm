<template>
  <div name="search-box">
    <van-search
      v-model="value"
      shape="round"
      show-action
      background="#fff"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @blur="onblur"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <span>{{ value }}</span>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "Search",
  props: {},
  setup: () => {
    // const state = reactive({
    //   value: "",
    // });
    const value = ref(""); //单个值用这个
    const onSearch = () => {
      console.log("搜索的方法");
    };
    const onblur = (value) => {
      // console.log(value);
      state.value = value;
    };
    const onUpdate = (value) => {
      console.log(value);
    };

    return {
      value,
      onSearch,
      onblur,
      onUpdate,
    };
  },
  methods: {},
});
</script>

<style lang="less" scoped>
#search-box {
  width: 100vw;
  height: 10px;
}
</style>
