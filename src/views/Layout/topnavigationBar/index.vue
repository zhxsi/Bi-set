<template>
    <div class="top-navigation-bar">
        <!-- 搜索 -->
        <div class="search">
            <el-input placeholder="请输入内容" v-model="aa" prefix-icon="i-ep-search" clearable />
        </div>
        <!-- 用户信息 -->
        <div class="user-info">
            <!-- 消息 -->
            <div class="message">
                <el-badge :value="msg" class="item">
                    <i-ep-Bell />
                </el-badge>
            </div>
            <!-- 切换语言 -->
            <div class="language">
                <el-button type="primary" @click="changeLang">{{ lang }}</el-button>
            </div>
            <!-- 用户信息 -->
            <div class="user">
                <el-dropdown trigger="click" v-if="store.account">
                    <span class="el-dropdown-link">
                        <el-avatar :src="store.user.profile.avatarUrl">
                            <el-image src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                        </el-avatar>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="setUp" >设置</el-dropdown-item>
                            <el-dropdown-item @click="quit">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <!-- 登录 -->
                <el-button type="primary" @click="loginBtn" v-else>登录</el-button>
            </div>
        </div>
    </div>
    <login :dialogVisible="dialogVisible" @hideDialog="hideDialog" />
</template>

<script setup>
import login from '@/components/login/index.vue'
import { logout } from '@/api/login'
import { getCountryCode } from '@/api/common/countryCode'
import { getMessage } from '@/api/message'
import { userRecord } from '@/api/user'
import { homeDiscovery, homeIconList, homeBanner } from '@/api/common/homePage'
const aa = ref('')
const store = useStore()
// 切换语言
const { locale } = useI18n()
const lang = ref('English')
const changeLanguage = inject('changeLanguage')
const changeLang = () => {
  if (lang.value === '简体中文') {
    lang.value = 'English'
    locale.value = 'zh'
    changeLanguage('zh-cn')
  } else {
    lang.value = '简体中文'
    locale.value = 'en'
    changeLanguage('en')
  }
}
// 登录
const dialogVisible = ref(false)
const loginBtn = () => {
  dialogVisible.value = true
}
const hideDialog = () => {
  dialogVisible.value = false
}
// 退出
const reload = inject('reload')
const quit = () => {
  logout().then((res) => {
    console.log('res: ', res)
    if (res.data.code === 200) {
      store.setUser(null)
      reload()
      console.log('退出成功')
    }
  })
}
onMounted(() => {
  getMessage().then((res) => {
    if (res.data.code === 200) {
      msg.value = res.data.msg
    }
  })
})
// 设置
const msg = ref('')
const setUp = () => {
  getCountryCode().then((res) => {
    // console.log('res: ', res)
  })

  console.log('store.account: ', store.userId)
  userRecord({ uid: store.userId }).then((res) => {
    // console.log('res: ', res)
  })
  homeDiscovery().then((res) => {
    // console.log('res123: ', res)
  })
  homeIconList().then((res) => {
    // console.log('res123: ', res)
  })
  homeBanner().then((res) => {
    // console.log('res123: ', res)
  })
}
</script>

<style lang="scss" scoped>
.top-navigation-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    background-color: #fff;
    border-bottom: 1px solid #eee;

    .search {
        width: 300px;
        height: 100%;
        display: flex;
        align-items: center;

        ::v-deep(.el-input__wrapper) {
            border: none;
            box-shadow: none;
        }

        ::v-deep(.is-focus) {
            border: none;
            box-shadow: none;
        }
    }

    .user-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

        .message {
            width: 100px;
            height: 100%;
            background-color: #eee;
            outline: 1px solid #a9a6a6;
            @include center;
        }

        .language {
            width: 100px;
            height: 100%;
            background-color: #eee;
            outline: 1px solid #a9a6a6;
            @include center;
        }

        .user {
            width: 100px;
            height: 100%;
            background-color: #eee;
            outline: 1px solid #a9a6a6;
            @include center;

            .el-dropdown {
                .el-avatar {
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
