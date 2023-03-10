<script setup lang="ts">
import { ref } from 'vue'
import { fetchZhihuHot } from '@/api/zhihu'
import { useRouter } from 'vue-router'
const items = ref<object[]>([])
const loading = ref(false)
const finished = ref(false)

const router = useRouter()
const onLoad = () => {
  loading.value = true
  fetchZhihuHot().then((resp) => {
    items.value = resp.data
    loading.value = false
    finished.value = true
  })
}
const onClickLeft = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="container">
    <div class="header">
      <van-nav-bar title="知乎热榜" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="itemContainer">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          :url="item.url"
          is-link
        />
      </van-list>
    </div>
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
</style>
