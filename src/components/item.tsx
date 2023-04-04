import Taro, { eventCenter } from "@tarojs/taro";
import React from "react";
import { View, Text, Navigator, Image } from "@tarojs/components";

import api from "../utils/api";
import { timeagoInst, Thread_DETAIL_NAVIGATE } from "../utils";
import { IMember } from "../interfaces/member";
import { INode } from "../interfaces/node";

import "./thread.css";

interface IProps {
  url: string;
}

class Item extends React.Component<IProps, {}> {
  handleNavigate = () => {
    // 这里必须显式指名 this.props 包含 tid
    // 或设置 defaultProps
    // const { tid, not_navi } = this.props;
    // if (not_navi) {
    //   return;
    // }
    // 懒得用 redux 了
    eventCenter.trigger(Thread_DETAIL_NAVIGATE, this.props);
    Taro.navigateTo({
      url: "/pages/thread_detail/thread_detail",
    });
  };

  render() {
    const { url } = this.props;

    return (
      <View className="item" onClick={this.handleNavigate}>
        <Image src={url} className="avatar" />
      </View>
    );
  }
}

export { Item };
