<template></template>

<script setup lang="ts">
// import { httpGetProvince } from '@/api/user'
// import PVantField from '../../components/PVant/PVantField/index.vue'
// import { useRoute, useRouter } from '../../plugins/uni-router'

// const curRouter = useRouter()

// const curRoute = useRoute()

// console.log(curRouter, 'curRouter 页面 index')
// console.log(curRoute.path, 'curRoute 页面 index')

// onMounted(async () => {
//   const resp = await httpGetProvince({})
//   console.log(resp, '省份信息')
// })

// setTimeout(() => {
//   console.log('即将跳转路由')
//   curRouter.push('/pages/test/test')
// }, 2000)

import { ref } from 'vue'
const username = ref('1234')

function handleButton() {
  console.log('按钮点击')
}
const active = ref(0)
function handleChange(event) {
  console.log(username.value, '当前的值')
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
}
.logo {
  margin-left: auto;
  margin-right: auto;
  margin-top: 200rpx;
  margin-bottom: 50rpx;
  width: 200rpx;
  height: 200rpx;
}
.text-area {
  display: flex;
  justify-content: center;
}
.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
