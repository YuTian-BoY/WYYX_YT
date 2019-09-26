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
  mounted() {
    let uTab = new BScroll('.u-tab', {
      scrollX: true,
      click: true
    })
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
  .u-tab
    height 92px
    width 750px
    .u-tab-conent
      width 1000px
      height 92px
      line-height 92px
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
        border-bottom .04rem solid #B4282D
</style>
