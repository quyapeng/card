export default {
  pages: [
    "pages/index/index",
    "pages/list/index",
    "pages/list/detail",
    "pages/me/me",
    "pages/node_detail/node_detail",
    "pages/thread_detail/thread_detail",
  ],
  tabBar: {
    color: "#34332e",
    selectedColor: "#ffba00",
    backgroundColor: "#ffffff",
    borderStyle: "white",
    list: [
      {
        iconPath: "resource/index.png",
        selectedIconPath: "resource/index_s.png",
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        iconPath: "resource/find.png",
        selectedIconPath: "resource/find_s.png",
        pagePath: "pages/list/index",
        text: "发现",
      },
      {
        iconPath: "resource/me.png",
        selectedIconPath: "resource/me_s.png",
        pagePath: "pages/me/me",
        text: "我的",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTitleText: "祝福",
    navigationBarTextStyle: "black",
    backgroundColor: "#dddddd",
  },
};
