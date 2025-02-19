export default defineAppConfig({
  pages: ["pages/index/index", "pages/create/index", "pages/mine/index", "pages/lazylist/index", "pages/detail/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#000",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    color: "#666666",
    selectedColor: "#1989fa",
    backgroundColor: "#000000",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "assets/images/tabbar/tab-home.png",
        selectedIconPath: "assets/images/tabbar/tab-home-active.png"
      },
      {
        pagePath: "pages/create/index",
        text: "制作",
        iconPath: "assets/images/tabbar/tab-plus.png",
        selectedIconPath: "assets/images/tabbar/tab-plus-active.png"
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "assets/images/tabbar/tab-user.png",
        selectedIconPath: "assets/images/tabbar/tab-user-active.png"
      }
    ]
  },
  usingComponents: {
    "van-search": "./miniprogram_npm/@vant/weapp/search/index",
    "van-image": "./miniprogram_npm/@vant/weapp/image/index",
    "van-button": "./miniprogram_npm/@vant/weapp/button/index",
    "van-icon": "./miniprogram_npm/@vant/weapp/icon/index",
    "van-tabbar": "./miniprogram_npm/@vant/weapp/tabbar/index",
    "van-tabbar-item": "./miniprogram_npm/@vant/weapp/tabbar-item/index",
  },
});
