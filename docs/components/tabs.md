---
sidebarDepth: 2
title: 'Tabs 标签页'
---

# 标签页

使用方法

<ClientOnly>
  <demo-tabs>默认按钮</demo-tabs>
</ClientOnly>



``` html 4}
<x-tabs :selected.sync="selected">
  <x-tabs-head>
    <template slot="actions">
      <x-button icon="settings">设置</x-button>
    </template>
    <x-tabs-item name="women" :disabled="true">
      美女
    </x-tabs-item>
    <x-tabs-item name="finance" :disabled="false">
      财经
    </x-tabs-item>
    <x-tabs-item name="sports">
      体育
    </x-tabs-item>
  </x-tabs-head>
  <x-tabs-body>
      <x-tabs-pane name="women">
        美女美女美女美女美女
      </x-tabs-pane>
      <x-tabs-pane name="finance">
        财经财经财经财经财经
      </x-tabs-pane>
      <x-tabs-pane name="sports">
        体育体育体育体育体育
      </x-tabs-pane>
  </x-tabs-body>
</x-tabs>
```
``` js }
export default {
  name: 'HelloWorld',
  data () {
    return {
      selected: 'sports',
    }
  },
}
```
X-tab Attributes

| 参数           | 说明           | 类型  |可选值  |默认值
| ------------- |---------------|--------|------------|--------|
| selected      | 当前选择项的name值  |String |         |        |


X-tabs-item / X-tabs-pane Attributes

| 参数           | 说明           | 类型  |可选值  |默认值
| ------------- |---------------|--------|------------|--------|
| name      | 当前项的name值  |String  |          |        |
| disabled  | 禁用           |Boolean |true/false|        |
