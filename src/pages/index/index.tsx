import Taro from "@tarojs/taro";
import React from "react";
import {
  View,
  Swiper,
  SwiperItem,
  Image,
  Text,
  ScrollView,
} from "@tarojs/components";
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
  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e) {
    console.log(e.detail);
  }

  render() {
    const scrollStyle = {
      height: "400px",
    };
    const scrollTop = 0;
    const Threshold = 20;
    const vStyleA = {
      height: "150px",
      "background-color": "rgb(26, 173, 25)",
    };
    const vStyleB = {
      height: "150px",
      "background-color": "rgb(39,130,215)",
    };
    const vStyleC = {
      height: "150px",
      "background-color": "rgb(241,241,241)",
      color: "#333",
    };
    // const { loading, threads } = this.state;
    return (
      <View className="index">
        {/* <View onClick={this.getOpenId}>test</View>
        <View>{this.state.userinfo?.openid}</View> */}
        {/* <ThreadList threads={threads} loading={loading} /> */}
        <Swiper
          className="index-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <Image
              style="width:100%;height: 200px;background: #fff;"
              src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg"
            />
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-2">
              <Image
                style="width:100%;height: 200px;background: #fff;"
                src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg"
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-3">
              <Image
                style="width:100%;height: 200px;background: #fff;"
                src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg"
              />
            </View>
          </SwiperItem>
        </Swiper>
        <View className="flex-wrp" style="flex-direction:row;">
          <View className="flex-item">
            <Image src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg" />
            <Text>123</Text>
          </View>
          <View className="flex-item">
            <Image src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg" />
            <Text>123</Text>
          </View>
          <View className="flex-item">
            <Image src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg" />
            <Text>123</Text>
          </View>
        </View>
        <ScrollView
          className="scrollview"
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScroll={this.onScroll}
        >
          <View style={vStyleA}>A</View>
          <View style={vStyleB}>B</View>
          <View style={vStyleC}>C</View>
        </ScrollView>
      </View>
    );
  }
}

export default Index;
