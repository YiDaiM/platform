<template>
  <div>
    <wfCollapse :list="list" ></wfCollapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list : [
        {title: '文心一言', content: '上大人孔乙己', disabled: true},
        {title: '文心一言', content: '上大人孔乙己'},
        {title: '文心一言', content: '上大人孔乙己'},
        {title: '文心一言', content: '上大人孔乙己'}
      ]
    }
  },
  methods: {
  }
}
</script> 