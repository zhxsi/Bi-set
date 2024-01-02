<template>
    <div>
    <button @click="store.user++">{{ store.user }}</button>
    </div>
</template>

<script setup>
const store = useStore()
</script>

<style lang="scss" scoped>
button {
    width: 100px;
    height: 100px;
    background-color: #eee;
    font-size: 20px;
}
</style>
