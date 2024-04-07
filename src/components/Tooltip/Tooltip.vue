<template>
  <span v-on="events">
    <span><slot></slot></span>
    <div v-if="exhibit">tooltip-content</div>
  </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Tooltip'
})
</script>
<script setup lang="ts">
import { ref, withDefaults, defineProps, reactive } from 'vue'
import { tooltipProps } from './types'

const exhibit = ref(false) // tooltip展示变量

// tooltip事件触发
const toggle = () => {
  exhibit.value = !exhibit.value
}
const open = () => {
  exhibit.value = true
}
const close = () => {
  exhibit.value = false
}
const events = reactive({
  'click': toggle,
  'mouseleave': close,
  'mouseenter': open
})


const props = withDefaults(defineProps<tooltipProps>(), {
  trigger: 'hover'
})

</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>