<script setup lang="ts">
import { computed, ref, watch, provide } from 'vue'
import { useThemeStore } from '@/stores/theme'
import type { ConfigProviderTheme } from 'vant'

const store = useThemeStore()
const theme = ref<ConfigProviderTheme>(store.theme)
// const oTheme = ref<ConfigProviderTheme>('dark')
const mode = computed(() => store.theme)

watch(
  mode,
  (val) => {
    if (val === 'dark') {
      theme.value = 'dark'
      document.querySelector('html')?.setAttribute('data-theme', 'dark')
    } else {
      theme.value = 'light'
      document.querySelector('html')?.setAttribute('data-theme', 'light')
    }
  },
  { immediate: true }
)

provide(
  'isRealDark',
  computed(() => theme.value === 'dark')
)
</script>

<template>
  <van-config-provider :theme="theme">
    <router-view />
  </van-config-provider>
</template>
