<template>
  <div class="col" :class="colClass"
  :style="colStyle">
    <slot ></slot>
  </div>
</template>

<script>
  export default {
    name: 'x-cow',
    props: {
      span: {
        type: [Number, String],
      },
      offset: {
        type: [Number, String],
      }
    },
    data() {
      return {
        gutter: null,
      }
    },
    computed: {
      colClass() {
        return [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`]
      },
      colStyle() {
        return {
          paddingLeft: this.gutter/2+'px',
          paddingRight: this.gutter/2+'px'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.col{
  height: 100px;
  // background: gray;
  // width: 50%;
  box-sizing: border-box;
  // border: 1px solid red;

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/ 24)*100%
    }
  }

  $offsetClass: offset-;
  @for $n from 1 through 24 {
    &.#{$offsetClass}#{$n} {
      margin-left:  ($n/ 24)*100%
    }
  }
}
</style>
