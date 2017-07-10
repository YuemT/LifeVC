<template>
    <div class="shopping">
      <div class="shopping-header">
        闲逛
      </div>
      <div class="shopping-content">
        <div class="shopping-wrap">
          <product></product>
          <product></product>
          <product></product>
          <product></product>
          <product></product>
        </div>
        <div class="notice">
          <ul>
            <li>
              <span>49元包一年</span>
            </li>
            <li>
              <span>今日新品</span>
            </li>
            <li>
              <span>送500元积分</span>
            </li>
            <li>
              <span>金币商城</span>
            </li>
          </ul>
        </div>
        <div class="shopping-wrap  shopping-wrap-rigth">
          <product></product>
          <product></product>
          <product></product>
          <product></product>
          <product></product>
        </div>
      </div>
    </div>
</template>

<script>
    import product from '../product/product.vue'
    export default{
      components:{
          product
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopping
    overflow hidden
    background-color white
    .shopping-header
      height 48px
      width 100%
      background-color #89be48
      color white
      font-size 21px
      text-align center
      line-height 48px
      position fixed
      top 0
      left 0
      right 0
      z-index 100
    .shopping-content
      margin-top 48px
      .notice
        width 50%
        height 125px
        padding 5px
        float: right
        box-sizing border-box
        li
          width 83px
          height 59px
          float left
          font-size 13px
          color #4a4a4a
          background-color #eaeaea
          border-radius 5px
          margin 2px
          text-align center
          line-height 59px
      .shopping-wrap
        width 50%
        float left
      .shopping-wrap-rigth
        padding-top 5px
</style>
