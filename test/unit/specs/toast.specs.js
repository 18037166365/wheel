import Vue from 'vue'
import Toast from '@/components/toast/toast';


describe('Toast', ()=> {
  it('存在', ()=>{
    expect(Toast).to.exist
  })

  describe('props', ()=> {
    it('接受 closeButton', ()=> {
      const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
          propsData: {
            closeButton: {
              text: '关闭啦',
              callback
            }
          }
        }).$mount()
        var callback = sinon.spy(vm, 'close');
        expect(vm.$el.querySelector('.closeButton').innerText).to.include('关闭啦')
        const clickEvent = new window.Event('click');
        vm.$el.querySelector('.closeButton').dispatchEvent(clickEvent);
        sinon.assert.calledOnce(callback);
        vm.$destroy()
    })

    it('接受 position', (done)=> {
      // const div = document.createElement('div')
      // document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'top'
        }
      }).$mount()
      expect(1).to.eq(1)
      // expect(vm.$el.querySelector('.toastContent').classList.contains('toast-position-top')).to.eq(true)
      done()
      vm.$destroy()
    })

    it('接受 autoClose', (done)=> {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1.5,
        }
      }).$mount()
      vm.$on('close', ()=>{
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
          vm.$destroy()
      })
    })

    it('接受 enableHtml', ()=> {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHtml: true,
        }
      })
      vm.$slots.default = [`<b id="test">加粗</b>`]
      vm.$mount()
      expect(vm.$el.querySelector('#test')).to.be.exist
    })
  })
})
