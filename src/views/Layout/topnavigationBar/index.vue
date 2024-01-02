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
                <el-badge :value="120" class="item">
                    <i-ep-Bell />
                </el-badge>
                <!-- <i-ep-search /> -->

            </div>
            <!-- 切换语言 -->
            <div class="language">
                <!-- <select name="lang" id="lang-select" @change="changeLang">
                    <option value="zh" selected>简体中文</option>
                    <option value="en">English</option>
                </select> -->
                <el-button type="primary" @click="changeLang">{{ lang }}</el-button>

            </div>
            <!-- 用户信息 -->
            <div class="user">
                <el-dropdown trigger="click" v-if="store.user">
                    <span class="el-dropdown-link">
                        <el-avatar :src="store.img||''">
                            <el-image src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                        </el-avatar>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>设置</el-dropdown-item>
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
  store.user = 'admin'
  dialogVisible.value = true
}
const hideDialog = () => {
  dialogVisible.value = false
}
// 退出
const reload = inject('reload')
const quit = () => {
  store.user = null
  reload()
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
