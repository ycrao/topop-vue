import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useThemeStore = defineStore('theme', () => {
  const theme = ref<string>('light')
  function setTheme(mode: string) {
    if (mode === 'dark') {
      theme.value = 'dark'
    } else {
      theme.value = 'light'
    }
  }
  return {
    theme,
    setTheme
  }
})
