<script setup lang="ts"></script>

<template>
  <div class="container">
    <van-cell-group title="应用列表">
      <van-cell title="知乎热榜" to="/apps/zhihu/hot" is-link />
      <van-cell title="聚合短视频下载" to="/apps/short-video/down" is-link />
      <van-cell title="更多（敬请期待）" />
    </van-cell-group>
    <MyTabbar :active="1" />
  </div>
</template>

<style lang="less" scoped>
.container {
  min-width: 320px;
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
  position: relative;
  background-color: var(--van-background);
}
</style>
