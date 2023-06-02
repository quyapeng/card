import Taro from "@tarojs/taro";
import React from "react";
import { View, Text, Navigator, Image } from "@tarojs/components";
import { Item } from "src/components/item";

class Nodes extends React.Component<{}, {}> {
  config = {
    navigationBarTitleText: "我的贺卡",
  };

  render() {
    return (
      <View className="list">
        <View className="flex-wrp" style="flex-direction:row;">
          <Item
            src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg"
            id={1}
          />
          <Item
            src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg"
            id={1}
          />
          <Item
            src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg"
            id={1}
          />
        </View>
      </View>
    );
  }
}

export default Nodes;
