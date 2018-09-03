import Vue from 'vue'
import Row from '@/components/row/row'
import Col from '@/components/row/col'
Vue.config.productionTip = false
Vue.config.devtools = false;

describe('Row', ()=> {

  it('存在', ()=>{
    expect(Row).to.exist
  })

  it('接收gutter', (done)=>{
    Vue.component('x-row', Row)
    Vue.component('x-col', Col)

    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML=`<x-row gutter="20">
                    <x-col span="12">
                      <div class="donten"></div>
                    </x-col>
                    <x-col span="12">
                      <div class="donten"></div>
                    </x-col>
                  </x-row>`

    const vm = new Vue({
      el: div
    })

    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      const cols = vm.$el.querySelectorAll('.col')
      expect(window.getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(window.getComputedStyle(row).marginRight).to.eq('-10px')
      expect(window.getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(window.getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    },0)
  })

  it('接收align属性', ()=>{
     const Constructor = Vue.extend(Row)
     const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
     vm.$destroy()
  })

})
