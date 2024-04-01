import { App } from 'vue'

import Button from './Button/Button.vue'

import prefix from './prefix'
const component = [
  Button
]

// 批量注册全局组件
export default {
  install(app: App) {
    component.forEach(item => {
      app.component(`${prefix}${item.name}`, item)
    })
  }
}