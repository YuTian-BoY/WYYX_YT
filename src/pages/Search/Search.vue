<template>
  <div class="search">
    <div class="search-header">
      <div class="search-content">
        <form class="search-input">
          <div class="input-content">
            <input type="search" class="ipt" placeholder="搜你所搜,想你所想" />
          </div>
        </form>
        <span class="txt" @click="$router.back()">取消</span>
      </div>
    </div>
    <div class="search-list"></div>
  </div>
</template>
<script>
export default {}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.search
  width 750px
  height 532px
  .search-header
    width 750px
    height 88px
    line-height 88px
    padding 0 30px
    background-color #fff
    display flex
    .search-input
      display inline-block
      width 604px
      height 56px
      line-height 56px
      .input-content
        width 604px
        height 56px
        padding 0 20px
        background-color #f4f4f4
        border 0
        border-radius 4px
        .ipt
          font-size 28px
          border none
          color rgba(0, 0, 0, 0.8)
          background-color transparent
      .input-content::before
        content ' '
        margin-right 0.21333rem
        display inline-block
        vertical-align middle
        background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
        background-repeat no-repeat
        background-size 100% 100%
        width 0.37333rem
        height 0.37333rem
</style>
