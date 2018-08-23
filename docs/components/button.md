---
sidebarDepth: 2
title: 'Button 按钮'
---

# 按钮

使用方法

<ClientOnly>
  <demo-button>默认按钮</demo-button>
</ClientOnly>



``` html 4}
<x-button>默认按钮</x-button>
<x-button icon="settings">设置</x-button>
<x-button icon="settings" icon-position="right">设置</x-button>
<x-button :loading="true">默认按钮</x-button>
```

Button Attributes

| 参数           | 说明           | 类型  |可选值  |默认值
| ------------- |---------------|--------|------------|--------|
| icon          |               | String |            |        |
| loading       | 是否显示loading| Boolean| true/false |false   |
| icon-position | icon的位置     | String | left/right |left    | 
