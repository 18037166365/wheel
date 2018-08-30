<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible =!popoverVisible ">
      <slot></slot>
    </div>
    <div class="popover" v-show="popoverVisible">
      <cascader-item :items="source">
      </cascader-item>
    </div>
  </div>
</template>

<script>
import cascaderItem from './cascader-item';

  export default {
    name: 'XCascader',
    components: {
      cascaderItem
    },
    props: {
      source: {
        type: Array,
        required: true
      },
    },
    data() {
      return {
        popoverVisible: true
      }
    },
  }
</script>

<style scoped lang="scss">
@import '../../assets/css/index.scss';

.cascader {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  .trigger {
    border: 1px solid $red;
    height: $input-height;
    width: 100px;
  }
  .popover {
    border: 1px solid $red;
    display: inline-block;
    // height: $input-height;
  }
}
</style>
