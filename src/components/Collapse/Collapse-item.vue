<template>
  <transition name="collapse-transition">
    <div class="collapse-item-wrapper" :class="{'disabledClass': item.disabled}">
    <div class="collapse-item-title" @click="change">
      <span><slot name="title" :title="item.title">{{ item.title }}</slot></span>
      <i :class="toggleIcon"></i>
    </div>
    <div class="collapse-item-content" v-if="expand">
      <slot name="content" :content="item.content">{{ item.content }}</slot>
    </div>
  </div>
  </transition>
  
</template>
<script lang="ts">
  export default {
    props: {
      item: {
        type: Object as () => any,
        defualt: () => ({})
      }
    },
    data() {
      return {
        expand: false
      }
    },
    computed: {
      toggleIcon() {
        return this.expand ? 'icon-arrow-down' : 'icon-arrow-right'
      }
    },
    emits: ['change'],
    methods: {
      _emit() {
        this.$emit('change', this.item)
      },
      change() {
        if (this.item.disabled) return
        this.expand = !this.expand
        this._emit()
      }
    }
  }
</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>