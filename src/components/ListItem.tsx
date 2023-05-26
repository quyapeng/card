import Taro, { eventCenter } from "@tarojs/taro";
import React from "react";
import { View, Image } from "@tarojs/components";

import { Thread_DETAIL_NAVIGATE } from "../utils";

interface IProps {
  title: string;
  arrow: string;
  thumb: string;
  url: string;
}

class ListItem extends React.Component<IProps, {}> {
  handleNavigate = () => {
    const { url } = this.props;
    eventCenter.trigger(Thread_DETAIL_NAVIGATE, this.props);
    Taro.navigateTo({
      url: url,
    });
  };

  render() {
    const { title, arrow, thumb } = this.props;

    return (
      <View className="item" onClick={this.handleNavigate}>
        <text>{title}</text>
        <Image src={thumb} className="avatar" />
        {arrow && <i className={"icon" + arrow}></i>}
      </View>
    );
  }
}

export { ListItem };
