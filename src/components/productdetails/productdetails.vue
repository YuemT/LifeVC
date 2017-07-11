<template>
    <div class="product-details">
      <div class="product-details-header">
        <router-link to="/">
        <img src="./back-icon.png" alt="" >
        </router-link>
        商品介绍
      </div>
      <!--轮播图-->
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
        <p class="product-title-info">午餐自己带，更健康</p>
        <p class="product-title-price">
          <span>¥19</span>
          <span>¥19</span>
        </p>
        <p class="product-title-discount">
          <span>限时体验价</span>
          <span>新</span>
        </p>
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
  .product-details-header
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
  .carousel
    //margin-top 40px
    height 375px
    img
      width 100%
  .product-title
    height 129px
    background-color white
    text-align center
</style>
