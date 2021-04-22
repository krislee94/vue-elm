<template>
  <div name="search-box">
    <van-search
      v-model="value"
      shape="round"
      show-action
      background="#fff"
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
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Search",
  props: {},
  setup: () => {
    const state = reactive({
      value: "",
    });

    const onSearch = () => {
      console.log("搜索的方法");
      console.log(state.value);
    };
    const onblur = (value) => {
      console.log(value);
      state.value = value;
    };

    return {
      state,
      onSearch,
      onblur,
    };
  },
  methods: {
    onUpdate: (value) => {
      console.log(value);
    },
  },
});
</script>

<style lang="less" scoped>
#search-box {
  width: 100vw;
  height: 10px;
}
</style>
