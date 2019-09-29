<template>
  <div>
    <Header>
      <div class="konw-header" slot="logo-Img">
        <div class="header-tab">
          <div class="tab-content">
            <span class="txt" :class="{'active':isOk}">发现</span>
            <span class="txt">甄选家</span>
          </div>
        </div>
      </div>
    </Header>
    <div class="m-main-tab">
      <div class="u-tab">
        <ul class="u-tab-conent">
          <li
            class="conent-list"
            v-for="(item, index) in banLists"
            :key="index"
            @click="onTo(index)"
            :class="{'active':index==tabIndex}"
          >{{item.title}}</li>
        </ul>
      </div>
    </div>
    <div class="m-main-content">
      <div class="BScroll-content">
        <div class="main-banner" v-if="konContent">
          <div class="banner-list">
            <img class="banner-img" v-lazy="konContent[0].ad.picUrl" />
          </div>
        </div>
        <div class="banner-lists">
          <span class="title">{{konContent[0].topics[0].title}}</span>
          <img class="banner-img" v-lazy="konContent[0].topics[0].picUrl" />
          <span class="txt">{{konContent[0].topics[0].readCount}}人看过</span>
        </div>
        <div class="main-banner" v-if="konContent">
          <div class="banner-list">
            <img class="banner-img" v-lazy="konContent[0].ad.picUrl" />
          </div>
        </div>
        <div class="banner-lists">
          <span class="title">{{konContent[0].topics[0].title}}</span>
          <img class="banner-img" v-lazy="konContent[0].topics[0].picUrl" />
          <span class="txt">{{konContent[0].topics[0].readCount}}人看过</span>
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
      tabIndex: 0,
      banLists: [
        { title: '推荐' },
        { title: '好货内部价' },
        { title: '选购指南' },
        { title: '回购榜' },
        { title: '晒单' },
        { title: '达人' },
        { title: 'HOME' }
      ],
      isOk: 'true'
    }
  },
  async mounted() {
    await this.$store.dispatch('getRecommendData')
    let uTab = new BScroll('.u-tab', {
      scrollX: true,
      click: true
    })
    let mainContent = new BScroll('.m-main-content', {
      scrollY: true,
      click: true
    })
  },
  computed: {
    ...mapState(['konContent'])
  },
  methods: {
    onTo(index) {
      this.tabIndex = index
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.konw-header
  width 320px
  height 88px
  margin-left -160px
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  margin auto
  z-index 10
  .header-tab
    width 320px
    height 100%
    .tab-content
      width 320px
      height 88px
      line-height 88px
      text-align center
      .txt
        font-size 28px
        color #7f7f7f
        font-weight bold
        padding 0 16px
        vertical-align middle
      .active
        font-size 40px
        color #b4282d
        font-weight bold
.m-main-tab
  height 72px
  padding-bottom 8px
  background #fafafa
  border-bottom 2px solid #d9d9d9
  border-top 2px solid #d9d9d9
  position relative
  z-index 10
  margin-bottom 20px
  .u-tab
    height 72px
    width 750px
    .u-tab-conent
      width 1000px
      height 72px
      line-height 72px
      text-align center
      .conent-list
        height 70px
        line-height 70px
        float left
        display inline-block
        box-sizing border-box
        font-size 28px
        color #7f7f7f
        margin 0 20px
        padding 0 8px
      .active
        color #B4282D
        border-bottom 0.04rem solid #B4282D
.m-main-content
  width 100%
  height 1060px
  box-sizing border-box
  position absolute
  .main-banner
    width 750px
    height 450px
    box-sizing border-box
    margin-bottom 20px
    padding 35px 25px
    background-color #fff
    .banner-list
      box-sizing border-box
      width 700px
      height 375px
      .banner-img
        width 100%
        height 100%
        border-radius 10px
  .banner-lists
    width 100%
    height 100%
    background-color #fff
    padding 35px 25px
    .title
      font-size 36px
      color #333
      line-height 52px
      margin -8px 0 16px
      display inline-block
    .banner-img
      width 100%
      height 100%
      border-radius 10px
    .txt
      font-size 24px
      color #999
</style>
