<template>
  <div class="hdWraper">
    <div class="m-indexHd">
      <div class="line">
        <a class="logo" href="javascript:;"></a>
        <div class="earch">
          <i class="icon">
            <img src="../../../static/imags/earch.png" alt />
          </i>
          <span class="placeholder">搜索商品, 共22643款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
    </div>
    <div class="tabWrap">
      <div class="m-tabs">
        <div class="inner">
          <div class="list">
            <div class="tab active">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">居家生活</span>
            </div>
            <div class="tab">
              <span class="txt">服饰鞋包</span>
            </div>
            <div class="tab">
              <span class="txt">美食酒水</span>
            </div>
          </div>
        </div>
      </div>
      <div class="toggleWrap" @click="isOk=!isOk">
        <div class="icon" v-show="isOk"></div>
        <div class="icon" v-show="!isOk"></div>
      </div>
      <div class="tabbottom">
        <div class="tabAlter" v-show="!isOk">全部频道</div>
        <div class="tabList" v-show="!isOk">
          <div class="tab active">推荐</div>
          <div class="tab">居家生活</div>
          <div class="tab">服饰鞋包</div>
          <div class="tab">美食酒水</div>
          <div class="tab">居家生活</div>
          <div class="tab">服饰鞋包</div>
          <div class="tab">美食酒水</div>
          <div class="tab">美食酒水</div>
          <div class="tab">美食酒水</div>
        </div>
        <div class="mask" @click="isOk=!isOk" v-show="!isOk"></div>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            class="imgs"
            src="https://yanxuan.nosdn.127.net/8d2af3ab55bf51d5ac03e5d9c6fa1fc4.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            class="imgs"
            src="https://yanxuan.nosdn.127.net/d0ed5c1095da85ec80a776a23b2023f3.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            class="imgs"
            src="https://yanxuan.nosdn.127.net/ccfde8af22184921682d049b00b34be2.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            class="imgs"
            src="https://yanxuan.nosdn.127.net/9c75dabb86e08cffcd0b4c95b4035b57.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            class="imgs"
            src="https://yanxuan.nosdn.127.net/e47220bbd8030b9c26f574eeb769dfde.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            class="imgs"
            src="https://yanxuan.nosdn.127.net/c74f5ba03c908826f32985c392f19199.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            class="imgs"
            src="https://yanxuan.nosdn.127.net/2565b1fa18e4b8b64aad0710c9725aa1.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="m-indexServicePolicy">
      <div class="g-grow">
        <div class="grow-box">
          <img
            class="imgs"
            src="http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"
            alt
          />
          <span class="txt">网易自营品牌</span>
        </div>
        <div class="grow-box">
          <img
            class="imgs"
            src="http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png"
            alt
          />
          <span class="txt">30天无忧退货</span>
        </div>
        <div class="grow-box">
          <img
            class="imgs"
            src="http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png"
            alt
          />
          <span class="txt">48小时快速退款</span>
        </div>
      </div>
    </div>
    <div>
      <div class="m-kingKongModule">
        <div class="m-carousel">
          <div class="s-container">
            <div class="s-wrapper">
              <div class="s-slide">
                <a href="https://m.you.163.com/item/newItem" class="kingkong-item mb-9">
                  <div class="icon">
                    <img
                      class="icon"
                      src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                      alt
                    />
                  </div>
                  <div class="txt">新品首发</div>
                </a>
                <a href="https://m.you.163.com/item/newItem" class="kingkong-item mb-9">
                  <div class="icon">
                    <img
                      class="icon"
                      src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                      alt
                    />
                  </div>
                  <div class="txt">新品首发</div>
                </a>
                <a href="https://m.you.163.com/item/newItem" class="kingkong-item mb-9">
                  <div class="icon">
                    <img
                      class="icon"
                      src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                      alt
                    />
                  </div>
                  <div class="txt">新品首发</div>
                </a>
                <a href="https://m.you.163.com/item/newItem" class="kingkong-item mb-9">
                  <div class="icon">
                    <img
                      class="icon"
                      src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                      alt
                    />
                  </div>
                  <div class="txt">新品首发</div>
                </a>
                <a href="https://m.you.163.com/item/newItem" class="kingkong-item mb-9">
                  <div class="icon">
                    <img
                      class="icon"
                      src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                      alt
                    />
                  </div>
                  <div class="txt">新品首发</div>
                </a>
                <a href="https://m.you.163.com/item/newItem" class="kingkong-item mb-9">
                  <div class="icon">
                    <img
                      class="icon"
                      src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                      alt
                    />
                  </div>
                  <div class="txt">新品首发</div>
                </a>
                <a href="https://m.you.163.com/item/newItem" class="kingkong-item mb-9">
                  <div class="icon">
                    <img
                      class="icon"
                      src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                      alt
                    />
                  </div>
                  <div class="txt">新品首发</div>
                </a>
                <a href="https://m.you.163.com/item/newItem" class="kingkong-item mb-9">
                  <div class="icon">
                    <img
                      class="icon"
                      src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                      alt
                    />
                  </div>
                  <div class="txt">新品首发</div>
                </a>
                <a href="https://m.you.163.com/item/newItem" class="kingkong-item mb-9">
                  <div class="icon">
                    <img
                      class="icon"
                      src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                      alt
                    />
                  </div>
                  <div class="txt">新品首发</div>
                </a>
                <a href="https://m.you.163.com/item/newItem" class="kingkong-item mb-9">
                  <div class="icon">
                    <img
                      class="icon"
                      src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                      alt
                    />
                  </div>
                  <div class="txt">新品首发</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data() {
    return {
      isOk: 'false'
    }
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // autoplay: {
      //   // 自动轮播
      //   delay: 3000,
      //   stopOnLastSlide: false
      // },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.hdWraper
  z-index 100
  position fixed
  width 100%
  height 148px
  .m-indexHd
    z-index 10
    position fixed
    width 100%
    display flex
    background #fff
    .line
      box-sizing border-box
      display flex
      align-items center
      width 100%
      height 88px
      padding 16px 30px
    .logo
      display inline-block
      width 138px
      height 39.8px
      margin-right 20px
      background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
      background-repeat no-repeat
    .earch
      width 442px
      height 56px
      display flex
      align-items center
      justify-content center
      background-color #ededed
      border-radius 10px
      .icon
        display inline-block
        display flex
        align-items center
        margin-right 10px
    .placeholder
      line-height 42px
      text-align center
      color #666
      font-size 28px
    .loginBtn
      width 74px
      height 40px
      line-height 0.53333rem
      text-align center
      color #b4282d
      border 1px solid #b4282d
      border-radius 0.10667rem
      margin-left 16px
      font-size 0.32rem
  .tabWrap
    width 100%
    height 60px
    background-color #fff
    position relative
    left 0
    top 88px
    .m-tabs
      box-sizing border-box
      height 60px
      padding-right 100px
      .list
        display flex
        justify-content space-around
        box-sizing border-box
        height 60px
        padding-left 30px
        .tab
          .txt
            display inline-block
            padding 0 0.21333rem
            line-height 60px
            font-size 0.37333rem
            color #333
            text-align center
    .tabbottom
      z-index 9
      .tabAlter
        z-index 9
        width 100%
        height 60px
        position absolute
        top 0
        left 0
        background-color #fff
        line-height 60px
        font-size 0.37333rem
        color #333
        padding-left 30px
      .tabList
        background-color #fff
        overflow hidden
        padding-top 24px
        position fixed
        z-index 9
        .tab
          display flex
          float left
          width 148px
          height 54px
          font-size 0.33333rem
          border 1px solid #ccc
          margin 0 0 40px 30px
          display inline-block
          text-align center
          line-height 54px
          border-radius 0.05333rem
          z-index 9
      .mask
        width 100%
        height 100%
        background rgba(0, 0, 0, 0.5)
        position fixed
        z-index 1
        top 0
        left 0
        right 0
        bottom 0
    .toggleWrap
      position absolute
      top 0
      right 0
      display inline-block
      width 100px
      height 60px
      display flex
      justify-content center
      align-items center
      z-index 10
      .icon
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png') // yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)
        display inline-block
        background-repeat no-repeat
        width 30px
        height 30px
  .swiper-container
    position relative
    z-index 0
    top 90px
    left 0
  .swiper-wrapper
    .swiper-slide
      .imgs
        width 750px
  .swiper-pagination
    bottom 0.4rem
    .swiper-pagination-bullet
      width 40px
      height 4px
      background-color #fff
  .m-indexServicePolicy
    box-sizing border-box
    position relative
    top 87px
    left 0
    display flex
    width 100%
    height 72px
    background-color #fff
    .g-grow
      display flex
      align-items center
      justify-content space-around
      width 100%
      padding 0 33px
      .grow-box
        display flex
        .imgs
          width 32px
          height 32px
          background-repeat no-repeat
          background-size 100% 100%
        .txt
          font-size 0.32rem
          color #333
          margin-left 0.10667rem
          line-height 0.42667rem
          display inline-block
  .m-kingKongModule
    position relative
    top 88px
    left 0
    width 100%
    background-color #ff6700
    display flex
    .m-carousel
      display flex
      width 100%
      height 373px
      .s-container
        width 100%
        height 373px
        display flex
        padding-bottom 32px
        .s-slide
          width 100px
          height 341px
          display flex
          .kingkong-item
            display inline-block
            position relative
            margin 10px 20px 9px 20px
            width 110px
            height 156px
            .icon
              display inline-block
              width 110px
              height 110px
            .txt
              margin-top 0.13333rem
              text-align center
              font-size 0.32rem
              color #FFF
              line-height 0.48rem
              white-space nowrap
</style>
