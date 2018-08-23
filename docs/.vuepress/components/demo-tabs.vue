<template>
  <div>
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
  </div>
</template>

<script>
import XTabs from '../../../src/components/tabs/tabs'
import XTabsHead from '../../../src/components/tabs/tabs-head'
import XTabsBody from '../../../src/components/tabs/tabs-body'
import XTabsItem from '../../../src/components/tabs/tabs-item'
import XTabsPane from '../../../src/components/tabs/tabs-pane'
import XButton from '../../../src/components/button/button'

  export default {
    components: {
      XTabs,
      XTabsHead,
      XTabsBody,
      XTabsItem,
      XTabsPane,
      XButton
    },
    data() {
      return{
       selected: 'sports',
      }
    }
  }
</script>

<style scoped>

</style>
