import Vue from 'vue'
import Col from '@/components/row/col'
Vue.config.productionTip = false
Vue.config.devtools = false;

describe('Col', ()=> {

  it('存在', ()=>{
    expect(Col).to.exist
  })

  it('接收span', ()=>{
     const Constructor = Vue.extend(Col)
     const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        span: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()                          
  })

  it('接收offset', ()=>{
     const Constructor = Vue.extend(Col)
     const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        offset: 1 
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('offset-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()                          
  })

  it('接收pc', ()=>{
     const Constructor = Vue.extend(Col)
     const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        pc: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-pc-1')).to.eq(true)
    expect(element.classList.contains('offset-pc-2')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()                          
  })
})
