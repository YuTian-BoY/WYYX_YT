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
          <li
            class="item"
            @click="goto(index)"
            v-for="(item, index) in items"
            :key="index"
            :class="{'active':index==isActive}"
          >{{item.title}}</li>
        </ul>
      </div>
      <!-- 右侧内容 -->
      <div class="content-right">
        <div class="content-bsc">
          <div class="right-content">
            <div class="header">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(aa, index) in shops.categoryL1List"
                    :key="index"
                  >
                    <img class="imgs" :src="aa.bannerUrl" />
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
              </div>
            </div>
            <div class="bottom">
              <ul class="bottom-content">
                <li
                  class="bottom-list"
                  v-for="(list, index) in shops.categoryL1List[isActive].subCateList"
                  :key="index"
                >
                  <span class="list-img">
                    <img class="bannerImg" :src="list.bannerUrl" />
                  </span>
                  <span class="list-name">{{list.name}}</span>
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
// 引入vuex
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isActive: 0,
      items: [
        {
          title: '推荐专区'
        },
        {
          title: '换季专区'
        },
        {
          title: '爆品专区'
        },
        {
          title: '新品专区'
        },
        {
          title: '居家生活'
        },
        {
          title: '服饰鞋包'
        },
        {
          title: '美食酒水'
        },
        {
          title: '个护清洁'
        },
        {
          title: '母婴亲子'
        },
        {
          title: '运动旅行'
        },
        {
          title: '数码家电'
        },
        {
          title: '全球特色'
        },
        {}
      ]
    }
  },
  methods: {
    goto(index) {
      this.isActive = index
      console.log(this.bannerImg)
      console.log(this)
    }
  },
  mounted() {
    this.$store.dispatch('getShops')
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
      autoplay: {
        // 自动轮播
        delay: 6000,
        stopOnLastSlide: false
      }
      // 如果需要分页器
      // pagination: {
      //   el: '.swiper-pagination'
      // }
    })
  },
  computed: {
    ...mapState(['shops'])
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
      border-radius 8px
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
          content ' '
          position absolute
          top 0
          left 0
          bottom 0
          width 0.08rem
          background-color #ab2b2b
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
          height 1148px
          .header
            width 528px
            height 192px
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
                  .bannerImg
                    width 144px
                    height 144px
                .list-name
                  display inline-block
                  width 144px
                  height 72px
                  font-size 24px
                  text-align center
                  vertical-align top
              .bottom-list:nth-child(3), .bottom-list:nth-child(6), .bottom-list:nth-child(9), .bottom-list:nth-child(12), .bottom-list:nth-child(15), .bottom-list:nth-child(18)
                margin-right 0
</style>
