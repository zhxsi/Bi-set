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

            </div>
        </div>
    </div>
</template>

<script setup>
const { locale } = useI18n()
const lang = ref('English')
const aa = ref('')
const changeLang = () => {
  if (lang.value === '简体中文') {
    lang.value = 'English'
    locale.value = 'zh'
  } else {
    lang.value = '简体中文'
    locale.value = 'en'
  }
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
        }
    }
}
</style>
