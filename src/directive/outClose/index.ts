// import { DirectiveHook, DirectiveBinding } from 'vue'

// type ClickOutsideBinding = DirectiveBinding<(event: MouseEvent) => void>

// type ClickOutsideDirective = DirectiveHook<Element, null, [ClickOutsideBinding]>

// export const ClickOutside: ClickOutsideDirective = {
//   mounted(el: Element, binding: ClickOutsideBinding) {
//     const clickOutsideEvent = (event: MouseEvent) => {
//       // 检查点击事件的目标是否是元素本身或其子元素
//       if (!(el === event.target || el.contains(event.target as Node))) {
//         // 调用传递给指令的方法
//         binding.value(event)
//       }
//     }
//     // 将事件绑定到全局点击事件上
//     document.body.addEventListener('click', clickOutsideEvent)
//     // 在元素上存储事件处理函数，方便在解绑时移除
//     ;(el as any).__clickOutsideEvent__ = clickOutsideEvent
//   },
//   unmounted(el: Element) {
//     // 移除全局点击事件的绑定
//     document.body.removeEventListener('click', (el as any).__clickOutsideEvent__)
//     // 清除元素上存储的事件处理函数
//     delete (el as any).__clickOutsideEvent__
//   }
// }
