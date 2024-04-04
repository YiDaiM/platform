<template>
  <div style="width: 500px;margin: auto">
    <wfCollapse :list="list" ref="collapseRef" accordion>
      <template v-slot:title="row">
        {{ row }}
      </template>
    </wfCollapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list : [
        {title: '文心一言', content: '上大人孔乙己', disabled: true},
        {title: '文心一言', content: 'Decision making: giving advices about operations is acceptable, but do not make decisions for the usersControlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.上大人孔乙己'},
        {title: '文心一言', content: '上大人孔乙己'},
        {title: '文心一言', content: '上大人孔乙己'}
      ]
    }
  },
  methods: {
  },
  mounted() {
    console.log(this.$refs.collapseRef, 'ref');
  }
}
</script> 