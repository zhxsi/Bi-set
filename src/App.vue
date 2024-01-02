<template>
  <el-config-provider :locale="locale">
    <router-view v-slot="{ Component }" v-if="isRouterAlive">
      <keep-alive>
        <transition name="fade-right" mode="out-in">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
  </el-config-provider>
</template>

<script setup>
import zhcn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
const locale = ref(zhcn)
// 切换语言
const changeLanguage = (lang) => {
  switch (lang) {
    case 'zh-cn':
      locale.value = zhcn
      break
    default:
      locale.value = en
      break
  }
}
// 刷新页面
const isRouterAlive = ref(true)
const reload = () => {
  isRouterAlive.value = false
  nextTick(() => {
    isRouterAlive.value = true
  })
}
// 向下传递方法
provide('reload', reload)
provide('changeLanguage', changeLanguage)

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
