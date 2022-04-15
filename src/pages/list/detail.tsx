import Taro, { getCurrentInstance } from "@tarojs/taro";
import React from "react";
import { View, CoverImage, Text } from "@tarojs/components";
import { DetailCard } from "../../interfaces/detail";
const bgm = require("../../resource/true.jpeg");

import "./index.scss";

interface IState {
  loading: boolean;
  detail: DetailCard;
}

class Detail extends React.Component<{}, IState> {
  state = {
    loading: true,
    detail: {},
  };
  $instance = getCurrentInstance();
  async componentDidMount() {
    try {
      let {
        params: { id },
      }: any = this.$instance.router;
      console.log("id :", id);
      // that.setState({
      //   userinfo: res.result,
      //   loading: false,
      // });
      // const res = await Taro.request<>({
      //   url: api.getHotNodes(id),
      // });
      // this.setState({
      //   detail: res.data,
      //   loading: false,
      // });
    } catch (error) {
      Taro.showToast({
        title: "载入远程数据错误",
      });
    }
  }

  render() {
    const { loading, detail } = this.state;
    return (
      <View className="detail">
        <View className="card">
          <CoverImage className="bgm" src={bgm}>
            <Text>卡片内容</Text>
          </CoverImage>
        </View>
      </View>
    );
  }
}

export default Detail;
