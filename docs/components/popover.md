---
sidebarDepth: 2
title: 'Popover 弹出框'
---

# 弹出框

使用方法

<ClientOnly>
  <demo-popover>默认按钮</demo-popover>
</ClientOnly>


``` html 4}
<x-popover style="margin: 30px 10px;" position="top" trigger="hover">
    <div slot="content">
        content
    </div>
    <x-button>open top</x-button>
</x-popover>
<x-popover style="margin: 30px 10px;" position="bottom">
    <div slot="content" slot-scope="slotProps">
    <x-button @click="slotProps.close">close</x-button>
        content
    </div>
    <x-button>open bottom</x-button>
</x-popover>
<x-popover style="margin: 30px 10px;" position="left">
    <div slot="content">
        content
    </div>
    <x-button>open</x-button>
</x-popover>
<x-popover style="margin: 30px 10px;" position="right">
    <div slot="content">
    <a href="#">313aaaaaaa</a>
        content
    </div>
    <x-button>open right</x-button>
</x-popover>
```

Button Attributes

| 参数           | 说明           | 类型  |可选值  |默认值
| ------------- |---------------|--------|------------|--------|
| position      | 弹层出现位置    | String | top/right/bottom/left | top  |
| trigger       | 触发条件       | String| click/hover  |click   |
