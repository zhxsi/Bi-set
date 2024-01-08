<template>
  <el-container>
    <el-aside width="200px">
      <sideNavigation />
    </el-aside>
    <el-container>
      <el-header>
        <topnavigationBar />
      </el-header>
      <el-main>
        <pageHeader v-if="router.currentRoute.value.path!=='/'" />
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import sideNavigation from './sideNavigation/index.vue'
import topnavigationBar from './topnavigationBar/index.vue'
import pageHeader from '@/components/pageHeader/index.vue'
import { visitorLogin } from '@/api/login'
// import { loginStatus } from '@/api/user'
const store = useStore()
const router = useRouter()
// 打印当前路由
// console.log('router: ', router.currentRoute.value.path)
onMounted(() => {
  if (!store.account) {
    if (store.user === null) {
      visitorLogin().then((res) => {
        store.setUser(res.data)
      })
    }
  }
})

</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  outline: 1px solid #eee;

  .el-aside {
    background-color: #545c64;
    color: #fff;
  }

  .el-container {
    .el-header {
      outline: 1px solid #eee;
      padding: 0;
    }

    .el-main {
      outline: 1px solid #eee;
      // padding: 0;
    }
  }
}
</style>
