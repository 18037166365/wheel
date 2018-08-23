<template>
  <div>
    <x-collapse :selected.sync="collapseSelected" :single="true">
      <x-collapse-item title="标题1" name="1">内容1</x-collapse-item>
      <x-collapse-item title="标题2" name="2">内容2</x-collapse-item>
      <x-collapse-item title="标题3" name="3">内容3</x-collapse-item>
    </x-collapse>
  </div>
</template>

<script>
import XCollapse from '../../../src/components/collapse/collapse'
import XCollapseItem from '../../../src/components/collapse/collapse-item'

  export default {
    components: {
      XCollapse,
      XCollapseItem
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
