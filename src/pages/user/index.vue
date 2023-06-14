<template>
  <view class="user">
    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "user",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss">
.user {
  .title {
    color: #666;
  }
}
</style>
