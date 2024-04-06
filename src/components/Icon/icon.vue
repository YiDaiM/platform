<template>
  <span style="display: inline-block">
    <div class="icon_wrapper">
    <i
      class="icon-body"
      :class="curClass"
      :style="curStyle"
    ></i><span><slot></slot></span>
  </div>
  </span>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'Icon'
})
</script>
<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'
import { iconType } from './types'

const props = withDefaults(defineProps<iconType>(), {
  icon: 'arrow-down',
  size: 'base'
})

const curStyle = computed(() => {
  const { color } = props
  return {
    color: color
  }
})

const curClass = computed(() => {
  const { type, icon, size } = props
  return type ? `icon-${type} icon--${type} icon--${size}` : `icon-${icon} icon--${size}`
})

</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>