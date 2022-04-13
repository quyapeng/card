import Taro, { getCurrentInstance } from "@tarojs/taro";
import React from "react";
import { View, CoverImage, Text } from "@tarojs/components";
import { ThreadList } from "../../components/thread_list";
import { DetailCard } from "../../interfaces/detail";

import "./index.css";

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
          <CoverImage
            className="img"
            src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg"
          />
          <Text>卡片内容</Text>
        </View>
      </View>
    );
  }
}

export default Detail;
