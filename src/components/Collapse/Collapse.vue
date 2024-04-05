<template>
  <div class="collapse-main-wrapper">
    <hr />
    <Collapse-item
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        @change="collapseChange($event, index)"
        ref="collapseRef"
      >
      <template v-slot:title="{ title }">
        <slot name="title" :title="title"></slot>
      </template>
      <template #content="{ content }">
        <slot name="content" :content="content"></slot>
      </template>
    </Collapse-item>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Collapse'
})
</script>
<script setup lang="ts">
import { defineProps, defineEmits, defineExpose, ref, withDefaults } from 'vue'
import { collapseType } from './types'
import CollapseItem from './Collapse-item.vue';

const props = withDefaults(defineProps<collapseType>(), {accordion: false, list: []})

let preIndex = ref<null | number>(null) // 上次展开项的索引
const collapseRef = ref([]) // 所有的 ref节点

const changeEmit = defineEmits(['change'])
const collapseChange = (item:any, index: number) => {
  const { accordion } = props
  accordion && closePreTag(index)
  changeEmit('change', item)
}

const closePreTag = (curIndex: number) => {
  if (preIndex.value && preIndex.value !== curIndex) {
    collapseRef.value[preIndex.value].expand = false
  }
  preIndex.value = curIndex
}

defineExpose({
  collapseChange,
})

</script>
<style scoped lang="scss">
@import url('./style/index.scss');
</style>