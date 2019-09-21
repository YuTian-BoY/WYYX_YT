<template>
  <div class="classifyBox">
    <!-- 搜索框 -->
    <div class="search">
      <div class="search-content">
        <i class="searchImg"></i>
        <span class="txt">搜索商品, 共22916款好物</span>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <!-- 左侧列表 -->
      <div class="content-lift">
        <ul class="list">
          <li class="item" @click="goto(index)" v-for="(item, index) in items" :key="index" :class="{'active':index==isActive}"> {{item.title}} </li>
        </ul>
      </div>
      <!-- 右侧内容 -->
      <div class="content-right">
        <div class="content-bsc">
          <div class="right-content">
            <div class="header">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img
                      class="imgs"
                      src="https://yanxuan.nosdn.127.net/f7f216f5d01874f8f768ccfd78a7112e.jpg?imageView&quality=75&thumbnail=0x196"
                      alt
                    />
                  </div>
                  <div class="swiper-slide">
                    <img
                      class="imgs"
                      src="https://yanxuan.nosdn.127.net/40ee9e553e6a2c228b0544bff65a618d.jpg?imageView&quality=75&thumbnail=0x196"
                      alt
                    />
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
              </div>
            </div>
            <div class="bottom">
              <ul class="bottom-content">
                <li class="bottom-list">
                  <span class="list-img">
                    <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </span>
                  <span class="list-name">明星商品</span>
                </li>
                <li class="bottom-list">
                  <span class="list-img">
                    <img src="https://yanxuan.nosdn.127.net/a91deb0e8592ea6c5e402d71eadc6a64.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </span>
                  <span class="list-name">精选美食99选6</span>
                </li>
                <li class="bottom-list">
                  <span class="list-img">
                    <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </span>
                  <span class="list-name">员工精选好货</span>
                </li>
                <li class="bottom-list">
                  <span class="list-img">
                    <img src="https://yanxuan.nosdn.127.net/3e52cf9e7db8ff6eb442b83043ae44ce.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </span>
                  <span class="list-name">男装季末特惠</span>
                </li>
                <li class="bottom-list">
                  <span class="list-img">
                    <img src="https://yanxuan.nosdn.127.net/fcbe22542c091f31d6a22a7e921edc8f.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </span>
                  <span class="list-name">女装季末特惠</span>
                </li>
                <li class="bottom-list">
                  <span class="list-img">
                    <img src="https://yanxuan.nosdn.127.net/c64660221bf28ededa6ba330dc5ddbf5.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </span>
                  <span class="list-name">秋季换新好物</span>
                </li>
                <li class="bottom-list">
                  <span class="list-img">
                    <img src="https://yanxuan.nosdn.127.net/0cb19987ddd873c693272c60352ba6a7.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </span>
                  <span class="list-name">50元幸福好物</span>
                </li>
                <li class="bottom-list">
                  <span class="list-img">
                    <img src="https://yanxuan.nosdn.127.net/33fbf26f90d8b8a470cfe4fcfc2f5fe8.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </span>
                  <span class="list-name">家装好物推荐</span>
                </li>
                <li class="bottom-list">
                  <span class="list-img">
                    <img src="https://yanxuan.nosdn.127.net/cda4a56526a230055bea8221a6b7ab11.png?imageView&quality=85&thumbnail=144x144" alt="">
                  </span>
                  <span class="list-name">999+好评</span>
                </li>
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
      isActive:0,
      items:[
        {
          title:'推荐专区'
        },
        {
          title:'换季专区'
        },
        {
          title:'爆品专区'
        },
        {
          title:'新品专区'
        },
        {
          title:'居家生活'
        },
        {
          title:'服饰鞋包'
        },
        {
          title:'美食酒水'
        },
        {
          title:'个护清洁'
        },
        {
          title:'母婴亲子'
        },
        {
          title:'运动旅行'
        },
        {
          title:'数码家电'
        },
        {
          title:'全球特色'
        },
        ]
    }
  },
  methods: {
    goto(index){
      this.isActive=index
    }
  },
  mounted() {
    let scrollContentLift = new BScroll('.content-lift', {
      scrollY: true,
      click: true
    })
    let scrollContentRight = new BScroll('.content-bsc', {
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
.classifyBox
  width 100%
  height 100%
  .search
    width 750px
    height 88px
    padding 0 30px
    background-color #fff
    display flex
    align-items center
    line-height 88px
    .search-content
      width 690px
      height 56px
      line-height 56px
      border-radius 5px
      background-color #ededed
      display flex
      justify-content center
      align-items center
      position relative
      .searchImg
        width 28px
        height 28px
        display inline-block
        background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
        background-repeat no-repeat
        background-size 100% 100%
        margin-right 10px
      .txt
        display inline-block
        font-size 28px
        color #666
        font-family PingFangSC-Light, helvetica, 'Heiti SC'
  .content
    width 750px
    height 1148px
    background-color #fff
    display flex
    .content-lift
      width 162px
      height 1140px
      display inline-block
      overflow hidden
      .list
        width 162px
        height 1148px
        .item
          display inline-block
          width 162px
          height 50px
          line-height 50px
          margin-top 40px
          font-size 28px
          text-align center
          position relative
          box-sizing content-box
        .active
          color #ab2b2b
        .active::before
          content: ' '
          position: absolute
          top: 0
          left: 0
          bottom: 0
          width: .08rem
          background-color: #ab2b2b
    .content-right
      width 588px
      height 1148px
      display inline-block
      background-color #fff
      padding 30px 30px 21px 30px
      overflow hidden
      .content-bsc
        width 528px
        height 872px
        .right-content
          width 528px
          height 873px
          .header
            width 528px
            height 192px
            background-color #ff6700
            .swiper-container
              width 528px
              height 192px
              .swiper-wrapper
                .swiper-slide
                  .imgs
                    display inline-block
                    width 528px
                    height 192px
              .swiper-pagination
                position absolute
                left 0
                bottom 22px
                .swiper-pagination-bullet
                  width 40px
                  height 4px
                  margin-right 10px
                  background-color #fff
          .bottom
            width 528px
            height 648px
            margin-top 32px
            .bottom-content
              width 528px
              height 648px
              display flex
              flex-wrap wrap
              .bottom-list
                width 144px
                height 216px
                margin-right 34px
                .list-img
                  display inline-block
                  width 144px
                  height 144px
                .list-name
                  display inline-block
                  width 144px
                  height 72px
                  font-size 24px
                  text-align center
                  vertical-align top
              .bottom-list:nth-child(3)
              .bottom-list:nth-child(6)
              .bottom-list:nth-child(9)
                margin-right 0
</style>
