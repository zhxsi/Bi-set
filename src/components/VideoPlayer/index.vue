<template>
  <video ref="videoPlayer" class="video-js"/>
</template>
<script setup>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
// import ZHCN from 'video.js/dist/lang/zh-CN.json'
// videojs.addLanguage('zh-CN', ZHCN)
const videoPlayer = ref(null)
const myPlayer = ref(null)
// 接受父组件传递的参数
const props = defineProps({
  URL: String,
  Cover: String
})
onMounted(() => {
  myPlayer.value = videojs(videoPlayer.value, {
    // language: 'zh-CN',
    poster: props.Cover, // poster属性指定视频封面
    controls: true, // controls属性指定是否使用浏览器自带的控制条
    autoplay: false, // autoplay属性指定视频是否自动播放
    muted: true, // muted属性指定是否静音播放
    loop: true, // loop属性指定是否循环播放
    width: '100%', // width属性指定视频播放器的宽度
    height: '100%', // height属性指定视频播放器的高度
    playbackRates: [0.25, 0.5, 1, 1.5, 2], // playbackRates属性指定视频播放速度
    // sources属性指定视频源
    sources: [
      {
        src: props.URL,
        type: 'video/mp4'
      }
    ],
    // controlBar属性指定控制条选项
    controlBar: {
      remainingTimeDisplay: {
        displayNegative: false
      }
    }
  }, () => {
    console.log('播放器初始化完成')
  })
})

// onUnmounted(() => {
//   if (myPlayer.value) {
//     myPlayer.value.dispose()
//   }
// })
// // 播放
// const play = () => {
//   setTimeout(() => {
//     myPlayer.value.muted(true)
//     myPlayer.value.play()
//   }, 3000)
// }
// // 暂停

// const pause = () => {
//   myPlayer.value.pause()
// }
// defineExpose({
//   play,
//   pause
// })
</script>

<style lang="scss" scoped>
.video-js {
  width: 100%;
  height: 100%;
  margin: auto auto;
}
</style>
