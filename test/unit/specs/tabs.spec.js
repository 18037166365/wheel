import Vue from 'vue'
import Tabs from '@/components/tabs/tabs'
import XButton from '@/components/button/button'
import XTabs from '@/components/tabs/tabs'
import XTabsHead from '@/components/tabs/tabs-head'
import XTabsBody from '@/components/tabs/tabs-body'
import XTabsItem from '@/components/tabs/tabs-item'
import XTabsPane from '@/components/tabs/tabs-pane'

Vue.config.productionTip = false
Vue.config.devtools = false;

describe('Tabs', ()=> {
  const div = document.createElement('div')
  document.body.appendChild(div)

  div.innerHTML= `
  <x-tabs selected="finance">
    <x-tabs-head>
      <x-tabs-item name="women">
        美女
      </x-tabs-item>
      <x-tabs-item name="finance">
        财经
      </x-tabs-item>
      <x-tabs-item name="sports">
        体育
      </x-tabs-item>
    </x-tabs-head>
    <x-tabs-body>
      <x-tabs-pane name="women">
        美女美女美女美女美女
      </x-tabs-pane>
      <x-tabs-pane name="finance">
        财经财经财经财经财经
      </x-tabs-pane>
      <x-tabs-pane name="sports">
        体育体育体育体育体育
      </x-tabs-pane>
    </x-tabs-body>
  </x-tabs>`

  let vm = new Vue({
    el: div,
    components: {
      XButton,
      XTabs,
      XTabsHead,
      XTabsBody,
      XTabsItem,
      XTabsPane
    },
  })

  it('存在', ()=>{
    expect(Tabs).to.exist
  })


  describe('tabs 参数测试', ()=> {
    it('接受 selected 参数', (done)=> {
      vm.$nextTick(()=> {
        let item2 = document.querySelector('.tabs-item:nth-child(2)')
        expect(item2.classList.contains('active')).to.be.true
        done()
      })
    })
  })

  describe('tabs 参数测试', ()=> {
    it('接受 direction 参数', ()=> {

    })
  })

  describe('tabs-item 参数测试', ()=> {
    it('接受 name 参数', ()=> {
      const Constructor= Vue.extend(XTabsItem)
      const vm = new Constructor({
        propsData: {
          name: 'xxx'
        }
      }).$mount()
      expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })

    it('接受 disabled 参数 true', (done)=> {
      const Constructor= Vue.extend(XTabsItem)
      const vm = new Constructor({
        propsData: {
          name: 'xxx',
          disabled: true
        }
      }).$mount()
      expect(vm.$el.classList.contains('disabled')).to.be.true

      var callback = sinon.spy(vm, 'handleClick');
        const clickEvent = new window.Event('click');
        vm.$el.dispatchEvent(clickEvent);
        setTimeout(()=>{
          expect(vm.$el.classList.contains('active')).to.be.false
          done()
        },1000)
        vm.$destroy()
    })
  })
})
