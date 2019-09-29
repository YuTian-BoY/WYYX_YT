<template>
  <div class="fotter">
    <div class="tabBar-wrap">
      <a class="m-tabBar" href="javascript:;" @click="goto('/home')">
        <i class="u-icon u-icon-tabBar-index" :class="{'on-index':$route.path==='/home'}"></i>
        <span class="text" :class="{'on-text':$route.path==='/home'}">首页</span>
      </a>
      <a class="m-tabBar on-cate" href="javascript:;" @click="goto('/classify')">
        <i class="u-icon u-icon-tabBar-cate" :class="{'on-cate':$route.path==='/classify'}"></i>
        <span class="text" :class="{'on-text':$route.path==='/classify'}">分类</span>
      </a>
      <a class="m-tabBar on-topic" href="javascript:;" @click="goto('/konw')">
        <i class="u-icon u-icon-tabBar-topic" :class="{'on-topic':$route.path==='/konw'}"></i>
        <span class="text" :class="{'on-text':$route.path==='/konw'}">识物</span>
      </a>
      <a class="m-tabBar on-cart" href="javascript:;" @click="goto('/shoppingCart')">
        <i class="u-icon u-icon-tabBar-cart" :class="{'on-cart':$route.path==='/shoppingCart'}"></i>
        <span class="text" :class="{'on-text':$route.path==='/shoppingCart'}">购物车</span>
      </a>
      <a class="m-tabBar on-ucenter" href="javascript:;" @click="goto('/login')">
        <i class="u-icon u-icon-tabBar-ucenter" :class="{'on-ucenter':$route.path==='/personsge'}"></i>
        <span class="text" :class="{'on-text':$route.path==='/personsge'}">个人</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  // 根据传入的地址，跳转到对应的路由界面
  methods: {
    goto(path) {
      // 不带记录
      this.$router.replace(path)
      this.$store.dispatch('getShops')
      // 带记录
      // this.$roter.push()
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.fotter
  position fixed
  z-index 11
  left 0
  bottom 0
  width 750px
  height 97px
  border-top 1px solid #d9d9d9
  background #ffffff
  .tabBar-wrap
    height 97px
    display flex
    align-items center
    justify-content space-around
    .m-tabBar
      display block
      position relative
      text-align center
      height 78px
    .u-icon
      width 40px
      height 40px
      display inline-block
      vertical-align middle
      background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png)
      background-repeat no-repeat
      transform translate3d(0, 0, 0)
    .u-icon-tabBar-index
      background-position 0 -3.33333rem
    .u-icon-tabBar-cate
      background-position 0 -2rem
    .u-icon-tabBar-topic
      background-position 0 -4.66667rem
    .u-icon-tabBar-cart
      background-position 0 -0.66667rem
    .u-icon-tabBar-ucenter
      background-position 0 -6rem
    .on-index
      background-position 0 -2.66667rem
    .on-cate
      background-position 0 -1.33333rem
    .on-topic
      background-position 0 -300px
    .on-cart
      background-position 0 0
    .on-ucenter
      background-position 0 -5.3333rem
    .text
      display block
      font-size 0.32rem
      margin-top 5px
      transform translate3d(0, 0, 0)
    .on-text
      color #b4282d
</style>
