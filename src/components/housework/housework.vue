<template>
  <div class="housework">
    <tabtop></tabtop>
    <div class="tabcontent">
      <img src="./notice.jpg" alt="">
      <div class="text">Rico.S的精心推荐：</div>
      <newproduct></newproduct>
      <newproduct></newproduct>
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
    import tabtop from '../tabtop/tabtop.vue'
    import newproduct from '../newproduct/newproduct.vue'
    export default{
      components:{
        tabtop,
        newproduct
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tabcontent
    margin-top 16px
    img
      width 100%
    .text
      height 38px
      font-size 19px
      line-height 38px
      text-align center
      margin 5px 0

</style>
