<template>
    <div>
    <button @click="count++">{{ count }}</button>
    </div>
</template>

<script setup>
const count = ref(0)
</script>

<style lang="scss" scoped>
button {
    width: 100px;
    height: 100px;
    background-color: #eee;
    font-size: 20px;
}
</style>
