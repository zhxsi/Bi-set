<template>
  <div class="log3">
    <div>
      <img src="https://store.zhxsi.link/动漫/动漫 - 2.jpg" alt="">
    </div>
    <div>
      <!-- <img src="/assets/vue.svg" alt=""> -->
      <useDark />
    </div>
  </div>
</template>

<script setup>
import useDark from '@/components/useDark/index.vue'
</script>

<style lang="scss" scoped>
.log3 {
  display: flex;

  // flex-wrap: wrap;
  // justify-content: space-between;
  // item-align: center;
  // width: 100%;
  // height: 100%;
  div:nth-child(1) {
    width: 200px;
    height: 60px;

    // background-color: #D3DCE6;
    // outline: 1px solid;
    img {
      // width: 100%;
      height: 100%;
    }
  }

  div:nth-child(2) {
    // width: 200px;
    // height: 200px;
    // 剩余空间，scss函数计算
    flex: 1;
    background-color: antiquewhite;

    img {
      // width: 100%;
      height: 100%;
    }

    // background-color: #D3DCE6;
    // outline: 1px solid;
  }
}</style>
