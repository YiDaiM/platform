<template>
  <div class="tooltip-wrapper" v-on="leaveEvent">
    <div
      ref="touchRef"
      v-on="events"
    >
      <slot></slot>
    </div>
    <div
      ref="contentRef"
      v-if="exhibit"
    >
      <slot name="content">tooltip-content</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Tooltip'
})
</script>
<script setup lang="ts">
import { ref, withDefaults, defineProps, reactive, defineEmits } from 'vue'
import { tooltipProps, eventType } from './types'

const emits = defineEmits(['change'])
const exhibit = ref(false) // tooltip展示变量
const touchRef = ref<null | HTMLElement>(null)

const props = withDefaults(defineProps<tooltipProps>(), {
  trigger: 'hover'
})

// tooltip事件触发
const toggle = () => {
  console.log('isChange');
  
  exhibit.value = !exhibit.value
}
const open = () => {
  exhibit.value = true
}
const close = () => {
  exhibit.value = false
}
const events = reactive<eventType>({
  'click': toggle,
  'mouseleave': close,
  'mouseenter': open
})
const leaveEvent = reactive({
  mouseleave: close
})
const initEvent = () => {
  const { trigger } = props
  for (const key in events) {
    delete events[key]
  }
  if (trigger === 'click') {
    events['click'] = toggle
  } else {
    events['mouseenter'] = open
  }
}
initEvent()

const contentRef = () => {
  emits('change', exhibit.value)
}

</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>