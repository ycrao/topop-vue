import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/index.less'

// 桌面端适配
import '@vant/touch-emulator';

/* --------------------------------
Vant 中有个别组件是以函数的形式提供的，
包括 Toast，Dialog，Notify 和 ImagePreview 组件。
在使用函数组件时，unplugin-vue-components
无法自动引入对应的样式，因此需要手动引入样式。
------------------------------------- */
// import { showToast } from 'vant';
import 'vant/es/toast/style'
// import { showDialog } from 'vant';
import 'vant/es/dialog/style'
// import { showNotify } from 'vant';
import 'vant/es/notify/style'
// import { showImagePreview } from 'vant';
import 'vant/es/image-preview/style'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#topop-app')
