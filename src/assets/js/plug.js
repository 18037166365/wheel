import Toast from '@/components/toast/toast'

let currentToast;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, tostOptions)=>{
      if(currentToast) {
        currentToast.close()
      }
      currentToast= creatToast({Vue, message, propsData: tostOptions, onClose: ()=>{
        console.log('toast.$on(close)')
        currentToast = null;
      }})
    }
  }
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
