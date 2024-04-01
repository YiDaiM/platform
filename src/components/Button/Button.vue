<template>
  <button
    class="wf-button"
    v-bind="$attrs"
    :class="{
      [`button--${type}`]: type,
      [`button--${size}`]: size,
      'is-round': round
    }"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: `Button`
})
</script>
<script lang="ts" setup>
import { defineProps } from 'vue'
import type { ButtonProps } from './types'

defineProps<ButtonProps>()

</script>
<style lang="scss" scoped>
@import url('./style.scss');
</style>