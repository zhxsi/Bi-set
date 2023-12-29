<template>
  <router-view v-slot="{ Component }" v-if="isRouterAlive">
    <keep-alive>
      <transition name="fade-right" mode="out-in">
        <component :is="Component" />
      </transition>
    </keep-alive>
  </router-view>
</template>

<script setup>
const isRouterAlive = ref(true)
const reload = () => {
  isRouterAlive.value = false
  nextTick(() => {
    isRouterAlive.value = true
  })
}
provide('reload', reload)
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.fade-right-enter-active,
.fade-right-leave-active {
    transition: all 0.3s;
}
.fade-right-enter,
.fade-right-leave-to {
    opacity: 0;
    transform: translateX(20px);
}

#nprogress .bar {
    background: red !important; //自定义颜色
}
</style>
