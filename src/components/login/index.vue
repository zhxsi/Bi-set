<template>
  <!-- 关闭前 -->
  <el-dialog :model-value="props.dialogVisible" width="30%" :close-on-click-modal="false" :before-close="hideDialog"
    :close-on-press-escape="false" :title="$t('login')" destroy-on-close draggable>
    <div class="login">
      <div v-loading="loading" v-if="LoginMethod === 1" class="qrcode">
        <el-image :src="form.qrimg" fit="contain" />
      </div>
      <div v-loading="loading" v-if="LoginMethod === 2" class="email">
        <el-form :model="form" ref="formRef1">
          <el-form-item>
            <el-input v-model="form.email" :placeholder="$t('email')" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" :placeholder="$t('password')" />
          </el-form-item>
        </el-form>
      </div>
      <div v-loading="loading" v-if="LoginMethod === 3" class="account">
        <el-form :model="form" ref="formRef2">
          <el-form-item>
            <el-input v-model="form.account" :placeholder="$t('account')" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" :placeholder="$t(PasswordorcaptchaText)" />
          </el-form-item>
          <span @click="switchloginMethod">{{ $t(Passwordorcaptcha) }}</span>
        </el-form>
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button v-if="LoginMethod !== 1" @click="login">{{ $t('login') }}</el-button>
        <el-button v-if="LoginMethod !== 1" type="primary" @click="hideDialog">{{ $t('cancel') }}
        </el-button>
      </div>
      <div class="loginMethod">
        <div @click="loginMode(1)">{{ $t("qrcodeLogin") }}</div>
        <div @click="loginMode(2)">{{ $t("email") }}</div>
        <div @click="loginMode(3)">{{ $t("phone") }}</div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { qrCodekey, qrcodeGeneration, emailLogin, phoneLogin, qrCodeCheck } from '@/api/login.js'
import { md5Encrypt } from '@/utils/md5.js'
const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false
  }
})
const store = useStore()
// 表单
const form = reactive({
  qrimg: null,
  email: null,
  password: null,
  account: null
})
// 生成二维码
const loading = ref(false)
onBeforeUpdate(() => {
  qrcode()
})
const qrcode = () => {
  clear()
  loading.value = true
  qrCodekey().then(res => {
    const key = res.data.data.unikey
    qrcodeGeneration({ key, qrimg: true }).then(res => {
      form.qrimg = res.data.data.qrimg
      qrCodeCheck({ key }).then(res => {
        console.log('res: ', res)
        loading.value = false
      })
    })
  })
  console.log(123)
  const ws = new WebSocket('ws://localhost:10000/mySocketUrl')
  ws.onopen = function () {
    // ws.send('-- 上线 --')
    console.log('WebSocket服务 已连接')
  }
  ws.onmessage = function (event) {
    console.log('event: ', event)
  }

  // ws.onclose = function () {
  //   alert('WebSocket服务 已关闭')
  // }
  // ws.onerror = function (err) {
  //   alert('Error:' + err)
  // }
}
// 登录方式切换
const LoginMethod = ref(1)
const loginMode = (mode) => {
  if (mode === 1) {
    LoginMethod.value = 1
    form.qrimg = null
    qrcode()
  } else {
    loading.value = false
    if (mode === 2) {
      LoginMethod.value = 2
      clear()
    } else if (mode === 3) {
      LoginMethod.value = 3
      clear()
    }
  }
}
// 清空
const clear = () => {
  form.qrimg = null
  form.email = null
  form.password = null
  form.account = null
}
// 登录
const login = () => {
  if (LoginMethod.value === 1) {
    console.log('扫码登录', form)
  } else if (LoginMethod.value === 2) {
    delete form.qrimg
    delete form.account
    form.email = '18113934193@163.com'
    form.password = '132456yL'
    console.log('邮箱登录', form)
    emailLogin({ email: form.email, md5_password: md5Encrypt(form.password) }).then(res => {
      store.setUser(res.data)
      ElMessage.success('登录成功')
      hideDialog()
    })
  } else if (LoginMethod.value === 3) {
    delete form.qrimg
    delete form.email
    // loginType:1 手机号登录 0 邮箱登录
    form.account = '18113934193'
    form.password = '132456yL'
    console.log('账号登录', form)
    phoneLogin({ phone: form.account, md5_password: md5Encrypt(form.password) }).then(res => {
      console.log('res: ', res)
      store.setUser(res.data)
      ElMessage.success('登录成功')
      hideDialog()
    })
  }
}
// 手机号的密码或者验证码登录
const Passwordorcaptcha = ref('captchaLogin')// 验证码登录
const PasswordorcaptchaText = ref('password')// 密码
const switchloginMethod = () => {
  if (Passwordorcaptcha.value === 'captchaLogin') {
    Passwordorcaptcha.value = 'passwordLogin'
    PasswordorcaptchaText.value = 'captcha'
  } else {
    Passwordorcaptcha.value = 'captchaLogin'
    PasswordorcaptchaText.value = 'password'
  }
}
// 子组件向父组件传值
const emit = defineEmits(['hideDialog'])
// 隐藏弹窗
const hideDialog = () => {
  emit('hideDialog')
  clear()
  LoginMethod.value = 1
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

  .loginMethod {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    div {
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 5px;
      background-color: #fff;
      // 阴影
      box-shadow: 0 0 5px #eee;
      border: 1px solid #eee;
    }
  }
}
</style>
