<template>
    <div>
        <!-- <el-input v-model="log1" placeholder="Please input" /> -->
        <div style="display: flex;flex-wrap: wrap;justify-content: space-between;item-align: center;">
            <div style="width: 300px;height: 200px;" v-for="i in 8" :key="i">
                    <VideoPlayer :URL="URL" :Cover="Cover" v-if="URL" />
            </div>
        </div>
            <el-button @click="mv">获取mv+{{ num }}</el-button>
      <el-button type="danger">Danger</el-button>

    </div>
</template>

<script setup>
import { mvx, getMv } from '@/api/getMv.js'
import VideoPlayer from '@/components/VideoPlayer/index.vue'
// const log1 = ref(null)
const URL = ref(null)
const Cover = ref(null)
const num = ref(0)

const mv = () => {
  num.value++
  getMv({ id: 6452 }).then(res => {
    Cover.value = res.data.mvs[num.value].imgurl
    mvx({ id: res.data.mvs[num.value].id }).then(res => {
      URL.value = res.data.data.url
    })
  })
}
// vue3生命周期有onMounted、onUnmounted、onUpdated、onBeforeMount、onBeforeUnmount、onBeforeUpdate、onRenderTracked、onRenderTriggered、onErrorCaptured
onMounted(() => {
  mv()
})

</script>

<style lang="scss" scoped></style>
