import Toast from '@/components/toast/toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = (msg, tostOptions)=>{
      console.log('Toast:'+ msg)

      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          closeButton: tostOptions.closeButton,
          autoClose: tostOptions.autoClose,
          autoCloseDelay: tostOptions.autoCloseDelay,
          enableHtml: tostOptions.enableHtml
        }
      })
      toast.$slots.default= [msg]
      toast.$mount()
      console.log(toast.$el)
      document.body.appendChild(toast.$el)
    }
  }
}
