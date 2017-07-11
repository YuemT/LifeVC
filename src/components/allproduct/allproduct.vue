<template>
    <div class="product">
      <div class="all-product-wrap">
        <div class="all-product-title">全部产品</div>
        <div class="input">
          <input type="text" placeholder="搜索商品">
        </div>
      </div>
      <div class="product-wrapper">
        <productlist></productlist>
        <productlist></productlist>
        <productlist></productlist>
        <productlist></productlist>
        <productlist></productlist>
        <productlist></productlist>
        <productlist></productlist>
      </div>
    </div>
</template>

<script>
    import productlist from '../productlist/productlist.vue'
    export default{
      components:{
          productlist
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.product
  display block
  .all-product-wrap
    position fixed
    top 0
    left 0
    right 0
    z-index 100
    .all-product-title
      height 48px
      width 100%
      background-color #89be48
      color white
      font-size 21px
      text-align center
      line-height 48px
    .input
      height 36px
      background-color #f2f2f2
      text-align center
      padding 6px 0
      input
        width 352px
        height 36px
        border-radius 5px
        text-align center
        outline none
  .product-wrapper
    padding-top 94px
</style>
