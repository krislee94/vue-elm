<template>
  <h1>这是订单页</h1>
  <Navigation />
</template>

<script>
import { defineComponent } from "vue";
import Navigation from "../../components/navigation.vue";

export default defineComponent({
  name: "Order",
  props: {},
  components: {
    Navigation,
    // Navigation,
  },
  setup: () => {},
});
</script>

<style>
</style>