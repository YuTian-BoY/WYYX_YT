<template>
  <div class="content-right">
    <div class="content-bsc">
      <div class="right-content">
        <div class="header">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(url, index) in bannerUrl" :key="url">
                <img class="imgs" :src="url" alt />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="bottom">
          <ul class="bottom-content">
            <li class="bottom-list" v-for="(list, index) in name" :key>
              <span class="list-img">
                <img class="bannerImg" :src="list" alt />
              </span>
              <span class="list-name">{{list}}</span>
            </li>
          </ul>
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
      bannerUrl: [
        'http://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png'
      ]
    }
  },
  methods: {
    data() {
      return {}
    },
    goto(index) {
      this.isActive = index
      this.bannerUrl = []
      this.name = []
      this.bannerUrl.push(this.shops.categoryL1List[index].bannerUrl)
      this.name.push(this.shops.categoryL1List[index].subCateList[index].name)
    }
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // autoplay: {
      //   // 自动轮播
      //   delay: 6000,
      //   stopOnLastSlide: false
      // },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
  computed: {
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
    ...mapState(['shops'])
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
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
          .bottom-list:nth-child(3), .bottom-list:nth-child(6), .bottom-list:nth-child(9)
            margin-right 0
</style>
