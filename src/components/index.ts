import { App } from 'vue'

import Button from './Button/Button.vue'
import Collapse from './Collapse/Collapse.vue'
import CollapseItem from './Collapse/Collapse-item.vue'
import icon from './Icon/icon.vue'
import Alert from './Alert/Alert.vue'
import Tooltip from './Tooltip/Tooltip.vue'
import Dropdown from './Dropdown/Dropdown.vue'
import DropdownItem from './Dropdown/DropdownItem.vue'

import prefix from './prefix'
const component = [
  Button,
  Collapse,
  CollapseItem,
  icon,
  Alert,
  Tooltip,
  Dropdown,
  DropdownItem
]

// 批量注册全局组件
export default {
  install(app: App) {
    component.forEach((item: any) => {
      app.component(`${prefix}${item.name}`, item)
    })
  }
}