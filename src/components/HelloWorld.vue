<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- INPUT -->
    <!-- <h2>{{ value1 }}</h2>
    <XInput :value="value1"
    @change="inputChange"
    @input="inputHandle"
    @blur="inputBlur"
    @focus="inputFocus"
    />
    <XInput value="李四" disabled/>
    <XInput value="李四a" readonly/>
    <XInput value="121" error="姓名不能为空"/> -->

    <!-- COL=ROL -->
    <!-- <div style="width: 100%;">
      <x-rol gutter="30">
        <x-col span="12"
        :ipad="{span: 8}"
        :narrow-pc="{span: 4}"
        :pc="{span: 2}"
        :wide-pc="{span: 1}"
        >
          <div class="donten"></div>
        </x-col>
        <x-col span="12"
          :ipad="{span: 16}"
          :narrow-pc="{span: 20}"
          :pc="{span: 22}"
          :wide-pc="{span: 23}"
         >
          <div class="donten"></div>
        </x-col>
      </x-rol>
      <x-rol gutter="20">
        <x-col span="6">
          <div class="donten"></div>
        </x-col>
        <x-col span="6">
          <div class="donten"></div>
        </x-col>
        <x-col span="6">
          <div class="donten"></div>
        </x-col>
        <x-col span="6">
          <div class="donten"></div>
        </x-col>
      </x-rol>
    </div> -->

    <!-- 布局 -->
    <!-- <x-layout>
      <x-header class="demo"></x-header>
      <x-layout class="demo">
        <x-sider class="demo"></x-sider>
        <x-content class="demo"></x-content>
      </x-layout> 
      <x-content class="demo"></x-content>
      <x-footer class="demo"></x-footer>
    </x-layout> -->

    
  </div>
</template>

<script>
import XButton from './button/button'
import XInput from './input/input'
import XCol from './row/col'
import XRol from './row/row'
import XLayout from './layout/layout'
import XHeader from './layout/header'
import XFooter from './layout/footer'
import XSider from './layout/sider'
import XContent from './layout/content'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'To build the wheels',
      value1: '张三a'
    }
  },
  components: {
    XButton,
    XInput,
    XCol,
    XRol,
    XContent,
    XSider,
    XFooter,
    XHeader,
    XLayout
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

<style scoped lang="scss">
.demo{
  min-height: 100px;
  border: 1px solid gray;
}
.slider{
    background: #333; 
    width: 200px;
}
.header{
  background: #999;
  height: 100px;
}
.footer{
  background: #ccc;
  height: 100px;
}

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
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
.donten{
  width: 100%;
  height: 100%;
  background: red;
  border-radius: 5px;
}
.row{
  margin-bottom: 20px;
}
</style>
