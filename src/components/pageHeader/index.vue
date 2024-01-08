<template>
    <div class="pageHeader">
        123
        <!-- <el-page-header>
            <template #breadcrumb>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="(item, index) in store.headerTitle" :key="index">
                        <router-link :to="item.path">
                            {{ store.headerTitle !== null ? item.meta.title : '' }}
                        </router-link>
                    </el-breadcrumb-item> -->
                    <!-- {{ store.headerTitle }} -->
                <!-- </el-breadcrumb>
            </template>
            <template #content> -->
                <!-- <span class="text-large font-600 mr-3">{{
                    store.headerTitle !== null ? store.headerTitle[store.headerTitle.length - 1].meta.title : '' }}</span> -->
                <!-- <span>
                    {{store.headerTitle.length > 0 ? store.headerTitle[store.headerTitle.length - 1].meta.title : '' }}
                </span>
            </template>
        </el-page-header> -->
    </div>
</template>

<script setup>
// const router = useRouter()
// const goBack = () => {
//   router.go(-1)
// }
// const store = useStore()
</script>

<style lang="scss" scoped>
.pageHeader {
    outline: 1px solid #eee;
    // 阴影
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    // 圆角
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 20px;
}
</style>
