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
          <Image src={""} />
          <Text>王小米啊</Text>
        </View>
      </View>
    );
  }
}

export default Nodes;
