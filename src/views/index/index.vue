<template>
    <el-container>
        <el-header>
            <log3 />
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-button type="primary" @click="log1">1</el-button>
                <el-button type="primary" @click="log2">2</el-button>
                    <el-button type="danger" @click="log">Danger</el-button>
<div class="txt">123</div>
            </el-aside>
            <el-main>
              <!-- 接受子组件传值 -->
              <logIn :dialogVisible="dialogVisible" @hideDialog="dialogVisible=false" />
                <!-- 缓存 -->
                <!-- <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                </router-view> -->
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import log3 from '@/views/log3.vue'
import logIn from '@/components/logIn/index.vue'
const router = useRouter()
const dialogVisible = ref(false)

const log1 = () => {
  console.log('log1')
  router.push('/log1')
  ElMessage({
    message: '恭喜你，这是一条成功消息',
    type: 'success'
  })
}
const log2 = () => {
  console.log('log2')
  router.push('/log2')
  ElMessage({
    message: '这是一条消息提示',
    type: 'info'
  })
  dialogVisible.value = true
}
const log = () => {
  router.push('/')
  ElMessage({
    message: '这是一条警告消息',
    type: 'warning'
  })
}
// 实现activated和deactivated生命周期
onActivated(() => {
  console.log('onActivated')
})
onDeactivated(() => {
  console.log('onDeactivated')
})

</script>

<style lang="scss" scoped>
.el-container {
    height: 100%;
    width: 100%;

    .el-header {
        // background-color: #B3C0D1;
        color: #333;
        padding: 0 !important;
        text-align: center;
        line-height: 60px;
    }

    .el-container {
        .el-aside {
            // background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 200px;
        }

        .el-main {
            // background-color: #E9EEF3;
            color: #333;
            text-align: center;
            line-height: 200px;
        }
    }

}
</style>
