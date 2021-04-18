<template>
  <div>
    <h1>这是我的页</h1>
    <Navigation />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Navigation from "../../components/navigation.vue";
export default defineComponent({
  components: { Navigation },
  name: "Mine",
  props: {},
  setup: () => {},
});
</script>

<style>
</style>