import Vue from 'vue'
import Toast from '@/components/toast/toast';

console.log('testspy')
var spy = sinon.spy();

//我们可以像调用函数一样调用spy
spy('Hello', 'World');

//我们可以得到调用信息
console.log(spy.firstCall.args); //output: ['Hello', 'World']



describe('Toast', ()=> {
console.log('sinon')
console.log(sinon)
  it('存在', ()=>{
    expect(Toast).to.exist
  })

  describe('props', ()=> {
    it('接受 closeButton', ()=> {



      const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
          propsData: {
            closeButton: {
              text: '关你妈的闭',
              callback
            }
          }
        }).$mount()
        var callback = sinon.spy(vm, 'close');
        console.log(callback)
        expect(vm.$el.querySelector('.closeButton').innerText).to.include('关你妈的闭')
        // var closeBtn = vm.$el.querySelector('.closeButton')
        const clickEvent = new window.Event('click');
        vm.$el.querySelector('.closeButton').dispatchEvent(clickEvent);
        // vm._watcher.run();
        // closeBtn.click()
        console.log(callback)
        sinon.assert.calledOnce(callback);
        // assert(callback.calledOnce);
        // expect(vm.$el.querySelector('.closeButton')).to.eq(undefined)
          vm.$destroy()
        // const clickEvent = new window.Event('click');
        // vm.$el.querySelector('.closeButton').dispatchEvent(clickEvent);
        // vm._watcher.run();
        // setTimeout(() => {
        //   expect(vm.$el.querySelector('.closeButton')).to.eq(undefined)
        //   vm.$destroy()
        //   done()
        // }, 100);


    })

    it('接受 position', ()=> {
      const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
          propsData: {
            position: 'top'
          }
        }).$mount()
        expect(vm.$el.querySelector('.toastContent').classList.contains('toast-position-top')).to.eq(true)
        vm.$destroy()
    })

    it('接受 autoClose', (done)=> {
      const div = document.createEle
      const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
          propsData: {
            autoClose: 1.5,
          }
        }).$mount(div)
        vm.$on('close', ()=>{
          expect(document.body.contains(vm.$el)).to.eq(false)
          done()
           vm.$destroy()
        })
    })

  })

  // it('接收value, ', ()=> {
  //   const Constructor = Vue.extend(Input)
  //   const vm = new Constructor({
  //     propsData: {
  //       value: '123'
  //     }
  //   }).$mount()
  //   expect(vm.$el.querySelector('input').value)
  //     .to.equal('123')
  //   vm.$destroy()

  // })

  // it('接收disabled, ', ()=> {
  //   const Constructor = Vue.extend(Input)
  //   const vm = new Constructor({
  //     propsData: {
  //       disabled: true
  //     }
  //   }).$mount()
  //   expect(vm.$el.querySelector('input').disabled)
  //     .to.equal(true)
  //   vm.$destroy()
  // })

  // it('接收readOnly, ', ()=> {
  //   const Constructor = Vue.extend(Input)
  //   const vm = new Constructor({
  //     propsData: {
  //       readonly: true
  //     }
  //   }).$mount()
  //   expect(vm.$el.querySelector('input').readOnly)
  //     .to.equal(true)
  //   vm.$destroy()
  // })

  // it('接收error ', ()=> {
  //   const Constructor = Vue.extend(Input)
  //   const vm = new Constructor({
  //     propsData: {
  //       error: '你错了'
  //     }
  //   }).$mount()
  //   expect(vm.$el.querySelector('.error-message').innerText)
  //     .to.equal('你错了')
  //   vm.$destroy()
  // })

})
