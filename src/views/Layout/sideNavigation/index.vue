<template>
  <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" text-color="#fff"
    default-active="1">
    <h5 class="mb-2">Default colors1</h5>
    <el-menu-item v-for="i in route.matched[0].children.slice(0, 3)" :key="i.path" :index="String(i.meta.index)"
      @click="handleClick(i.path)">
      <el-icon><icon-menu /></el-icon>
      <span>{{ i.meta.title }}</span>
    </el-menu-item>
    <h5 class="mb-2">Default colors2</h5>
    <el-menu-item v-for="i in route.matched[0].children.slice(3)" :key="i.path" :index="String(i.meta.index)"
      @click="handleClick(i.path)">
      <el-icon><icon-menu /></el-icon>
      <span>{{ i.meta.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { Menu as IconMenu } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()

const handleClick = (key) => {
  router.push(key)
}
</script>

<style lang="scss" scoped></style>
