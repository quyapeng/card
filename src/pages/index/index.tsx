import Taro from "@tarojs/taro";
import React from "react";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { ThreadList } from "../../components/thread_list";
import { IThread } from "../../interfaces/thread";
import api from "../../utils/api";

import "./index.css";

interface IState {
  loading: boolean;
  threads: IThread[];
  userinfo: any;
}

class Index extends React.Component<{}, IState> {
  config = {
    navigationBarTitleText: "首页",
  };

  state = {
    loading: true,
    threads: [],
    userinfo: {
      openid: "",
    },
  };

  async componentDidMount() {
    try {
      Taro.request<IThread[]>({
        url: api.test(),
        method: "GET",
        complete: (res) => {
          console.log("res----", res);
        },
      });
    } catch (error) {
      Taro.showToast({
        title: "载入远程数据错误",
      });
    }

    // Taro.cloud.callFunction({
    //   name: "login",
    //   success: (res) => {
    //     console.log("success", res);
    //   },
    //   fail: (res) => {
    //     console.log("fail", res);
    //   },
    // });
  }
  getOpenId: any = (e) => {
    console.log("t", e);
    Taro.cloud.init({
      env: "test-2gufqy4ad894b9e7",
      traceUser: true,
    });
    let that = this;
    Taro.cloud
      .callFunction({
        name: "login",
      })
      .then((res) => {
        console.log(res);
        that.setState({
          userinfo: res.result,
          loading: false,
        });
      });
  };
  render() {
    // const { loading, threads } = this.state;
    return (
      <View className="index">
        <View onClick={this.getOpenId}>test</View>
        <View>{this.state.userinfo?.openid}</View>
        {/* <ThreadList threads={threads} loading={loading} /> */}
        <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <Image
              style="width: 300px;height: 100px;background: #fff;"
              src="../../resource/image1.jpeg"
            />
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-2">
              <Image
                style="width: 300px;height: 100px;background: #fff;"
                src="../../resource/image2.jpeg"
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-3">
              <Image
                style="width: 300px;height: 100px;background: #fff;"
                src="../../resource/image3.jpeg"
              />
            </View>
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}

export default Index;
