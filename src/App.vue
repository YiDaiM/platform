<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ButtonInstance } from './components/Button/types'
const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref, '_ref');
  }
})
</script>

<template>
  <div id="main">
    <wfButton ref="buttonRef" type="warning" size="large" round disabled>默认按钮</wfButton>
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main {
  width: 100%;
  margin: 200px auto;
}
</style>
