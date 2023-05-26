import Taro from "@tarojs/taro";
import React from "react";
import { View, Text, Navigator, Image, Button } from "@tarojs/components";
import { ListItem } from "../../components/ListItem";

class Details extends React.Component<{}, {}> {
  config = {
    navigationBarTitleText: "修改资料",
  };

  render() {
    return (
      <View className="detail">
        <ListItem
          url=""
          title="头像"
          arrow="right"
          thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
        />
        <ListItem
          url=""
          title="昵称"
          arrow="right"
          thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
        />
        <ListItem
          url=""
          title="性别"
          arrow="right"
          thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
        />
        <ListItem
          url=""
          title="城市"
          arrow="right"
          thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
        />
        <ListItem
          url=""
          title="生日"
          arrow="right"
          thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
        />
        <Button>保存</Button>
      </View>
    );
  }
}

export default Details;
