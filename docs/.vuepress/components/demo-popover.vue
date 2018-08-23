<template>
  <div>
    <x-popover style="margin: 30px 10px;" position="top" trigger="hover">
      <div slot="content">
           content
      </div>
      <x-button>open top</x-button>
    </x-popover>
    <x-popover style="margin: 30px 10px;" position="bottom">
      <div slot="content" slot-scope="slotProps">
        <x-button @click="slotProps.close">close</x-button>
           content
      </div>
      <x-button>open bottom</x-button>
    </x-popover>
    <x-popover style="margin: 30px 10px;" position="left">
      <div slot="content">
           content
      </div>
      <x-button>open</x-button>
    </x-popover>
    <x-popover style="margin: 30px 10px;" position="right">
      <div slot="content">
        <a href="#">313aaaaaaa</a>
           content
      </div>
      <x-button>open right</x-button>
    </x-popover>
  </div>
</template>

<script>
import XPopover from '../../../src/components/popover/popover'
import XButton from '../../../src/components/button/button'

  export default {
    components: {
      XPopover,
      XButton
    },
    data() {
      return{
        collapseSelected: ['2']
      }
    }
  }
</script>

<style scoped>

</style>
