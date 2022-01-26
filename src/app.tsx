import React from "react";
import "./app.css";
// import wx from "wx-server-sdk";
// const wx = require("wx-server-sdk");
class App extends React.Component {
  onLaunch() {
    // wx.cloud.init({
    //   env: "test-2gufqy4ad894b9e7",
    //   traceUser: true,
    // });
  }
  componentDidMount() {
    console.log("componentDidMount");
    // wx.cloud.init({
    //   env: "test-2gufqy4ad894b9e7",
    //   traceUser: true,
    // });
  }
  render() {
    return this.props.children;
  }
}

export default App;
