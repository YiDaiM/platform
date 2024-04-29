<template>
  <div class="dropdown-wrapper">
    <wf-tooltip trigger="click">
      <div class="dropdown-touch">{{ current }}123123231</div>
      <template #content>
        <wf-dropdownItem :list="list"></wf-dropdownItem>
      </template>
    </wf-tooltip>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Dropdown'
})
</script>
<script lang="ts" setup>
import { dropdownType } from './types'
import { defineProps, withDefaults, ref, reactive } from 'vue';


let current = ref(null)
const list = reactive([
    {label: '孔乙己', value: 1},
    {label: '上大人', value: 2},
    {label: '老人家', value: 3},
    {label: '好家伙', value: 4}
  ])

withDefaults(defineProps<dropdownType>(), {
  list: () => []
})
</script>
<style lang="scss">
@import url('./styles/index.scss');
</style>