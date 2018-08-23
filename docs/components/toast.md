---
sidebarDepth: 2
title: 'Toast 吐司'
---

# Toast

使用方法

<ClientOnly>
  <demo-toast></demo-toast>
</ClientOnly>



``` html 4}
<x-button @click="openToast">openToast</x-button>
```
``` js 4}
export default {
    components: {
      XButton
    },
    data() {
      return{
        collapseSelected: ['2']
      }
    },
    methods: {
    openToast(){
      this.$toast(' hello world ', {
        closeButton: {
          text: '关闭',
          callBack(toast) {//可以调用toast组件实例
            console.log('关闭callBack')
          }
        },
        position: 'top',
        autoClose: 2,//默认为1.5s
        enableHtml: false
      })
    },
    }
  }
```

Options

| 参数           | 说明           | 类型  |可选值  |默认值
| ------------- |---------------|--------|------------|--------|
| text          |内容            | String |            |        |
| position      | 位置           | String |top/ bottom/ middle |middle  |
| autoClose     | 自动关闭       | Boolean/Number | true/false  |1.5    | 

Fucion

| 方法名         | 说明           | 类型        |
| ------------- |---------------|-------------|
| callBack      |Toast关闭的回调  | evevt(Event)|
