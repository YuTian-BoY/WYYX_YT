<template>
  <div class="box">
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
            <ul class="list">
              <li class="tab active">
                <span class="txt">推荐</span>
              </li>
              <li class="tab">
                <span class="txt">居家生活</span>
              </li>
              <li class="tab">
                <span class="txt">服饰鞋包</span>
              </li>
              <li class="tab">
                <span class="txt">美食酒水</span>
              </li>
              <li class="tab">
                <span class="txt">个护清洁</span>
              </li>
              <li class="tab">
                <span class="txt">母婴亲子</span>
              </li>
              <li class="tab">
                <span class="txt">运动旅游</span>
              </li>
              <li class="tab">
                <span class="txt">数码家电</span>
              </li>
              <li class="tab">
                <span class="txt">全球特色</span>
              </li>
            </ul>
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
            <div class="tab">个护清洁</div>
            <div class="tab">母婴亲子</div>
            <div class="tab">运动旅游</div>
            <div class="tab">数码家电</div>
            <div class="tab">全球特色</div>
          </div>
          <div class="mask" @click="isOk=!isOk" v-show="!isOk"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-slide">
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
        <div class="list-content">
          <div class="m-kingKongModule">
            <div class="m-carousel">
              <div class="s-container">
                <div class="s-wrapper">
                  <div class="s-slide">
                    <a href="javascript:;" class="kingkong-item mb-9">
                      <div class="icon">
                        <img
                          class="icon"
                          src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                          alt
                        />
                      </div>
                      <div class="txt">新品首发</div>
                    </a>
                    <a href="javascript:;" class="kingkong-item mb-9">
                      <div class="icon">
                        <img
                          class="icon"
                          src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png"
                          alt
                        />
                      </div>
                      <div class="txt">居家生活</div>
                    </a>
                    <a href="javascript:;" class="kingkong-item mb-9">
                      <div class="icon">
                        <img
                          class="icon"
                          src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png"
                          alt
                        />
                      </div>
                      <div class="txt">服饰鞋包</div>
                    </a>
                    <a href="javascript:;" class="kingkong-item mb-9">
                      <div class="icon">
                        <img
                          class="icon"
                          src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
                          alt
                        />
                      </div>
                      <div class="txt">美食酒水</div>
                    </a>
                    <a href="javascript:;" class="kingkong-item mb-9">
                      <div class="icon">
                        <img
                          class="icon"
                          src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"
                          alt
                        />
                      </div>
                      <div class="txt">个护清洁</div>
                    </a>
                    <a href="javascript:;" class="kingkong-item mb-9">
                      <div class="icon">
                        <img
                          class="icon"
                          src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"
                          alt
                        />
                      </div>
                      <div class="txt">母婴亲子</div>
                    </a>
                    <a href="javascript:;" class="kingkong-item mb-9">
                      <div class="icon">
                        <img
                          class="icon"
                          src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png"
                          alt
                        />
                      </div>
                      <div class="txt">运动旅行</div>
                    </a>
                    <a href="javascript:;" class="kingkong-item mb-9">
                      <div class="icon">
                        <img
                          class="icon"
                          src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png"
                          alt
                        />
                      </div>
                      <div class="txt">数码家电</div>
                    </a>
                    <a href="javascript:;" class="kingkong-item mb-9">
                      <div class="icon">
                        <img
                          class="icon"
                          src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png"
                          alt
                        />
                      </div>
                      <div class="txt">全球特色</div>
                    </a>
                    <a href="javascript:;" class="kingkong-item mb-9">
                      <div class="icon">
                        <img
                          class="icon"
                          src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif"
                          alt
                        />
                      </div>
                      <div class="txt">好货抄底</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 新人专享 -->
          <div class="m-indexFloor">
            <div class="floorHeader">
              <span class="txtHeader">
                新人专享礼
              </span>
            </div>
            <div class="floorfooter">
              <ul class="floorContent">
                <li class="left"></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入swiper
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
// 引入Bscroll 滑动库
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      isOk: 'false'
    }
  },
  mounted() {
    let scrollTab = new BScroll('.inner', {
      scrollX: true,
      click: true
    })
    let scrollContent = new BScroll('.content', {
      scrollY: true,
      click: true
    })
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
.box
  width 750px
  height 1334px
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
        width 140px
        height 40px
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
        position relative
        z-index 9
        height 60px
        padding-right 100px
        .inner
          position relative
          z-index 10
          width 650px
          height 60px
          overflow hidden
          .list
            position relative
            z-index 9
            display flex
            justify-content space-around
            box-sizing border-box
            width 1460px
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
        background-color #fff
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
  .content
    width 750px
    height 1000px
    position relative
    top 147.98px
    left 0
    .swiper-container
      position relative
      z-index 0
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
      top 0
      left 0
      display flex
      width 100%
      height 73px
      background-color #fff
      overflow hidden
      .g-grow
        display flex
        align-items center
        justify-content space-around
        width 100%
        padding 0 30px
        position relative
        .grow-box
          display flex
          .imgs
            width 32px
            height 32px
            background-repeat no-repeat
            background-size 100% 100%
          .txt
            font-size 24px
            color #333
            margin-left 0.10667rem
            line-height 0.42667rem
            display inline-block
    .list-content
      position relative
      top 0
      left 0
      .m-kingKongModule
        position relative
        width 100%
        display flex
        background-color #fff
        .m-carousel
          display flex
          width 100%
          height 375px
          .s-container
            width 100%
            height 375px
            display flex
            padding-bottom 32px
            .s-wrapper
              width 100%
              height 375px
              position relative
              .s-slide
                width 750px
                height 375px
                text-align center
                .kingkong-item
                  float left
                  margin 10px 20px
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
                    color #333
                    line-height 0.48rem
                    white-space nowrap
    .m-indexFloor
      width 750px
      height 557px
      background-color #fff
      margin 20px 0 30px 0
      position relative
      .floorHeader
        width 160px
        height 90px
        line-height 90px
        text-align center
        margin 0 auto
        font-size 32px
        position relative
        .txtHeader::before
          content ''
          top .6rem
          width .32rem
          height .04rem
          background #333
          position absolute
          left -40px
        .txtHeader::after
          content ''
          top .6rem
          width .32rem
          height .04rem
          background #333
          position absolute
          left 170px
      .floorfooter
        width 750px
        height 438px
        box-sizing border-box
        background-color #ff9700
        padding-left 30px
        .floorContent
        width 100%
        height 100%
          .left{
            display inline-block
            width 343px
            height 434px
            background-color #f9e9cf
          }
</style>
