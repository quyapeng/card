import Taro from "@tarojs/taro";
import React from "react";
import { View, CoverImage, Text } from "@tarojs/components";
// import { ThreadList } from "../../components/thread_list";
import { IThread } from "../../interfaces/thread";
// import api from "../../utils/api";

import "./index.css";

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
          <Text>123</Text>
        </View>
        <View className="card">
          <CoverImage
            className="img"
            src="https://alifei04.cfp.cn/creative/vcg/800/new/VCG41N1210205351.jpg"
          />
        </View>
      </View>
    );
  }
}

export default List;
