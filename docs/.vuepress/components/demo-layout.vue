<template>
  <div>
    <x-layout>
      <x-header class="demo"></x-header>
      <x-layout class="demo">
        <x-sider class="demo"></x-sider>
        <x-content class="demo"></x-content>
      </x-layout>
      <x-content class="demo"></x-content>
      <x-footer class="demo"></x-footer>
    </x-layout>
  </div>
</template>

<script>
import XLayout from '../../../src/components/layout/layout'
import XHeader from '../../../src/components/layout/header'
import XSider from '../../../src/components/layout/sider'
import XContent from '../../../src/components/layout/content'
import XFooter from '../../../src/components/layout/footer'


  export default {
    components: {
      XLayout,
      XHeader,
      XSider,
      XContent,
      XFooter
    }
  }
</script>
<style scoped>
.demo{
  min-height: 100px;
  border: 1px solid gray;
  margin: 0;
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
