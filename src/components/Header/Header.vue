<template>
  <div class="login-header">
    <div class="header-content">
      <div class="row" @click="goto('/home')"></div>
      <slot name="logo-Img"></slot>
      <div class="search-shopping">
        <span class="search"></span>
        <span class="shopping"></span>
      </div>
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
      // 带记录
      // this.$roter.push()
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.login-header
  width 100%
  height 88px
  background-color #fafafa
  position relative
  z-index 10
  .header-content
    width 750px
    height 88px
    padding 0 16px 0 24px
    display flex
    position relative
    justify-content space-between
    align-items center
    .row
      width 48px
      height 48px
      background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png')
      background-position 0 -70px
      background-repeat no-repeat
      background-size 2.29333rem 5.6rem
    .logo
      width 172px
      height 54px
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      margin auto
      .logo-img
        display inline-block
        vertical-align middle
        width 172px
        height 54px
        background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png')
        background-position 0 -1.70667rem
        background-repeat no-repeat
    .search-shopping
      width 144px
      height 64px
      display flex
      justify-content space-between
      .search
        width 64px
        height 64px
        background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png')
        background-position 0 -4.74667rem
        background-repeat no-repeat
      .shopping
        width 64px
        height 64px
        background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png')
        background-position 0 0
        background-repeat no-repeat
</style>
