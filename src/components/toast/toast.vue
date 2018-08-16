<template>
  <div class="toastWrap">
    <div class="toastContent" ref="wrapper">
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
    methods: {
      close() {
        this.$el.remove()
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

.toastWrap {
  .toastContent {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    min-height: $toast-height;
    background: $toast-bg;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: $font-size;
    color: #fff;
    // .line {
    //   height: 100%;
    //   border-left: 1px splid #666;
    //   margin: 0 10px;
    //   display: inline-block;
    // }
    .closeButton{
      flex-shrink: 0;
      display: flex;
      align-items: center;
      &::before{
        content: " ";
        height: 100%;
        border-left: 1px solid #999;
        margin: 0 5px;
        padding: 2.5px 0;
      }
    }
  }
}
</style>
