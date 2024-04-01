<template>
  <button
    ref="_ref"
    class="wf-button"
    v-bind="$attrs"
    :type="nativeType"
    :autofocus="autofocus"
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
import { defineProps, withDefaults, defineExpose, ref } from 'vue'
import type { ButtonProps, ButtonInstance } from './types'

// withDefault 可以设置默认值
withDefaults(defineProps<ButtonProps>(), {nativeType: 'button'})

const _ref = ref<ButtonInstance>()

defineExpose({
  ref: _ref
})

</script>
<style lang="scss" scoped>
@import url('./style.scss');
</style>