---
sidebarDepth: 2
title: 'Input 输入框'
---

# 按钮

使用方法

<ClientOnly>
  <demo-input>默认按钮</demo-input>
</ClientOnly>



``` html }
    <XInput :value="value"
        @change="inputChange"
        @input="inputHandle"
        @blur="inputBlur"
        @focus="inputFocus"
        />
    <XInput value="李四" disabled/>
    <XInput value="李四a" readonly/>
    <XInput value="" error="姓名不能为空"/>
```

``` js }

import XInput from '../../../src/components/input/input'

  export default {
    components: {
      XInput
    },
    data() {
        return{
            value: '张三a',
        }
    },
    methods: {
        inputChange(e) {
            console.log('inputChange', e)
            this.value = e.target.value
        },
        inputFocus(e) {
            console.log('inputFoucs', e)
        },
        inputBlur(e) {
            console.log('inputBlur', e)
        },
        inputHandle(e) {
            console.log('inputHandle', e)
        },
    }
  }
```

Input Attributes

| 参数           | 说明           | 类型  |可选值  |默认值
| ------------- |---------------|--------|------------|--------|
| disabled      | 禁用           | Boolean |true/false |false   |
| readonly      | 只读           | Boolean| true/false |false   |
| error         | 报错信息        | String |            |        | 


Input Events

| 参数           | 说明                 | 回调参数   |
| ------------- |----------------------|--------------|
| blur          |在 Input 失去焦点时触发  |(event:Event) |
| focus         |在 Input 获取焦点时触发  |(event:Event) |
| change        |在 Input 值改变时触发   |(event:Event) |
