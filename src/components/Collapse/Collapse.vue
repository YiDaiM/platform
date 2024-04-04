<template>
  <div class="collapse-main-wrapper">
    <hr />
    <Collapse-item
      v-for="(item, index) in list"
      :key="index"
      :item="item"
      @change="collapseChange"
    ></Collapse-item>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Collapse'
})
</script>
<script setup lang="ts">
import { defineProps, defineEmits, defineExpose } from 'vue'
import { collapseType } from './types'
import CollapseItem from './Collapse-item.vue';

defineProps<collapseType>()
const changeEmit = defineEmits(['change'])
const collapseChange = (item:any) => {
  
  changeEmit('change', item)
}
defineExpose({
  collapseChange
})
</script>
<style scoped lang="scss">
@import url('./style/index.scss');
</style>