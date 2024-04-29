<template>
  <div class="drop-item-wrapper">
    <div
      class="drop-item"
      v-for="({value, label}) in list"
      :key="value"
    >
      {{ label }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {dropdownItemType} from './types'
export default defineComponent({
  name: 'DropdownItem'
})
</script>
<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
const props = withDefaults(defineProps<dropdownItemType>(), {
})
</script>
<style lang="scss" scoped>
@import url('./styles/index.scss');
</style>