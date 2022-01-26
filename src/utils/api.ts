const HOST_URI =
  "https://koa-r2t5-1585115-1309416621.ap-shanghai.run.tcloudbase.com/";

// 获取节点
// 所有的节点
const ALL_NODE = "nodes/all.json";
// 获取节点信息
// 节点id :id 节点名 :name
const NODE_INFO = "nodes/show.json";

// 获取主题
// 取最新的主题
const LATEST_TOPIC = "topics/latest.json";
// 获取热议主题
const HOT_TOPIC = "topics/hot.json";
// 获取主题信息  :id | (:username | :node_id | :node_name)
const GET_TOPICS = "topics/show.json";

// 获取回复 :topic_id (:page , :page_size)?
const GET_REPLIES = "replies/show.json";

// 获取用户信息
const GET_USERINFO = "members/show.json";

// test
const GET_count = "api/count";
//

function queryString(obj?: Object) {
  if (!obj) {
    return "";
  }
  return (
    "?" +
    Object.keys(obj)
      .map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
      })
      .join("&")
  );
}

function getAllNode() {
  return HOST_URI + ALL_NODE;
}

function getNodeInfo(o?) {
  return HOST_URI + NODE_INFO + queryString(o);
}

function getHotNodes() {
  return HOST_URI + HOT_TOPIC;
}

function getLatestTopic(o?) {
  return HOST_URI + LATEST_TOPIC + queryString(o);
}

function getReplies(o?) {
  return HOST_URI + GET_REPLIES + queryString(o);
}

function getTopics(o?) {
  return HOST_URI + GET_TOPICS + queryString(o);
}

function getIndex(o) {
  return HOST_URI + GET_TOPICS + queryString(o);
}

function test() {
  return HOST_URI + GET_count;
}
export default {
  getAllNode,
  getNodeInfo,
  getLatestTopic,
  getReplies,
  getHotNodes,
  queryString,
  getTopics,
  test,
};
