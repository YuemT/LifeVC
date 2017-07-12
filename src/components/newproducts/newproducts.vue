<template>
    <div class="new-products-wrap">
      <div class="week-products">
        <div class="text">最近一周新品</div>
        <newproduct></newproduct>
        <newproduct></newproduct>
        <newproduct></newproduct>
        <newproduct></newproduct>
        <newproduct></newproduct>
      </div>
      <div class="month-products">
        <div class="text">最近一月新品</div>
        <newproduct></newproduct>
        <newproduct></newproduct>
        <newproduct></newproduct>
        <newproduct></newproduct>
        <newproduct></newproduct>
        <newproduct></newproduct>
      </div>
    </div>
</template>

<script>
  import newproduct from '../newproduct/newproduct.vue'
  export default{
      components:{
        newproduct
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .new-products-wrap
   .week-products,.month-products
      .text
        height 38px
        font-size 19px
        line-height 38px
        text-align center
</style>
