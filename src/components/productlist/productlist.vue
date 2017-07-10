<template>
    <div class="product-wrap">
      <div class="product-header">
        家务
      </div>
      <div class="product-list">
        <ul>
          <li class="product-item">
            <img src="./product-1.jpg" alt="">
            <span>家务工具</span>
          </li>
          <li class="product-item">
            <img src="./product-2.jpg" alt="">
            <span>家务工具</span>
          </li>
          <li class="product-item">
            <img src="./product-3.jpg" alt="">
            <span>家务工具</span>
          </li>
          <li class="product-item">
            <img src="./product-4.jpg" alt="">
            <span>家务工具</span>
          </li>
          <li class="product-item">
            <img src="./product-5.jpg" alt="">
            <span>家务工具</span>
          </li>
          <li class="product-item">
            <img src="./product-6.jpg" alt="">
            <span>家务工具</span>
          </li>
          <li class="product-item">
            <img src="./product-7.jpg" alt="">
            <span>家务工具</span>
          </li>
          <li class="product-item">
            <img src="./product-8.jpg" alt="">
            <span>家务工具</span>
          </li>
          <li class="product-item">
            <img src="./product-9.jpg" alt="">
            <span>家务工具</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .product-wrap
    width 375px
    margin-top 24px
    overflow hidden
    .product-header
      height 36px
      font-size 18px
      line-height 24px
      text-align center
    .product-item
      float left
      width 33.333%
      height 138px
      border-right 1px solid #f1f1f1
      border-bottom 1px solid #f1f1f1
      background white
      text-align center
      border-collapse:collapse;
      box-sizing border-box
      img
        vertical-align middle
        width 60%
        padding-top 12px
      span
        display block
        font-size 13px
        padding-top 10px
        padding-bottom 5px
</style>
