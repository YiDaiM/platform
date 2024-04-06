<template>
  <transition name="fade">
    <div class="alert-wrapper" :class="[`alert--${effect}--${type}`]" v-if="alertShow">
      <div class="alert-content">
        <wf-icon :type="type" size="large" v-if="showIcon"></wf-icon>
        <div class="alert-content-aside">
          <header :style="headStyle">{{ title }}</header>
          <article :style="artStyle">{{ description }}</article>
        </div>
      </div>
      <div class="alert-close" v-if="closable" @click="close">
        <slot name="close-text"><wf-icon icon="close"></wf-icon></slot>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Alert'
})
</script>
<script lang="ts" setup>
import { defineProps, withDefaults, computed, ref } from 'vue';
import { alertType } from './types'
const props = withDefaults(defineProps<alertType>(), {
  closable: true,
  showIcon: true,
  center: 'left',
  type: 'warning',
  effect: 'light'
})


let alertShow = ref(true)

const close = () => {
  alertShow.value = false
}

const headStyle = computed(() => {
  const { center } = props
  return {
    'fontSize': '22px',
    'textAlign': center,
    'overflowWrap': 'anywhere'
  }
})

const artStyle = computed(() => {
  const { center } = props
  return {
    'fontSize': '20px',
    'textAlign': center,
    'overflowWrap': 'anywhere'
  }
})
</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>