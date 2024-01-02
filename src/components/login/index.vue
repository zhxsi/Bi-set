<template>
    <el-dialog :model-value="props.dialogVisible" width="30%" :close-on-click-modal="false" :before-close="hideDialog"
        :close-on-press-escape="false" :title="$t('login')">
        <div class="login">
            <div v-loading="loading" v-if="LoginMethod === 1" class="qrcode">
                    <el-image :src="qrimg" fit="contain" />
            </div>
            <div v-loading="loading" v-if="LoginMethod === 2" class="email">
                <el-form :model="form" label-width="auto">
                    <el-form-item :label="$t('email')">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item :label="$t('password')">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-form>
            </div>
            <div v-loading="loading" v-if="LoginMethod === 3" class="account">
                <el-form :model="form" label-width="auto">
                    <el-form-item :label="$t('account')">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item :label="$t('password')">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button v-if="LoginMethod !== 1">{{ $t('login') }}</el-button>
                <el-button v-if="LoginMethod !== 1" type="primary">{{ $t('cancel') }}
                </el-button>
            </div>
            <div style="display: flex;justify-content: space-between;">
                <div @click="loginMode(1)">1</div>
                <div @click="loginMode(2)">2</div>
                <div @click="loginMode(3)">3</div>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import { qrCodekey, qrcodeGeneration } from '@/api/login.js'
const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false
  }
})
const form = reactive({
  name: ''
})
const loading = ref(false)
const qrimg = ref('')
onBeforeUpdate(() => {
  qrcode()
})
const qrcode = () => {
  loading.value = true
  qrCodekey().then(res => {
    qrcodeGeneration({ key: res.data.data.unikey, qrimg: true }).then(res => {
      qrimg.value = res.data.data.qrimg
      loading.value = false
    })
  })
}
const LoginMethod = ref(1)
const loginMode = (mode) => {
  if (mode === 1) {
    LoginMethod.value = 1
    qrimg.value = ''
    qrcode()
  } else {
    LoginMethod.value = mode
    loading.value = false
  }
}
// 子组件向父组件传值
const emit = defineEmits(['hideDialog'])
const hideDialog = () => {
  emit('hideDialog')
}
</script>

<style lang="scss" scoped>
.el-dialog {
    .login {
        @include center;

        .qrcode {
            width: 200px;
            height: 200px;
            .el-image {
                width: 100%;
                height: 100%;
            }
        }
        .email {
            width: 100%;
            height: 200px;
            @include center;

            .el-form {
                width: 100%;
            }
        }

        .account {
            width: 100%;
            height: 200px;
            @include center;
            .el-form {
                width: 100%;
            }
        }

    }

    .dialog-footer {
        height: 50px;
        line-height: 50px;
    }
}
</style>
