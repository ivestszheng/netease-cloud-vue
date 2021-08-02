<template>
  <van-icon name="arrow-left" @click="gotoHome" />
</template>

<script lang='ts'>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    let gotoHome = () => {
      router.push({
        path: '/'
      })
    }
    return { gotoHome }
  }
}
</script>

<style scoped>
</style>
