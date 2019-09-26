<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShow" />
  </div>
</template>
<script>
// 引入底部导航组件FooterGuide.vue
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// 引入api接口
import { reqClassify } from './api'
export default {
  // 注册组件
  components: {
    FooterGuide
  },
  async mounted() {
    // 页面首次加载，直接发送请求，获取地址信息
    // this.$store.dispatch('getShops')
    // const result = await reqClassify()
    // console.log(result)
    // 测数据
    // this.$store.dispatch('getShops')
    // 两种拿数据的方法
    // this.$store.state.shops
    // ...mapState(['shops])
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'></style>
