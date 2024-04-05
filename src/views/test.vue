<template>
  <div style="width: 500px;margin: auto">
    <wfCollapse :list="list" ref="collapseRef" accordion>
      <template v-slot:title="{title}">
        {{ title }}
      </template>
      <template v-slot:content="{content}">
        {{ content }}
      </template>
    </wfCollapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list : [
        {title: 'Efficiency', content: ' Simplify the process: keep operating process simple and intuitive;  Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;  Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. '},
        {title: 'Feedback', content: 'Decision making: giving advices about operations is acceptable, but do not make decisions for the usersControlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.上大人孔乙己'},
        {title: 'Controllability', content: ' Decision making: giving advices about operations is acceptable, but do not make decisions for the users;  Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. '},
        {title: 'Consistency', content: 'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.'}
      ]
    }
  },
  methods: {
  }
}
</script> 