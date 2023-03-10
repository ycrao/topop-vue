import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/index.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('@/views/me/index.vue')
    },
    {
      path: '/apps/index',
      name: 'apps',
      component: () => import('@/views/apps/index.vue')
    },
    {
      path: '/apps/zhihu/hot',
      name: 'zhihuHot',
      component: () => import('@/views/apps/zhihu/hot.vue')
    },
    {
      path: '/apps/short-video/down',
      name: 'shortVideoDown',
      component: () => import('@/views/apps/shortVideo/down.vue')
    },
  ]
})

export default router
