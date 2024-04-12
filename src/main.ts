import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 注册组件
import component from './components/index'
import './style/app.scss'

// 注册指令
// import { ClickOutside } from './directive/outClose/index'


createApp(App)
// .directive('click-outside', ClickOutside)
.use(store)
.use(router)
.use(component)
.mount('#app')
