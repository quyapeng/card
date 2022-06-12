import Taro from "@tarojs/taro";
import React from "react";
import { View, Text, Navigator, Image } from "@tarojs/components";
import api from "../../utils/api";

import "./me.css";

class Nodes extends React.Component<{}, {}> {
  config = {
    navigationBarTitleText: "我的",
  };

  render() {
    // const element = allNodes.map((item) => {
    //   const nodes = item.nodes.map((node) => {
    //     return (
    //       <Navigator
    //         className="tag"
    //         url={`/pages/node_detail/node_detail${api.queryString(node)}`}
    //         key={node.full_name}
    //       >
    //         <Text>{node.full_name}</Text>
    //       </Navigator>
    //     );
    //   });
    //   return (
    //     <View key={item.title} className="container">
    //       <View className="title">
    //         <Text style="margin-left: 5px">{item.title}</Text>
    //       </View>
    //       <View className="nodes">{nodes}</View>
    //     </View>
    //   );
    // });
    // return <View className="node-container">{element}</View>;
    return (
      <View className="me">
        <View className="user_info">
          <Image
            src={
              "https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg"
            }
          />
          <Text>王小米啊</Text>
        </View>
        <View className="flex-wrp" style="flex-direction:row;">
          <View className="flex-item">
            <Image src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg" />
            <Text>我的贺卡</Text>
          </View>
          <View className="flex-item">
            <Image src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg" />
            <Text>送出祝福</Text>
          </View>
          <View className="flex-item">
            <Image src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg" />
            <Text>我的收藏</Text>
          </View>
          <View className="flex-item">
            <Image src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg" />
            <Text>敬请期待</Text>
          </View>
        </View>
        <View className="list-babel border">
          <View className="item">
            <Text>list</Text>
            <i></i>
          </View>
          <View className="item">
            <Text>退出</Text>
            <i></i>
          </View>
        </View>
      </View>
    );
  }
}

export default Nodes;
