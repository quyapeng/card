<template>
  <view>
    <custom-nav-bar title="发现" background="#fff" back="{{true}}" home="{{true}}"></custom-nav-bar>
    <view class="page-container">
      <van-search value="" shape="round" placeholder="请输入搜索关键词" />
      <van-tabs
        :active="activeTab"
        color="#1989fa"
        title-active-color="#1989fa"
        title-inactive-color="#999"
        @change="handleTabChange"
      >
        <van-tab title="全部" />
        <van-tab title="节日" />
        <van-tab title="生日" />
        <van-tab title="婚礼" />
      </van-tabs>
      <custom-pull-down class="custom-pull-down">
        <view name="refresh-animation"></view>
        <view slot="refresh-before-trigger" class="custom-refresh-zone-tips-loading">
          继续下拉刷新
        </view>
        <view slot="refresh-after-trigger" class="custom-refresh-zone-tips-loading">释放刷新</view>
        <view slot="refresh-loading" class="custom-refresh-zone-tips-loading">加载中</view>
        <template #content>
          <view class="card-container">
            <view v-for="(item, index) in 10" :key="index" class="single-card-container">
              <image src="" class="card__image" />

              <!-- <van-divider class="van-divider--nomargin" /> -->
              <!-- <text class="card__status">状态</text> -->
              <view class="card__main">
                <view class="card__content">
                  <view class="card__title">这是一个生日贺卡</view>
                  <view class="main__col">
                    <text class="col__value">生日快乐</text>
                  </view>
                </view>
                <!-- <van-divider hairline /> -->
                <!-- <view class="card__footer">
                  <view class="footer__item">
                    <van-icon name="manager" class="item__icon" />
                    <span class="item__value">张山峰</span>
                  </view>
                  <view class="footer__item">
                    <van-icon name="underway" class="item__icon" />
                    <span class="item__value">2022-11-03 12:30:00</span>
                  </view>
                </view> -->
              </view>
            </view>
          </view>
        </template>
      </custom-pull-down>
    </view>
  </view>
  <!-- <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow /> -->
</template>

<script setup lang="ts">
// uniapp bug
// import Variable from '@/styles/index.module.css?inline'
import { ref, onMounted, useCssModule } from 'vue'
const activeTab = ref(0)
onMounted(() => {
  console.log(useCssModule())
  // console.log(Variable, '变量')
})
function handleTabChange(e) {}
</script>

<style scoped lang="scss">
.custom-refresh-zone-tips-loading {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10rpx;
  width: 100%;
  font-size: 26rpx;
  color: #1989fa;
}
.page-container {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
}
.card-container {
  padding: 4rpx 30rpx;
}
.single-card-container {
  position: relative;
  margin-top: 24rpx;
  border: 2rpx solid #fff;
  border-radius: 16rpx;
  background-color: #fff;
  box-shadow: 0 0 8rpx 1rpx rgba(165, 165, 165, 0.1);
  display: flex;
  flex-direction: row;
  &:nth-child(1) {
    margin-top: 0;
  }
  .card__title {
    padding: 44rpx 0 0;
    border-radius: 16rpx 16rpx 0 0;
    /* background: linear-gradient(180deg, #abdcff 0%, rgba(255, 255, 255, 1) 100%); */
    font-weight: bold;
    font-size: 32rpx;
  }
  .col__value {
    color: #222;
  }
  .card__status {
    position: absolute;
    right: 0;
    top: 0;
    padding: 4rpx 10rpx;
    border-radius: 0 12rpx;
    background-color: #ffaa16;
    font-size: 24rpx;
    color: #fff;
  }
  .card__main {
    padding: 20rpx 32rpx;
    .main__col {
      display: flex;
      margin: 12rpx 0;
      &:nth-child(1) {
        margin-top: 0;
      }
      .col__title {
        flex: 0 0 172rpx;
        color: #999;
      }
      .col__value {
        flex: 1 1 auto;
      }
    }
  }
  .card__image {
    width: 200rpx;
  }
  .card__footer {
    display: flex;
    justify-content: space-between;
    .footer__item {
      color: #b7b7b7;
      .item__icon {
        margin-right: 12rpx;
      }
      .item__value {
      }
    }
  }
}
:deep(.van-divider) {
  margin: 18rpx 0 !important;
}
:deep(.van-tabs) {
  margin-bottom: 20rpx;
}
/* :deep(.van-tabs__scroll) {
  background-color: transparent;
} */
</style>
<!-- 共享的css变量 useCssModule -->
<style module lang="scss">
.a {
  color: red;
}
</style>
