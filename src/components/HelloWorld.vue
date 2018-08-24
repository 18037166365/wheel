<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <x-icon class="icon" name="settings"/>
    <x-icon name="loading1"/> -->
    <!-- <XButton icon="settings">shehi</XButton>
    <XButton :loading="true">shehi</XButton> -->
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

    <!-- Toast -->
    <XButton @click="openToast">open</XButton>

    <!-- Tabs -->
  <x-tabs :selected.sync="selected">
    <x-tabs-head>
      <template slot="actions">
        <x-button icon="settings">设置</x-button>
      </template>
      <x-tabs-item name="women" :disabled="true">
        美女
      </x-tabs-item>
      <x-tabs-item name="finance" :disabled="false">
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
  </x-tabs>

<!-- <x-popover style="margin-top: 100px;" position="top" trigger="hover">
    <div slot="content">
      content content content content content content content content content content content content content content content content
    </div>
    <x-button>open top</x-button>
  </x-popover>
  <x-popover style="margin-top: 100px;" position="bottom">
    <div slot="content" slot-scope="slotProps">
      <x-button @click="slotProps.close">close</x-button>
      content content content content content content content content content content content content content content content content
    </div>
    <x-button>open bottom</x-button>
  </x-popover>
  <x-popover style="margin-top: 100px;" position="left">
    <div slot="content">
      content content content content content content content content content content content content content content content content
    </div>
    <x-button>open</x-button>
  </x-popover>

  <x-popover style="margin-top: 100px;" position="right">
    <div slot="content">
      <a href="#">313aaaaaaa</a>
      content content content content content content content content content content content content content content content content
    </div>
    <x-button>open right</x-button>
  </x-popover> -->

  <!-- <X-collapse :selected.sync="collapseSelected" :single="true">
    <x-collapse-item title="标题1" name="1">内容1</x-collapse-item>
    <x-collapse-item title="标题2" name="2">内容2</x-collapse-item>
    <x-collapse-item title="标题3" name="3">内容3</x-collapse-item>
  </X-collapse> -->



  </div>
</template>

<script>
import XIcon from './icon/icon'

import XButton from './button/button'
import XInput from './input/input'
import XCol from './row/col'
import XRol from './row/row'
import XLayout from './layout/layout'
import XHeader from './layout/header'
import XFooter from './layout/footer'
import XSider from './layout/sider'
import XContent from './layout/content'
import XToast from './toast/toast'

import XTabs from './tabs/tabs'
import XTabsHead from './tabs/tabs-head'
import XTabsBody from './tabs/tabs-body'
import XTabsItem from './tabs/tabs-item'
import XTabsPane from './tabs/tabs-pane'

import XPopover from './popover/popover'

import XCollapse from './collapse/collapse'
import XCollapseItem from './collapse/collapse-item'





export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'To build the wheels',
      value1: '张三a',
      selected: 'sports',
      collapseSelected: ['2']
    }
  },
  components: {
    XIcon,
    XButton,
    XInput,
    XCol,
    XRol,
    XContent,
    XSider,
    XFooter,
    XHeader,
    XLayout,
    XToast,
    XTabs,
    XTabsHead,
    XTabsBody,
    XTabsItem,
    XTabsPane,
    XPopover,
    XCollapse,
    XCollapseItem
  },
  methods: {
    // selecteTab() {

    // },
    openToast(){
      this.$toast(' hello world ', {
        closeButton: {
          text: '关闭',
          callBack(toast) {//可以调用toast组件实例
            console.log('关闭callBack')
          }
        },
        position: 'top',
        autoClose: false,//默认为1.5s
        enableHtml: false
      })
    },
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
  },
  mounted(){

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
