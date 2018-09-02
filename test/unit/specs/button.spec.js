import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Button from '@/components/button/button';


describe('Button', () => {

  it('存在', ()=> {
    const wrapper = shallowMount(Button)
    expect(Button).to.exist
  })

  it('可以设置icon', ()=> {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'loading'
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.equal('#i-loading')
  })
})
