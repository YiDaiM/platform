<script setup lang="ts">
import wfButton from './components/Button/Button.vue'
</script>

<template>
  <div id="main">
    <wfButton type="warning">默认按钮</wfButton>
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
