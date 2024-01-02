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
                <router-view />
                {{ $t('hello') }}
                <el-button @click="ck">123</el-button>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import sideNavigation from './sideNavigation/index.vue'
import topnavigationBar from './topnavigationBar/index.vue'
import { visitorLogin } from '@/api/login'
import { loginStatus } from '@/api/user'
const store = useStore()
onMounted(() => {
  if (!store.account) {
    if (store.user === null) {
      visitorLogin().then((res) => {
        console.log('res: ', res)
        store.setUser(res.data)
      })
    }
  }
})
const ck = () => {
  loginStatus().then((res) => {
    console.log('res: ', res)
  })
}
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
            padding: 0;
        }
    }
}
</style>
