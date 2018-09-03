<template>
  <div class="cascaderItem" :style="{height: height}">
    <div>
      <!-- level: {{ level }} -->
      <!-- selected: {{ selected && selected[level] && selected[level].name }} -->
    </div>
    <div class="left">
      <div class="label" v-for="item in items" :key="item.name" @click="labelHandle(item)">
        {{ item.name }}
        <span v-if="rightArrowVisible(item)" :class="iconName(item)">
          <icon class="icon"  :name="iconName(item)"></icon>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <x-cascader-item :items="rightItems" :loading-item="loadingItem" :load="load" :level="level+1" :selected="selected" :height="height" @update:selected="onupdateSelected"></x-cascader-item>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/xicon/xicon'

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
      },
      load: {
        type: Function
      },
      loadingItem: {
        type: Object,
        default: ()=> ({})
      }
    },
    components: {
      Icon,
    },
    computed: {
      rightItems() {
        if(this.selected && this.selected[this.level]) {
          let item = this.items.filter((item)=> {
            return item.name === this.selected[this.level].name
          })
          if(item && item[0].children && item[0].children.length>0) {
            return item[0].children
          }
         }
      },
    },
    methods: {
      iconName(item) {
        if(item.id == this.loadingItem.id) {
          return 'loading'
        }
        return 'right'
      },
      labelHandle(item) {
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level+1)
        console.log(copy)
        this.$emit('update:selected', copy)
      },
      onupdateSelected(childItem) {
        this.$emit('update:selected', childItem)
      },
      rightArrowVisible(item) {
        return item.children||(this.load && item.isLeaf==false)
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
  overflow: hidden;
  .left{
    // border: 1px solid #000;
    height: 100%;
    padding: .3em 0;
    overflow: scroll;
    .label {
      padding: .3rem 1em;
      text-align: left;
      display: flex;
      justify-content: space-between;
      user-select: none;
      cursor: pointer;
      white-space: nowrap;
      align-items: center;
      &:hover {
        color: $blue;
        background: $gray;
      }
      span{
        transform: scale(.5);
        display: flex;
        align-items: center;
        &.loading {
          transform: scale(1);
        }
      }
      .icon {
        // transform: scale(.5);
      }
      .loading {
        animation: spin 1s infinite;
      }
    }
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
}
</style>
