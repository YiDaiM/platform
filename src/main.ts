import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 注册组件
import component from './components/index'
import './style/app.scss'

createApp(App)
.use(store)
.use(router)
.use(component)
.mount('#app')
