module.exports = {
  base: '/wheel/',
  title: 'X - UI',
  description: '一个超赞的 UI 框架',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      {
        title: '入门',
        children: [
          '/install/',
          '/guide/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/icon',
          '/components/button',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
          '/components/collapse',
        ]
      }
     ]
  }
}
