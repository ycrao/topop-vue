<script setup lang="ts">
import { computed, ref, watch, provide } from 'vue'
import type { ConfigProviderTheme } from 'vant'
import { useThemeStore } from '@/stores/theme'
import { LocalStorageCache } from '@/utils/cache'

const cache = new LocalStorageCache()
const sKey = 'theme'
const store = useThemeStore()
const theme = ref<ConfigProviderTheme>('light')
const mode = computed(() => {
  return store.theme
})

watch(mode, (val) => {
  if (val === 'dark' || cache.get(sKey) === 'dark') {
    theme.value = 'dark'
    document.querySelector('html')
      ?.setAttribute('data-theme', 'dark')
  } else {
    theme.value = 'light'
    document.querySelector('html')
      ?.setAttribute('data-theme', 'light')
  }
}, { immediate: true })

provide('isRealDark', computed(() => theme.value === 'dark'))
</script>

<template>
  <van-config-provider :theme="theme">
    <router-view />
  </van-config-provider>
</template>
