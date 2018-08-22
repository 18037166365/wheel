<template>
  <div :data-name="name" class="tabs-item" @click="handleClick" :class="{ active, disabled }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'xTabsItem',
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [Number, String],
        required: true
      },
    },
    mounted() {
      this.eventBus&& this.eventBus.$on('update:selected', (name)=> {
        if(name==this.name) {
          this.active = true
        }else{
          this.active = false
        }
      })
    },
    methods: {
      handleClick() {
        if(this.disabled) return
        // this.$emit('click', this)
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
      }
    },
  }
</script>

<style scoped lang="scss">
$blue: blue;
$disabled-text-color: gray;
.tabs-item{
  padding: 0 1em;
  flex-grow: 0;
  height: 100%;
  display: flex;
  align-items:  center;
  cursor: pointer;
  &.active{
  //  background: red;
   color: $blue;
  }
  &.disabled {
    cursor: not-allowed;
    color: $disabled-text-color;
  }
}
</style>
