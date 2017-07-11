<template>
    <div class="shopcart">
      <span class="back-icon">
      </span>
      <div class="shopcart-header">
        购物车
      </div>

    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopcart
  position relative
  .back-icon
    position absolute
    background-image url("./back-icon.png")
  .shopcart-header
    height 48px
    width 100%
    background-color #89be48
    color white
    font-size 21px
    text-align center
    line-height 48px
</style>
