<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    <div class="trigger" @click="toogle">
      {{ result  }}
    </div>
    <div class="popover-wraper" v-show="popoverVisible" ref="popoverWraper">
      <cascader-item :selected="selected" :items="source" :loading-item="loadingItem" :load="load" @update:selected="onUpdateSelected" class="popover" :height="popoverHeight" :style="{'height': popoverHeight}">
      </cascader-item>
      <x-input></x-input>
    </div>
  </div>
</template>

<script>
import XInput from '@/components/input/input'
import cascaderItem from './cascader-item';
import ClickOutside from './direction.js'

  export default {
    name: 'XCascader',
    components: {
      cascaderItem,
      XInput
    },
    directives: {
      ClickOutside
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
      },
      load: {
        type: Function
      }
    },
    data() {
      return {
        popoverVisible: false,
        loadingItem: {}
      }
    },
    methods: {
      onClickDocument(e) {
        let { cascader, popoverWraper } = this.$refs;
        let { target } = e;
        if(cascader  === target || cascader.contains(target)) {
          return
        }else {
          this.close()
        }
      },
      open() {
        console.log('open')
        this.popoverVisible = true
        // this.$nextTick(()=> {
        //   document.addEventListener('click', this.onClickDocument)
        // })
      },
      close() {
        console.log('close')
        this.popoverVisible = false
        // document.removeEventListener('click', this.onClickDocument)
      },
      toogle() {
        console.log('toogle')
        if(this.popoverVisible == true) {
          this.close()
        }else {
          this.open()
        }
      },
      onUpdateSelected(selected) {
        console.log(selected)
        this.$emit('update:selected', selected)
        let lastItem = selected[selected.length-1]

        let simplest = (children, id)=> {
          return children.filter(item=> {
            return item.id == id
          })[0]
        }

        let complex = (children, id)=> {
          let noChildren = []
          let hasChildren = []
          children.forEach(item => {
            if(item.children) {
              hasChildren.push(item)
            }else {
              noChildren.push(item)
            }
          });

          let found = simplest(noChildren, id)

          if(found) {
            console.log('simplest')
            return found
          }else {
            console.log('complex-simplest')
             found = simplest(hasChildren, id)
             if(found) {
               return found
             }else {
               for(let i = 0; i<hasChildren.length; i++) {
                found = complex(hasChildren[i].children, id)
                if(found) {
                  return found
                }
               }
               console.log('undifind')
              return undefined
             }
          }
        }


        let resolve = (res)=> {
          // let toUpdate = this.source.filter((item)=> {
          //     return item.id === lastItem.id
          //  })[0]
          console.log('this.source')
          console.log(this.source)
          console.log(lastItem.id)
          this.loadingItem = {}
          let copy = JSON.parse(JSON.stringify(this.source))
          let toUpdate = complex(copy, lastItem.id)
          toUpdate.children = res
          console.log('res')
          console.log(res)
          console.log(toUpdate)
          if(res.length && res.length>0) {
            this.$emit('update:source', copy)
          }
        }
        if(!lastItem.isLeaf && this.load) {
          this.load(lastItem, resolve)
          if(!lastItem.children){
            this.loadingItem = lastItem;
          }
        }
      },
    },
    computed: {
      result () {
        return this.selected.map((item)=> {
         return item.name
        }).join('/')
      }
    },
  }
</script>

<style scoped lang="scss">
@import '../../assets/css/index.scss';


.cascader {
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  .trigger {
    display: inline-block;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    height: $input-height;
    min-width: 100px;
    padding: .3em .5em;
    user-select: none;
  }
  .popover-wraper {
    position: absolute;
    top: 120%;
    left: 0;
    width: auto;
    background: #fff;
    display: inline-block;
    z-index: 1;
    @extend .box-shadow
  }
}
</style>
