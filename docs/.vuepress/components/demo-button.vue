<template>
  <div>
    <x-button>默认按钮</x-button>
    <x-button icon="settings">设置</x-button>
    <x-button icon="settings" icon-position="right">设置</x-button>
    <x-button :loading="true">默认按钮</x-button>
  </div>
</template>

<script>
import XButton from '../../../src/components/button/button'

  export default {
    components: {
      XButton,
    }
  }
</script>

<style scoped>

</style>
