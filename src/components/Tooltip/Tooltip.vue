<template>
  <span v-on="events" class="tool-tip-wrapper">
    <span><slot></slot></span>
    <div v-if="exhibit" class="tool-tip__content">tooltip-content</div>
  </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Tooltip'
})
</script>
<script setup lang="ts">
import { ref, withDefaults, defineProps, reactive, onMounted } from 'vue'
import { tooltipProps } from './types'

const exhibit = ref(false) // tooltip展示变量

// tooltip事件触发
const toggle = () => {
  exhibit.value = !exhibit.value
}
const open = () => {
  console.log(events);
  
  exhibit.value = true
}
const close = () => {
  exhibit.value = false
}
let events = reactive({
  'click': toggle,
  'mouseleave': close,
  'mouseenter': open
})


const props = withDefaults(defineProps<tooltipProps>(), {
  trigger: 'click'
})

onMounted(() => {
  const { trigger } = props
  events = trigger === 'hover' ? {'mouseleave': close, 'mouseenter': open} : {'click': toggle}
  
})

</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>