<template>
  <div>
    <!-- <transition name="router-fade" mode="out-in">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition> -->
    <router-view v-slot="{ Component }">
      <transition name="router-fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // name: "App",
});
</script>

<style lang="sass">
@import "./style/common.scss"
.router-fade-enter-active,
.router-fade-leave-active
  transition: opacity 0.3s

.router-fade-enter,
.router-fade-leave-active
  opacity: 0
</style>