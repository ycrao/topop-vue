<script setup lang="ts">
import { useRouter } from 'vue-router'
import MyTabbar from '@/components/MyTabbar.vue'
const router = useRouter()

const onClickLeft = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="container">
    <div class="header">
      <van-nav-bar title="我的" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="contentContainer">
      <van-empty description="建设中" />
    </div>
    <MyTabbar :active="2" />
  </div>
</template>

<style lang="less" scoped>
:deep(body) {
  background-color: var(--van-background) !important;
}
.container {
  margin: 0 auto;
  min-width: 320px;
  width: 100vw;
  height: 100vh;
  position: relative;
}
.contentContainer {
  margin: 20px auto;
  width: 100vw;
  text-align: center;
}
</style>
