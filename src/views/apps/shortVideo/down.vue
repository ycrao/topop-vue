<script setup lang="ts">
import { ref } from 'vue'
import { fetchShortVideo } from '@/api/shortVideo'
import { useRouter } from 'vue-router'
import { showDialog } from 'vant'
import { showFailToast } from 'vant'

const downVideo = (url: string) => {
  // 解决 带有 referrer 403 问题
  document.querySelector('meta[name="referrer"]')?.setAttribute('content', 'never')
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', 'video' + Date.now())
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const plainText = ref<string>(
  '5.87 KJI:/ 复制打开抖音，看看【Ai会画画的作品】嫌前面的作品太闪眼睛了，弄个温和点的给大家润润眼😅... https://v.douyin.com/S9dwrHH/'
)

const router = useRouter()
const onSubmit = () => {
  const re = /(http|https):\/\/([a-zA-Z0-9.:?=&-/%#]+)/g
  const result = plainText.value.match(re)
  const url = result ? result[0] : null
  if (url != null) {
    return fetchShortVideo(url).then((resp) => {
      if (resp.code == 200) {
        let videoUrl = resp.url
        if (videoUrl.startsWith('//')) {
          videoUrl = 'https:' + videoUrl
        }
        return downVideo(videoUrl)
        /*
        showDialog({
          title: '提示',
          message: '由于浏览器限制，请右键复制<a href="' + videoUrl + '">视频地址</a>在浏览器新窗口打开播放或下载',
          allowHtml: true
        }).then(() => {
          // on close
        });
         */
        // window.open(videoUrl, '_blank')
      } else {
        console.log(resp)
        return showFailToast('解析失败')
      }
    })
  }
  return showFailToast('无效链接')
}
const onClickLeft = () => {
  router.push({ path: '/apps/index' })
}
</script>

<template>
  <div class="container">
    <div class="header">
      <van-nav-bar title="聚合短视频下载" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="contentContainer">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="plainText"
            type="textarea"
            autosize
            label="分享文案"
            placeholder="复制抖音、快手等短视频平台带有短链接的分享文案"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit"> 提交 </van-button>
        </div>
      </van-form>
    </div>

    <MyTabbar :active="1" />
  </div>
</template>

<style lang="less" scoped>
:deep(body) {
  background-color: var(--van-background) !important;
}
:deep(.contentContainer) {
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
  padding-top: 30px;
  height: 100vh;
}
</style>
