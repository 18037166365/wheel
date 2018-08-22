<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

  export default {
    name: 'xCollapse',
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: {
        type: [Array]
      }
    },
    data() {
      return{
        eventBus: new Vue(),
        selectedArray: []
      }
    },
    provide() {
      return{
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.selectedArray = this.selected
      this.eventBus.$emit('update:selected', this.selected)
      this.eventBus.$on('update:addSelected', name=> {
        if(this.single) {
          this.selectedArray=[name]
        }else{
          this.selectedArray.push(name)
        }
        this.$emit('update:selected',  this.selectedArray)
        this.selected && this.eventBus && this.eventBus.$emit('update:selected', this.selectedArray)
      })
      this.eventBus.$on('update:removeSelected', name=> {
        let index = this.selectedArray.indexOf(name)
        this.selectedArray.splice(index, 1)
        this.eventBus.$emit('update:selected', this.selectedArray)
        this.$emit('update:selected',  this.selectedArray)
      })
    },
  }
</script>

<style scoped lang="scss">
$gray: #ddd;
$border-radius: 4px;

.collapse {
  border: 1px solid $gray;
  border-radius: $border-radius;
}
</style>
