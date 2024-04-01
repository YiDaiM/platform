<script setup lang="ts">
const toLog = () => {
  console.log('hello world');
  
}
</script>

<template>
  <div id="main">
    <wfButton type="warning" size="large" round disabled @click="toLog">默认按钮</wfButton>
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
