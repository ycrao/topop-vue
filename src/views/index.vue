<script setup lang="ts">
import { ref, watch } from 'vue'
import { useThemeStore } from '@/stores/theme'
import MyTabbar from '@/components/MyTabbar.vue'

const store = useThemeStore()
const checked = ref<boolean>(store.theme === 'dark')

watch(checked, (val) => {
  if (val) {
    store.setTheme('dark')
  } else {
    store.setTheme('light')
  }
})
</script>

<template>
  <div class="container">
    <van-cell-group title="应用列表">
      <van-cell center title="🌗 暗黑模式">
        <template #right-icon>
          <van-switch v-model="checked" size="18px" />
        </template>
      </van-cell>
      <van-cell title="源码" url="https://git.hayitech.com/infrastructure/mobile-scaffold/topop-vue" is-link />
      <van-cell title="应用" to="apps/index" is-link />
    </van-cell-group>
    <MyTabbar />
  </div>
</template>

<style lang="less" scoped>
.container {
  min-width: 320px;
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
  position: relative;
}
</style>
