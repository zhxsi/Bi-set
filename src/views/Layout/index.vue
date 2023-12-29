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
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import sideNavigation from './sideNavigation/index.vue'
import topnavigationBar from './topnavigationBar/index.vue'
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
