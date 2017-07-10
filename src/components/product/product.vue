<template>
    <div class="product-items">
      <div>
        <img src="./product-3.jpg" alt="">
      </div>
      <div class="content">
        <h3>分类整理收纳箱</h3>
        <div>
        <span class="price">
          ￥<strong>49</strong>
        </span>
          <span class="volume">月销4082</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .product-items
    height 267px
    width 100%
    float left
    text-align center
    padding 6px 0
    img
      width 172px
      border-radius 5px
    .content
      padding 5px
      h3
        text-align left
        color #333
        font-size 14px
        line-height 24px
      .price
        display block
        color #ff475d
        text-align left
        float left
        font-size 18px
        font-weight 600
      .volume
        display block
        color #999
        font-size 15px
        text-align right
</style>
