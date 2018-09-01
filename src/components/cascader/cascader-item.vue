<template>
  <div class="cascaderItem" :style="{height: height}">
    <div>
      level: {{ level }}
      selected: {{ selected && selected[level] && selected[level].name }}
    </div>
    <div class="left">
      <div class="label" v-for="item in items" :key="item.name" @click="labelHandle(item)">
        {{ item.name }}
        <span v-if="item.children ">
          <icon class="icon" name="right"></icon>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <x-cascader-item :items="rightItems" :level="level+1" :selected="selected" :height="height" @update:selected="onupdateSelected"></x-cascader-item>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/icon/icon'

  export default {
    name: 'XCascaderItem',
    props: {
      items: {
        type: Array,
      },
      height: {
        type: String
      },
      selected: {
        type: Array,
        default: ()=> []
      },
      level: {
        type: Number,
        default: 0
      }
    },
    components: {
      Icon
    },
    computed: {
      rightItems() {
        let currentSelected = this.selected[this.level]
        if(currentSelected && currentSelected.children) {
          return currentSelected.children
        }else {
          return null
        }
      }
    },
    methods: {
      labelHandle(item) {
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level+1)
        console.log(copy)
        this.$emit('update:selected', copy)
      },
      onupdateSelected(anatherItem) {
        this.$emit('update:selected', anatherItem)
      }
    },
  }

</script>

<style scoped lang="scss">
@import '../../assets/css/index.scss';

.cascaderItem{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100px;
  .left{
    // border: 1px solid #000;
    height: 100%;
    padding: .3em 0;
    .label {
      padding: .3rem 1em;
      text-align: left;
      .icon {
        transform: scale(.5)
      }
    }
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
    // margin-top: -1px;
  }
}
</style>
