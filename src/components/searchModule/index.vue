<template>
  <div class="searchModule">
    <!-- <div class="searchModule__input"> -->
    <el-input v-model="input" placeholder="Please input" @input="choiceInput" />
    <!-- </div> -->
    <!-- 下拉 -->
    <div :class="scrollBar ? 'searchModule_select_display' : 'searchModule_select_hide'" v-if="isShow"
      @mouseenter="displayscrollbars" @mouseleave="Hidethescrollbar">
      <div v-for="item in options" :key="item.value" :label="item.label" :value="item.value" @click="choiceSelect"
        class="searchModule_select_item">{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup>
const input = ref('')
const options = []
for (let i = 0; i <= 4; i++) {
  options.push({
    value: `Option${i}`,
    label: `Option${i}`
  })
}
const isShow = ref(false)
const choiceSelect = (e) => {
  input.value = e.target.innerText
}
const choiceInput = (e) => {
  console.log(e)
  input.value = e
  for (let i = 0; i <= input.value; i++) {
    options.push({
      value: `Option${i}`,
      label: `Option${i}`
    })
  }
  isShow.value = true
}
const scrollBar = ref(false)
const displayscrollbars = () => {
  scrollBar.value = true
}
const Hidethescrollbar = () => {
  scrollBar.value = false
}
</script>

<style lang="scss" scoped>
.searchModule {
  outline: 1px solid;
  margin: 0 20px;
  position: relative;
  width: 300px;

  .searchModule_select_display {
    width: 100%;
    position: absolute;
    background: #fff;
    background-color: #ffffff;
    // 边框
    border: 1px solid #dcdfe6;
    border-radius: 2%;
    z-index: 99999;
    overflow: auto;
    max-height: 300px;
    cursor: pointer;
    margin-top: 20px;

    &::-webkit-scrollbar {
      //--webkit-scrollbar是伪元素，用于设置滚动条的样式
      width: 6px;
      // display: none;
    }

    &::-webkit-scrollbar-track {
      //-webkit-scrollbar-track是设置滚动条的轨道（背景颜色）
      background: rgb(239, 239, 239);
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      //-webkit-scrollbar-thumb是设置滚动条的滑块（就是那个小方块）
      background: #909399;
      border-radius: 10px;
    }
    .searchModule_select_item {
      height: 34px;
      line-height: 34px;

      &:hover {
        background-color: #e6f7ff;
        cursor: pointer;
      }
    }
  }
  // 继承searchModule_select
  .searchModule_select_hide {
    @extend .searchModule_select_display;
    &::-webkit-scrollbar{
      display: none;
    }
  }
}
</style>
