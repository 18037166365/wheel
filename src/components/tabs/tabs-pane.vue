<template>
  <div class="tabs-pane" :class="{active}" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'xTabsPane',
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: [Number, String],
        required: true
      }
    },
    mounted() {
      this.eventBus && this.eventBus.$on('update:selected', (name)=> {
        if(name==this.name) {
          this.active = true
        }else{
          this.active = false
        }
      })
    }
  }
</script>

<style scoped lang="scss">
.tabs-pane{
  padding: 1em;
  &.active{
    // background: red;
  }
}
</style>
