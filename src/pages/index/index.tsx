import Taro from "@tarojs/taro";
import React from "react";
import { View } from "@tarojs/components";
import { ThreadList } from "../../components/thread_list";
import { IThread } from "../../interfaces/thread";
import api from "../../utils/api";

import "./index.css";

interface IState {
  loading: boolean;
  threads: IThread[];
}

class Index extends React.Component<{}, IState> {
  config = {
    navigationBarTitleText: "首页",
  };

  state = {
    loading: true,
    threads: [],
  };

  async componentDidMount() {
    // try {
    //   const res = await Taro.request<IThread[]>({
    //     url: api.getLatestTopic()
    //   })
    //   this.setState({
    //     threads: res.data,
    //     loading: false
    //   })
    // } catch (error) {
    //   Taro.showToast({
    //     title: '载入远程数据错误'
    //   })
    // }
    console.log(Taro);
    // Taro.cloud.init({
    //   env: "test-2gufqy4ad894b9e7",
    //   traceUser: true,
    // });

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
  getOpenid: any = (e) => {
    console.log("t", Taro);
    Taro.cloud
      .callFunction({
        name: "login",
      })
      .then((res) => {
        console.log("res", res);
      });
  };
  render() {
    // const { loading, threads } = this.state;
    return (
      <View className="index">
        <View onClick={this.getOpenid}>test</View>
        {/* <ThreadList threads={threads} loading={loading} /> */}
      </View>
    );
  }
}

export default Index;
