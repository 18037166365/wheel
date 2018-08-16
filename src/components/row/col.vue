<template>
  <div class="col" :class="colClass"
  :style="colStyle">
    <slot ></slot>
  </div>
</template>

<script>
let validator = (value)=> {
  let keys = Object.keys(value)
  let valid = true;
  keys.forEach(key=>{
    if(!['span', 'offset'].indexOf(key)>=0) {
      valid = false
    }
  })
  return valid
}

  export default {
    name: 'x-cow',
    props: {
      span: {
        type: [Number, String],
      },
      offset: {
        type: [Number, String],
      },
      phone: {
        type: Object,
        validator
      },
      ipad: {
        type: Object,
        validator
      },
      narrowPc: {//窄pc
        type: Object,
        validator
      },
      pc: {
        type: Object,
        validator
      },
      widePc: {//宽PC
        type: Object,
        validator
      }
    },
    data() {
      return {
        gutter: null,
      }
    },
    methods: {
      creatClasses(obj, str='') {
        let array = [];
        if(!obj) return []
        if(obj.span) {
          array.push(`col-${str}${obj.span}`)
        }
        if(obj.offset) {
          array.push(`offset-${str}${obj.offset}`)
        }
        return array
      }
    },
    computed: {
      colClass() {
        let {span, offset, phone, ipad, narrowPc, pc, widePc} = this;
        let phoneClass = [];
        let creatClasses = this.creatClasses
        return [
          ...creatClasses({span, offset}),
          ...creatClasses(ipad, 'ipad-'),
          ...creatClasses(narrowPc, 'narrow-pc-'),
          ...creatClasses(pc, 'pc-'),
          ...creatClasses(widePc, 'wide-pc-'),
        ]
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

  // span默认为手机属性, 所以不需要

  //手机
  // @media (max-width: 576px){
  //   $class: col-phone-;
  //   @for $n from 1 through 24 {
  //     &.#{$class}#{$n} {
  //       width: ($n/ 24)*100%
  //     }
  //   }

  //   $offsetClass: offset-phone-;
  //   @for $n from 1 through 24 {
  //     &.#{$offsetClass}#{$n} {
  //       margin-left:  ($n/ 24)*100%
  //     }
  //   }
  // }

  //ipad
  @media (min-width: 577px ){
    $class: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/ 24)*100%
      }
    }

    $offsetClass: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$offsetClass}#{$n} {
        margin-left:  ($n/ 24)*100%
      }
    }
  }

    //窄pc
  @media (min-width: 769px){
    $class: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/ 24)*100%
      }
    }

    $offsetClass: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$offsetClass}#{$n} {
        margin-left:  ($n/ 24)*100%
      }
    }
  }



   //pc
  @media (min-width: 993px){
    $class: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/ 24)*100%
      }
    }

    $offsetClass: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$offsetClass}#{$n} {
        margin-left:  ($n/ 24)*100%
      }
    }
  }



    //宽pc
  @media (min-width: 1201px){
    $class: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/ 24)*100%
      }
    }

    $offsetClass: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$offsetClass}#{$n} {
        margin-left:  ($n/ 24)*100%
      }
    }
  }

}

</style>
