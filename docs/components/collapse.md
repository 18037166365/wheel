---
sidebarDepth: 2
title: 'Collapse 手风琴'
---

# 手风琴

使用方法

<ClientOnly>
  <demo-collapse></demo-collapse>
</ClientOnly>



``` html }
<x-collapse :selected.sync="collapseSelected" :single="true">
  <x-collapse-item title="标题1" name="1">内容1</x-collapse-item>
  <x-collapse-item title="标题2" name="2">内容2</x-collapse-item>    <x-collapse-item title="标题3" name="3">内容3</x-collapse-item>
</x-collapse>
```

``` js }
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
```

Input Attributes

| 参数           | 说明           | 类型  |可选值  |默认值
| ------------- |---------------|--------|------------|--------|
| disabled      | 禁用           | Boolean |true/false |false   |
| readonly      | 只读           | Boolean| true/false |false   |
| error         | 报错信息        | String |            |        | 


Input Events

| 参数           | 说明                 | 回调参数   |
| ------------- |----------------------|--------------|
| blur          |在 Input 失去焦点时触发  |(event:Event) |
| focus         |在 Input 获取焦点时触发  |(event:Event) |
| change        |在 Input 值改变时触发   |(event:Event) |
