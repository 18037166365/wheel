<template>
  <div>
    <x-button @click="openToast">openToast</x-button>
  </div>
</template>

<script>
import Vue from 'vue'
import XButton from '../../../src/components/button/button'
import Toast from '../../../src/components/toast/toast'
console.lo
let currentToast;
Vue.prototype.$toast = (message, tostOptions)=>{
    if(currentToast) {
    currentToast.close()
    }
    currentToast= creatToast({Vue, message, propsData: tostOptions, onClose: ()=>{
    console.log('toast.$on(close)')
    currentToast = null;
    }})
}
function creatToast({Vue, message, propsData, onClose}) {
  let Constructor = Vue.extend(Toast)
      let toast = new Constructor({ propsData })
      toast.$slots.default= [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
      toast.$on('close', onClose)
      return toast
}

  export default {
    components: {
      XButton
    },
    data() {
      return{
        collapseSelected: ['2']
      }
    },
    methods: {
    openToast(){
      this.$toast(' hello world ', {
        closeButton: {
          text: '关闭',
          callBack(toast) {//可以调用toast组件实例
            console.log('关闭callBack')
          }
        },
        position: 'top',
        autoClose: false,//默认为1.5s
        enableHtml: false
      })
    },
    }
  }
</script>

<style>
*{
    box-sizing: border-box;
}
</style>
