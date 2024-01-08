<template>
  <div class="login" @click="loginBtn">
    123
  </div>
  <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" text-color="#fff"
    :default-active="store.activeIndex">
    <h5 class="mb-2">{{ $t("library") }}</h5>
    <el-menu-item v-for="i in route.matched[0].children.slice(0, 3)" :key="i.path" :index="i.meta.index"
      @click="handleClick(i.path)">
      <el-icon>
        <component :is="i.meta.icon" />
      </el-icon>
      {{ $t(i.meta.title) }}
    </el-menu-item>
    <h5 class="mb-2">{{ $t("mine") }}</h5>
    <el-menu-item v-for="i in route.matched[0].children.slice(3)" :key="i.path" :index="i.meta.index"
      @click="handleClick(i.path)">
      <el-icon>
          <component :is="i.meta.icon" />
        </el-icon>
      <span>{{ $t(i.meta.title) }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
const router = useRouter()
const route = useRoute()
const store = useStore()
// const currentRoute = []

const handleClick = (key) => {
  if (router.currentRoute.value.path === key) {
    return
  }
  router.push(key)
  store.changeActiveIndex(router.resolve(key).meta.index)
}
// login返回首页
const loginBtn = () => {
  router.push('/')
  store.changeActiveIndex('0')
}
</script>

<style lang="scss" scoped>
.login {
  outline: 1px solid #eee;
  background-color: #617f9d;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  @include center;
  // 鼠标变成手指
  cursor: pointer;
}
</style>
