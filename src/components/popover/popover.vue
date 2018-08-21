<template>
  <div class="popover"  ref="popover">
    <div ref="contentWrapper" v-if="visible" class="content-wrapper" :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWraper" class="triggerWraper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'xPopver',
    data() {
      return {
        visible: false,
        enentHandle: null
      }
    },
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'right', 'bottom', 'left'].indexOf(value) != -1
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['hover', 'click'].indexOf(value) != -1
        }
      }
    },
    methods: {
      positionContent() {
        const { contentWrapper, triggerWraper} = this.$refs;
        document.body.appendChild(contentWrapper)
        let {width, height, left, top} = triggerWraper.getBoundingClientRect()
        let { height: height2 } = contentWrapper.getBoundingClientRect()
        let positions = {
          top: {
            top: `${top + window.scrollY}px`,
            left: `${left+ window.scrollX}px`
          },
          right: {
            top: `${top + window.scrollY + (height-height2) / 2}px`,
            left: `${left + width + window.scrollX}px`
          },
          bottom: {
            top: `${top + height + window.scrollY}px`,
            left: `${left+ window.scrollX}px`
          },
          left: {
            top: `${top + window.scrollY + (height-height2) / 2}px`,
            left: `${left+ window.scrollX}px`
          }
        }
        contentWrapper.style.left = positions[this.position].left
        contentWrapper.style.top = positions[this.position].top
      },
      listenToDocument() {
          this.enentHandle = (e)=> {
          if(this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
             return
          }
          if(this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
            return
          }
          this.close()
        }
        document.addEventListener('click', this.enentHandle)
      },
      onShow () {
        this.visible = true
        this.$nextTick(()=> {
          this.positionContent()
          this.listenToDocument()
        })
      },
      close() {
        this.visible = false;
        document.removeEventListener('click', this.enentHandle)
      },
      handle(event) {
        console.log('handle')
        console.log(event)
        if(this.$refs.triggerWraper.contains(event.target)) {
          console.log('点击了按钮')
          if(this.visible == false) {
            this.onShow()
          }else{
            this.close()
          }
        }
      }
    },
    computed: {
      openEvent () {
        if (this.trigger === 'click') {
          return 'click'
        } else {
          return 'mouseenter'
        }
      },
      closeEvent () {
        if (this.trigger === 'click') {
          return 'click'
        } else {
          return 'mouseleave'
        }
      }
    },
    mounted() {
      if(this.trigger == 'click') {
        this.$refs.popover.addEventListener('click', this.handle)
      }else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleaver', this.close)
      }
    },
    destroyed() {
       if(this.trigger == 'click') {
        this.$refs.popover.removeEventListener('click', this.handle)
      }else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleaver', this.close)
      }
    }
  }
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;

.popover{
  display: inline-flex;
  position: relative;
}
.content-wrapper{
    position: absolute;
    left: 0;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    // filter: drop-shadow(0, 1px, 1px, rgba(0, 0, 0, .5));
    background: #fff;
    padding: .3em;
    max-width: 20em;
    word-wrap: break-word;
    &.position-top{
      transform: translateY(-100%);
      margin-top: -10px;
      &::before ,&::after{
        border-bottom: none;
        border-top-color: $border-color;
        top: 100%;
        left: 10px;
      }
      &::after {
        border-top-color: #fff;
        top: calc(100% -  1px);
      }
    }
    &.position-bottom{
      margin-top: 10px;
      &::before ,&::after{
        border-top: none;
        border-bottom-color: $border-color;
        bottom: 100%;
        left: 10px;
      }
      &::after {
        border-bottom-color: #fff;
        bottom: calc(100% -  1px);
      }
    }
    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before ,&::after{
        border-left-color: $border-color;
        border-right: none;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        border-left-color: #fff;
        left: calc(100% -  1px);
      }
    }
    &.position-right{
      margin-left: 10px;
      &::before ,&::after{
        border-right-color: $border-color;
        border-left: none;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        border-right-color: #fff;
        right: calc(100% -  1px);
      }
    }
    &::before ,&::after{
      content: " ";
      display: block;
      border: 10px solid transparent;
      // border-top-color: $border-color;
      width: 0px;
      height: 0px;
      position: absolute;
      // top: 100%;
      // left: 10px;
    }
    &::after {
      // border-top-color: #fff;
      // top: calc(100% -  1px);
    }
  }
  .triggerWraper{
    display: inline-block;
  }
</style>
