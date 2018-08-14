import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import Input from '@/components/input/input'

describe('Input', ()=> {
  // beforeEach((()=>{
  //   const Constructor = Vue.extend(Input)
  //   const vm = new Constructor({
  //     propsData: {
  //       value: '123'
  //     }
  //   }).$mount()
  // })

  // afterEach(()=>{
  //   vm.$destroy()
  // })


  it('存在', ()=>{
    expect(Input).to.exist
  })

  it('接收value, ', ()=> {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        value: '123'
      }
    }).$mount()
    expect(vm.$el.querySelector('input').value)
      .to.equal('123')
    vm.$destroy()

  })

  it('接收disabled, ', ()=> {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    expect(vm.$el.querySelector('input').disabled)
      .to.equal(true)
    vm.$destroy()
  })

  it('接收readOnly, ', ()=> {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        readonly: true
      }
    }).$mount()
    expect(vm.$el.querySelector('input').readOnly)
      .to.equal(true)
    vm.$destroy()
  })

  it('接收error ', ()=> {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        error: '你错了'
      }
    }).$mount()
    expect(vm.$el.querySelector('.error-message').innerText)
      .to.equal('你错了')
    vm.$destroy()
  })

  it('支持inputChange ', ()=> {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({}).$mount()
    const callBack = sinon.fake();
    vm.$on('change', callBack)

    let event = new Event('change')
    let inputElement = vm.$el.querySelector('input')
    inputElement.dispatchEvent(event)
    expect(callBack).to.have.been.calledWith(event)
    vm.$destroy()
  })
})
