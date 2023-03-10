<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import type { ITabbarItem } from '../../types/app'

// 由于引入 `van` 相关 `ui` 组件，`MyTabbar` 无法被常规测试（类似于 `HelloWorld` 组件一样）
interface IState {
  tabList: ITabbarItem[]
  active: number
}
const emit = defineEmits(['handleClickTabbar'])

const props = defineProps({
  active: {
    type: Number,
    default: 0,
    required: false
  }
})

const state = reactive<IState>({
  tabList: [
    {
      name: '首页',
      to: '/',
      icon: 'home-o'
    },
    {
      name: '应用',
      to: '/apps/index',
      icon: 'fire-o'
    },
    {
      name: '我',
      to: '/me',
      icon: 'user-o'
    }
  ],
  active: -1
})

const handleClickTabbar = (data: ITabbarItem) => {
  emit('handleClickTabbar', data)
}
onMounted(() => {
  state.active = props.active
})
</script>
<template>
  <van-tabbar v-model="state.active" fixed :route="false" safe-area-inset-bottom :z-index="99">
    <van-tabbar-item
      v-for="(item, index) in state.tabList"
      :key="index"
      replace
      :to="item.to"
      :icon="item.icon"
      @click="handleClickTabbar({ ...item, index })"
    >
      {{ item.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>
<style lang="less" scoped>
#tab-bar {
  padding-bottom: 50px;
  .van-tabbar {
    height: 50px;
    background: #feffff;
    box-shadow: 0 0 4px 0 rgba(173, 173, 173, 0.5);
  }
  .van-tabbar-item__icon {
    margin-bottom: 4px;
  }
  .van-tabbar-item__text {
    font-size: 10px;
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
}
</style>
