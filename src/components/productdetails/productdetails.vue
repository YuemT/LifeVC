<template>
    <div class="product-details">
      <div class="product-details-header">
        <router-link to="/">
        <img src="./back-icon.png" alt="" >
        </router-link>
        商品介绍
      </div>
      <!--轮播图-->
      <div class="product-details-wrapper">
        <div class="carousel">
          <mt-swipe :auto="4000">
            <mt-swipe-item><img src="./detailimg-1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./detailimg-2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./detailimg-3.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./detailimg-4.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./detailimg-1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./detailimg-2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./detailimg-3.jpg" alt=""></mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="product-title">
          <h2>耐高温玻璃饭盒</h2>
          <p class="product-title-info">午餐自己带,更健康</p>
          <p class="product-title-price">
            <span class="product-title-price-left">¥19</span>
            <span class="product-title-price-right">¥29</span>
          </p>
          <p class="product-title-discount">
            <span class="product-title-discount-left">限时体验价</span>
            <span class="product-title-discount-right">新</span>
          </p>
        </div>
      </div>
      <!--优惠信息-->
      <div class="product-promo-wrap">
        <span class="product-promo-wrap-left">优惠</span>
        <span class="product-promo-wrap-right">登录查看你的积分和优惠券</span>
      </div>
      <!--规格和颜色-->
      <div class="size-and-color">
        <div class="product-size">

        </div>
        <div class="product-color">

        </div>
      </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Swipe, SwipeItem } from 'mint-ui';

    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.product-details
  background-color white
  .product-details-header
    position fixed
    top 0
    left 0
    z-index 100
    height 40px
    width 100%
    background-color #89be48
    color white
    font-size 21px
    text-align center
    line-height 40px
    img
      position absolute
      left 12px
      top 10px
      width 12px
  .product-details-wrapper
    margin-top 40px
    .carousel
      height 375px
      img
        width 100%
    .product-title
      height 92px
      padding 20px 0 17px
      background-color white
      text-align center
      h2
        font-size 20px
      .product-title-info
        margin-top 7px
        color #999
      .product-title-price
        margin-top 10px
        line-height 22px
        .product-title-price-left
          font-size 22px
          color #c00
        .product-title-price-right
          font-size 20px
          color #000
          font-weight 200
          text-decoration line-through
          margin-left 2px
      .product-title-discount
        .product-title-discount-left
          display inline-block
          margin-right 2px
          padding 1px
          background-color rgb(254, 209, 9)
          font-size 14px
        .product-title-discount-right
          display inline-block
          background-color rgb(205, 6, 15)
          font-size 14px
          color rgb(253, 238, 238)
          padding 1px
  .product-promo-wrap
    margin-left 7px
    height 40px
    border-top 1px solid #ddd
    border-bottom 1px solid #ddd
    background-color white
    font-size 13px
    line-height 40px
    .product-promo-wrap-left
      color white
      background-color #cd060f
      margin-right 6px
    .product-promo-wrap-right
      color #cd060f
  .size-and-color
    height 154px
</style>
