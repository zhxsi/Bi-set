<template>
  <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" text-color="#fff"
    default-active="1">
    <h5 class="mb-2">{{ $t("library") }}</h5>
    <el-menu-item v-for="i in route.matched[0].children.slice(0, 3)" :key="i.path" :index="String(i.meta.index)"
      @click="handleClick(i.path)">
      <el-icon>
        <component :is="i.meta.icon" />
      </el-icon>
      {{ $t(i.meta.title) }}
    </el-menu-item>
    <h5 class="mb-2">{{ $t("mine") }}</h5>
    <el-menu-item v-for="i in route.matched[0].children.slice(3)" :key="i.path" :index="String(i.meta.index)"
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
const handleClick = (key) => {
  router.push(key)
}
</script>

<style lang="scss" scoped></style>
