import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LocalStorageCache } from '@/utils/cache'
import type { ConfigProviderTheme } from "vant";

export const useThemeStore = defineStore('theme', () => {
  const cache = new LocalStorageCache()
  const sKey = 'theme'
  const theme = ref<ConfigProviderTheme>(cache.get(sKey) === 'dark' ? 'dark' : 'light')

  function setTheme(mode: string) {
    if (mode === 'dark') {
      theme.value = 'dark'
      cache.set(sKey, 'dark')
    } else {
      theme.value = 'light'
      cache.set(sKey, 'light')
    }
  }
  return {
    theme,
    setTheme
  }
})
