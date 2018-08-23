---
sidebarDepth: 2
title: 'Layout 布局'
---

# Layout

使用方法

<ClientOnly>
  <demo-layout></demo-layout>
</ClientOnly>



``` html 4}
<x-layout>
  <x-header class="demo"></x-header>
  <x-layout class="demo">
    <x-sider class="demo"></x-sider>
    <x-content class="demo"></x-content>
  </x-layout>
  <x-content class="demo"></x-content>
  <x-footer class="demo"></x-footer>
</x-layout>
```
