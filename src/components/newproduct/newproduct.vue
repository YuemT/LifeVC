<template>
    <div class="new-product">
      <div>
        <img src="./new-product.jpg" alt="">
      </div>
      <div class="product-title">
          洗衣防染巾(30片)
      </div>
      <div class="product-detail">
        <span class="timing-try">限时体验价</span>
        <span>￥</span>
        <span>9</span>
        <span class="update">￥19</span>
        <span class="new-icon">新</span>
        <span class="rating-num">评论:0</span>
      </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .new-product
    width 360px
    height 235px
    border 1px solid #ddd
    margin 0 6px 24px 
    background-color white
    img
      width 100%
    .product-title,.product-detail
      margin 2px 11px
      padding-top 10px
      font-size 14px
      .timing-try
        display inline-block
        width 70px
        height 21px
        padding 1px 3px
        background-color #fff000
        line-height 21px
      .update
        text-decoration line-through
        color #ccc
      .new-icon
        background-color #c00
        color white
        width 20px
        height 23px
        padding 1px 3px
      .rating-num
        display inline-block
        float right
        color #999
</style>
