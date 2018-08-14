<template>
  <div class="row"
   :style="rowStyle"
   :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'x-row',
    props: {
      gutter: {
        type: [Number, String],
      },
      align: {
        type: String,
        default: 'left',
        validator(v){
          return ['left', 'right', 'center'].includes(v)
        }
      }
    },
    mounted(){
      console.log(this.$children)
      this.$children.forEach((vm)=>{
        vm.gutter = this.gutter
      })
    },
    computed: {
      rowStyle() {
        return {
          marginLeft: -this.gutter/2+'px',
          marginRight: -this.gutter/2+'px',
        }
      },
      rowClass() {
        const { align } = this
        return [align && `align-${align}`]
      }
    }
  }
</script>

<style scoped lang="scss">
.row{
  display: flex;
  &.align-right{
    justify-content: flex-end;
  }
  &.align-left{
    justify-content: flex-start;
  }
  &.align-center{
    justify-content: center;
  }
}
</style>
