<template>
    <isDarkstate />
</template>
<script lang="jsx" setup>
const isDark = useDark()
useToggle(isDark)
function isDarkstate (params) {
  return <el-switch v-model={isDark.value} />
}
</script>

<style lang="scss" scoped></style>
