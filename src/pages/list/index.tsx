import Taro from "@tarojs/taro";
import React from "react";
import { View, CoverImage, Text, Swiper, SwiperItem } from "@tarojs/components";
// import { ThreadList } from "../../components/thread_list";
import { IThread } from "../../interfaces/thread";

import "./index.scss";

interface IState {
  loading: boolean;
  threads: IThread[];
}

class List extends React.Component<{}, IState> {
  state = {
    loading: true,
    threads: [],
  };

  async componentDidMount() {
    try {
      // const res = await Taro.request<IThread[]>({
      //   url: api.getHotNodes(),
      // });
      // this.setState({
      //   threads: res.data,
      //   loading: false,
      // });
    } catch (error) {
      Taro.showToast({
        title: "载入远程数据错误",
      });
    }
  }

  render() {
    const { loading, threads } = this.state;
    return (
      <View className="index">
        <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          vertical
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className="demo-text-1">1</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-2">2</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-3">3</View>
          </SwiperItem>
        </Swiper>
        <View className="content">
          <View className="title">
            <Text>婚礼祝福</Text>
            <Text>更多</Text>
          </View>
          <View
            className="card"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/list/detail?id=1",
              });
            }}
          >
            <CoverImage
              className="img"
              src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg"
            />
          </View>
          <View className="card">
            <CoverImage
              className="img"
              src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default List;
