<template>
  <h1>这是我的页</h1>
  <Navigation />
</template>

<script>
import Navigation from "../../components/navigation.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Mine",
  props: {},
  components: {
    Navigation,
  },
  setup: () => {},
});
</script>

<style>
</style>