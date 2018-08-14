<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ value1 }}</h2>
    <XInput :value="value1" 
    @change="inputChange"
    @input="inputHandle"
    @blur="inputBlur"
    @focus="inputFocus"
    />
    <XInput value="李四" disabled/>
    <XInput value="李四a" readonly/>
    <XInput value="121" error="姓名不能为空"/>
  </div>
</template>

<script>
import XButton from './button/button'
import XInput from './input/input'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello world',
      msg1: "hello world",
      value1: '张三a'
    }
  },
  components: {
    XButton,
    XInput
  },
  methods: {
    inputChange(e) {
      console.log('inputChange', e)
      this.value1 = e.target.value
    },
    inputFocus(e) {
      console.log('inputFoucs', e)
      // this.value1 = e.target.value
    },
    inputBlur(e) {
      console.log('inputBlur', e)
      // this.value1 = e.target.value
    },
    inputHandle(e) {
      console.log('inputHandle', e)
      // this.value1 = e.target.value
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
