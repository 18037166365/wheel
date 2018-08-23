<template>
  <div>
    <XInput :value="value"
        @change="inputChange"
        @input="inputHandle"
        @blur="inputBlur"
        @focus="inputFocus"
        />
    <XInput value="李四" disabled/>
    <XInput value="李四a" readonly/>
    <XInput value="" error="姓名不能为空"/>
  </div>
</template>

<script>
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
</script>
