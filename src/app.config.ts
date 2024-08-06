export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/about/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#222222',
    selectedColor: '#222222',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [{
      text: '博客',
      pagePath: 'pages/index/index',
      iconPath: 'images/icon-home.png',
      selectedIconPath: 'images/icon-home-selected.png'
    }, {
      text: '关于我',
      pagePath: 'pages/about/index',
      iconPath: 'images/icon-me.png',
      selectedIconPath: 'images/icon-me-selected.png'
    }]
  },
  lazyCodeLoading: 'requiredComponents'
})
