import { App } from 'vue'

import Button from './Button/Button.vue'
import Collapse from './Collapse/Collapse.vue'
import CollapseItem from './Collapse/Collapse-item.vue'
import icon from './Icon/icon.vue'

import prefix from './prefix'
const component = [
  Button,
  Collapse,
  CollapseItem,
  icon
]

// 批量注册全局组件
export default {
  install(app: App) {
    component.forEach((item: any) => {
      app.component(`${prefix}${item.name}`, item)
    })
  }
}