<template>
  <div class="toastWrap">
    <div class="toastContent" ref="wrapper" :class="tostClasses">
       <slot v-if="!enableHtml"></slot>
       <span v-if="enableHtml" v-html="$slots.default[0]"></span>
       <!-- <div class="line"></div> -->
       <span class="closeButton" ref="close" v-if="closeButton" @click="closeButtonHandle">
         {{ closeButton.text }}
       </span>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// Vue.prototype.$toast = ()=>{
//   alert('Toast')
// }
  export default {
    name: 'x-toast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 1
      },
      position: {
        type: String,
        validator(value){
           return ['top', 'bottom', 'middle'].indexOf(value)>=0
        },
        default: 'middle'
      },
      closeButton: {
        type: Object,
        default(){
          return{
            text: '关闭',
            callBack: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      tostClasses() {
        return `toast-position-${this.position}`
      }
    },
    methods: {
      close() {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      closeButtonHandle() {
        this.close()
        if( this.closeButton && typeof  this.closeButton.callBack === 'function') {
          this.closeButton.callBack(this) // this 指 toast 实例
        }
      },
      exexAutoClose() {
        if(this.autoClose) {
          setTimeout(()=>{
            this.close()
          },this.autoCloseDelay*1000)
        }
      },
      updateStyles() {
        this.$nextTick(()=>{
          this.$refs.close.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      },
      test(str) {
        console.log(str)
      }
    },
    mounted() {
      this.exexAutoClose()
      this.updateStyles()

    }
  }
</script>

<style scoped lang="scss">
$toast-bg: rgba(0,0,0,.75);
$font-size: 14px;
$toast-height: 40px;
$animation-duration: 500ms;


@keyframes fadeIn {
  0%{opacity: 0;}
  100%{opacity: 1;}
}

@keyframes slideTop {
  0%{transform: translateY(100%)}
  100%{transform: translateY(0%)}
}

@keyframes slideBottom {
  0%{transform: translateY(-100%)}
  100%{transform: translateY(0%)}
}
.toastWrap {
  .toastContent {
    animation: fade 1s;
    position: fixed;
    left: 50%;
    display: flex;
    min-height: $toast-height;
    background: $toast-bg;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: $font-size;
    color: #fff;
    align-items: center;
    .closeButton{
      flex-shrink: 0;
      display: flex;
      align-items: center;
      flex-grow: 1;
      justify-content: flex-end;
      &::before{
        content: " ";
        height: 100%;
        border-right: 1px solid #999;
        margin: 0 5px;
        padding: 2.5px;
      }
    }
    &.toast-position-bottom{
      bottom: 0;
      width: 100%;
      left: 0;
      border-radius: 0;
      animation: slideTop $animation-duration;

    }
    &.toast-position-top{
      top: 0;
      width: 100%;
      left: 0;
      border-radius: 0;
      animation: slideBottom $animation-duration;
    }
    &.toast-position-middle{
      animation: fadeIn $animation-duration;
      max-width: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
