export default {
  pages: [
    "pages/index/index",
    "pages/me/me",
    "pages/list/index",
    "pages/list/detail",
    "pages/node_detail/node_detail",
    "pages/thread_detail/thread_detail",
  ],
  tabBar: {
    list: [
      {
        iconPath: "resource/latest.png",
        selectedIconPath: "resource/lastest_on.png",
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        iconPath: "resource/hotest.png",
        selectedIconPath: "resource/hotest_on.png",
        pagePath: "pages/list/index",
        text: "列表",
      },
      {
        iconPath: "resource/node.png",
        selectedIconPath: "resource/node_on.png",
        pagePath: "pages/me/me",
        text: "我的",
      },
    ],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white",
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "祝福",
    navigationBarTextStyle: "black",
  },
};
