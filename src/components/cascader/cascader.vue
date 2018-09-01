<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible =!popoverVisible ">
      <slot></slot>
    </div>
    <div class="popover-wraper" v-show="popoverVisible">
      <cascader-item :selected="selected" :items="source" @update:selected="onUpdateSelected" class="popover" :height="popoverHeight" :style="{'height': popoverHeight}">
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
      selected: {
        type: Array,
        default: ()=> []
      },
      popoverHeight: {
        type: String
      }
    },
    data() {
      return {
        popoverVisible: true
      }
    },
    methods: {
      onUpdateSelected(selected) {
        this.$emit('update:selected', selected)
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
  position: relative;
  .trigger {
    border: 1px solid #000;
    height: $input-height;
    width: 100px;
  }
  .popover-wraper {
    position: absolute;
    top: 120%;
    left: 0;
    background: #fff;
    display: inline-block;
    @extend .box-shadow
  }
}
</style>
