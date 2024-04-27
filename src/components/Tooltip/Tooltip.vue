<template>
  <div class="tooltip-wrapper" :class="{'dark-theme': effect === 'dark'}">
    <div
      ref="touchRef"
      @click="toggle"
      v-on="events"
    >
      <slot></slot>
    </div>
    <transition name="fade" appear mode="in-out">
      <div
        ref="contentRef"
        v-if="exhibit"
        class="tooltip-content"
        v-on="events"
      >
        <slot name="content">暂无内容</slot>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Tooltip'
})
</script>
<script setup lang="ts">
import { ref, withDefaults, defineProps, reactive, defineEmits, defineExpose } from 'vue'
import { tooltipProps, eventType } from './types'

const emits = defineEmits(['change'])
const exhibit = ref(false) // tooltip展示变量
const touchRef = ref<null | HTMLElement>(null)

const props = withDefaults(defineProps<tooltipProps>(), {
  trigger: 'hover',
  effect: 'dark',
  rawContent: false
})

// tooltip事件触发
let toggle = () => {
  exhibit.value = !exhibit.value
}

const emitChange = () => {
  emits('change', exhibit.value)
}

const open = () => {
  exhibit.value = true
  emitChange()
}
const close = () => {
  exhibit.value = false
  emitChange()
}
let events = reactive<eventType>({
  'mouseleave': close,
  'mouseenter': open
})

const initEvent = () => {
  const { trigger } = props
  if (trigger === 'click') {
    events = reactive({})
  } else {
    toggle = () => { return null }
  }
}
initEvent()
defineExpose({
  open,
  close
})

</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>