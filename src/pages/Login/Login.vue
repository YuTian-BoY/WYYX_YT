<template>
  <!-- 登录头部 -->
  <div class="hasHd">
    <Header>
      <div class="logo" slot="logo-Img">
        <div class="logo-img"></div>
      </div>
    </Header>
    <div class="login-content">
      <div class="content">
        <div class="login-logoimg">
          <div class="logoing"></div>
        </div>
        <!-- 登录按钮 -->
        <div class="login-button">
          <span class="button-top" @click="goIphone('/iphone')">
            <i class="icon"></i>
            <span class="txt">手机号快捷登录</span>
          </span>
          <span class="button-bottom">
            <i class="icon"></i>
            <span class="txt">邮箱帐号登陆</span>
          </span>
        </div>
        <!-- 第三方登录方式 -->
        <div class="thirdWrap">
          <div class="third-content">
            <div class="itemWrap">
              <i class="watch w-img"></i>
              <span class="txt">微信</span>
            </div>
            <div class="itemWrap">
              <i class="QQ w-img"></i>
              <span class="txt">QQ</span>
            </div>
            <div class="itemWrap">
              <i class="weibo w-img"></i>
              <span class="txt">微博</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // vue实例中的方法
  methods: {
    goIphone(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
// login页面css
.hasHd
  width 750px
  height 1334px
  .login-content
    width 100%
    height 1246px
    background-color #F2F5F4
    .content
      width 750px
      height 700px
      .login-logoimg
        width 750px
        height 480px
        display flex
        justify-content center
        padding 160px 0 232px
        .logoing
          width 270px
          height 90px
          line-height 90px
          background-image url('https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png')
          background-repeat no-repeat
          background-size 100% 100%
    .login-button
      width 100%
      height 220px
      margin-bottom 203px
      padding 0 40px
      .button-top, .button-bottom
        display block
        width 670px
        height 94px
        margin-bottom 32px
      .button-top
        border 0 solid #DD1A21
        background-color #dd1a21
        width 670px
        height 94px
        line-height 94px
        text-align center
        .icon
          width 40px
          height 40px
          vertical-align middle
          display inline-block
          background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png')
          background-position 0 -50px
        .txt
          color #fff
          font-size 27px
          vertical-align middle
      .button-bottom
        background-color transparent
        border 1px solid #DD1A21
        width 670px
        height 94px
        line-height 94px
        text-align center
        .icon
          width 40px
          height 40px
          vertical-align middle
          display inline-block
          background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png')
          background-position 0 0
          background-repeat no-repeat
        .txt
          color #DD1A21
          font-size 27px
          vertical-align middle
    .thirdWrap
      width 100%
      height 40px
      position absolute
      left 0
      bottom 70px
      text-align center
      .third-content
        width 750px
        height 40px
        text-align center
        .itemWrap
          display inline-block
          width 183px
          height 40px
          padding 0 38px
          border-right 1px solid red
          .w-img
            display inline-block
            width 40px
            height 40px
            background-repeat no-repeat
          .watch
            background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png)
            background-position 0 -250px
            background-color #7F7F7F
          .txt
            display inline-block
            font-size 26px
            color #7F7F7F
            vertical-align middle
</style>
