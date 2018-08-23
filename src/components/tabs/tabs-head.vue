<template>
  <div class="tabs-head" ref="tabsHead">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'xTabsHead',
    inject: ['eventBus'],
    mounted() {
      this.eventBus && this.eventBus.$on('update:selected',(item, vm)=> {
        let { width, height, top, left } = vm.$el.getBoundingClientRect()
        this.$nextTick(()=> {
          let tabsHeadWidth = this.$refs.tabsHead.getBoundingClientRect().left
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left = `${left- tabsHeadWidth}px`
        })
      })
    }
  }
</script>

<style scoped lang="scss">
$tab-height: 40px;
$blue: blue;
$border-color: #ddd;

.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid $border-color;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all .5s;
  }
  > .actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>
