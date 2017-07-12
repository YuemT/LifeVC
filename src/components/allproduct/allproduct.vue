<template>
    <div class="product">
      <div class="all-product-wrap">
        <div class="all-product-title">全部产品</div>
        <div class="input" :style="wrapStyle">
          <input type="text" placeholder="搜索商品" :style="styleObject" @click="changestyle">
          <button class="cancel" @click="cancleStyle" v-show="isShow">取消</button>
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
      data () {
        return {
          styleObject:{
            width: '352px',
            textAlign: 'center',
            backgroundPositionX: '112px',
            backgroundPositionY: '6px',
          },
          wrapStyle:{
              textAlign:'center'
          },
          isShow: false
        }
      },
      components:{
          productlist
      },
      methods:{
        changestyle () {
          this.styleObject = {
            width: '310px',
            textAlign: 'left',
            paddingLeft: '36px',
            backgroundPositionX: '10px',
            backgroundPositionY: '6px',
            boxSizing: 'border-box'
          }
          this.wrapStyle = {
            textAlign:'left',
            paddingLeft:'12px',
            float: 'left'
          },
          this.isShow = true
        },
        cancleStyle () {
          this.styleObject = {
            width: '352px',
              textAlign: 'center',
              backgroundPositionX: '112px',
              backgroundPositionY: '6px'
          }
          this.wrapStyle = {
            textAlign:'center'
          }
          this.isShow = false
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.product
  display block
  margin-bottom 53px
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
      position relative
      width 375px
      height 36px
      background-color #f2f2f2
      text-align center
      padding 6px 0
      input
        height 36px
        border-radius 5px
        //text-align center
        outline none
        background-image url("./search.png")
        background-repeat no-repeat
        background-size 25px 25px
      .cancel
        position absolute
        top 8px
        right 15px
        color #83b842
        font-size 16px
  .product-wrapper
    padding-top 94px
</style>
