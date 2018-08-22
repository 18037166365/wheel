<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'XCollapseItem',
    props: {
      title: {
        type: String,
      },
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        open: false,
      }
    },
    inject: ['eventBus'],
    mounted () {
      this.eventBus && this.eventBus.$on('update:selected', (names) => {
        if (names.indexOf(this.name)!=-1) {
          this.open = true
        } else {
          this.open= false
        }
      })
    },
    methods: {
      toggle () {
        if(!this.open) {
          console.log('open', this.name)
          this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
        }else{
          console.log('close', this.name)
          this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
        }
      },
      close() {
        this.open = false;
      }
    },
  }
</script>

<style scoped lang="scss">
$gray: #ddd;
$border-radius: 4px;

.collapse-item {
  > .title {
    border: 1px solid $gray;
    margin: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  > .content{
    padding: 8px;
  }
  &:last-child {
    > .title:last-child{
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
}
</style>
