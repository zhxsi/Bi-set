<template>
    <div>
        <el-dialog :model-value="props.dialogVisible" width="30%" :close-on-click-modal="false" :before-close="hideDialog"
            :close-on-press-escape="false">
            <template #footer>
                <!-- <span class="dialog-footer">

                </span> -->
                <el-button @click="hideDialog">Cancel</el-button>
                <img :src="qrimg" alt="">
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { qrCodekey, qrcodeGeneration } from '@/api/login.js'
import { ElLoading } from 'element-plus'
const options = {
  lock: true,
  text: 'Loading',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.7)'
}
const loadingInstance = ElLoading.service(options)
const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false
  }
})
let qrimg = ref(String)
onMounted(() => {
  // 开启loading
  qrCodekey().then(res => {
    // console.log(res.data.data.unikey)
    qrcodeGeneration({ key: res.data.data.unikey, qrimg: true }).then(res => {
      console.log(res.data.data)
      //   loadingInstance1.close()
      qrimg = res.data.data.qrimg
    })
  })
  loadingInstance.close()
})
// 子组件向父组件传值
const emit = defineEmits(['hideDialog'])
const hideDialog = () => {
  emit('hideDialog')
}
</script>

<style lang="scss" scoped></style>
