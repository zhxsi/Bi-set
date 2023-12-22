import { createApp } from 'vue'
import App from './App.vue'
import elementIcon from './utils/elementIcon'
import router from '@/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia().use(piniaPluginPersistedstate)
createApp(App).use(router).use(pinia).use(elementIcon).mount('#app')
