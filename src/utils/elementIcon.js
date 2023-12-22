import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  install (app) {
    for (const key in ElementPlusIconsVue) {
      app.component(key, ElementPlusIconsVue[key])
    }
  }
}
