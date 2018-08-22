<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

  export default {
    name: 'x-tabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) != -1
        }
      }
    },
    data() {
      return{
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.$children.forEach(vm=>{
        if(vm.$options.name == 'xTabsHead'){
          vm.$children.forEach(item=> {
            if(item.$options.name === 'xTabsItem' && item.name===this.selected) {
              this.eventBus && this.eventBus.$emit('update:selected', this.selected, item)
            }
          })
        }
      })
    }

  }
</script>

<style scoped>

</style>
