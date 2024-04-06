<template>
  <transition name="collapse-transition">
    <div class="collapse-item-wrapper" :class="{'disabledClass': item.disabled}">
    <div class="collapse-item-title" @click="change">
      <span><slot name="title" :title="item.title">{{ item.title }}</slot></span>
      <i :class="toggleIcon"></i>
    </div>
    <transition
      name="collapse-slide"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div class="transition-box" v-if="expand">
        <div class="collapse-item-content">
          <slot name="content" :content="item.content">{{ item.content }}</slot>
        </div>
      </div>
    </transition>
  </div>
  </transition>
  
</template>
<script lang="ts">
import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'CollapseItem',
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
      toggleIcon(): string {
        return this.expand ? 'icon-arrow-down' : 'icon-arrow-right'
      }
    },
    emits: ['change'],
    methods: {
      _emit() {
        this.$emit('change', this.item)
      },
      change(): string | void {
        if (this.item.disabled) return
        this.expand = !this.expand
        this._emit()
      },
      onBeforeEnter(el: Element): void | undefined {
        const htmlEl = el as HTMLElement
        htmlEl.style.height = '0'
        htmlEl.style.overflow = 'hidden'
      },
      onEnter(el: Element) {
        const htmlEl = el as HTMLElement
        htmlEl.style.height = `${el.scrollHeight}px`
      },
      onAfterEnter(el: Element): void {
        const htmlEl = el as HTMLElement
        htmlEl.style.height = ''
        htmlEl.style.overflow = ''
      },
      onBeforeLeave(el: Element) {
        const htmlEl = el as HTMLElement
        htmlEl.style.height = `${el.scrollHeight}px`
        htmlEl.style.overflow = 'hidden'
      },
      onLeave(el: Element) {
        const htmlEl = el as HTMLElement
        htmlEl.style.height = '0'
      },
      onAfterLeave(el: Element) {
        const htmlEl = el as HTMLElement
        htmlEl.style.height = ''
        htmlEl.style.overflow = ''
      }
    }
  })
</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>