<template>
    <div class="shopping">
      <div class="shopping-header">
        闲逛
      </div>
      <div class="shopping-content">
        <div class="shopping-wrap">
          <div class="product-items" v-for="product in shopping.StrollList">
            <div>
              <img :src="product.ImageUrl" alt="">
            </div>
            <div class="content">
              <h3>{{product.Name}}</h3>
              <div>
        <span class="price">
          ￥<strong>{{product.SalePrice}}</strong>
        </span>
                <span class="volume">月销{{product.SaleQty}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="notice">
          <ul>
            <li v-for="comfiger in shopping.ConfigerList">
              <span>{{comfiger.Title}}</span>
            </li>
            <!--<li>-->
              <!--<span>今日新品</span>-->
            <!--</li>-->
            <!--<li>-->
              <!--<span>送500元积分</span>-->
            <!--</li>-->
            <!--<li>-->
              <!--<span>金币商城</span>-->
            <!--</li>-->
          </ul>
        </div>
        <div class="shopping-wrap  shopping-wrap-rigth">
          <div class="product-items" v-for="product in shopping.StrollList2">
            <div>
              <img :src="product.ImageUrl" alt="">
            </div>
            <div class="content">
              <h3>{{product.Name}}</h3>
              <div>
        <span class="price">
          ￥<strong>{{product.SalePrice}}</strong>
        </span>
                <span class="volume">月销{{product.SaleQty}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import product from '../product/product.vue'
    export default{
      data () {
        return {
          shopping:{},
          shopingRight:{}
        }
      },
      created () {
        axios.get('/api/shopping')
          .then(response => {
            const result = response.data
            if (result.code === 0) {
              this.shopping = result.data
            }
          })
      },
      components:{
          product
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopping
    overflow hidden
    background-color white
    padding-bottom 5px
    margin-bottom 55px
    .shopping-header
      height 48px
      width 100%
      background-color #89be48
      color white
      font-size 21px
      text-align center
      line-height 48px
      position fixed
      top 0
      left 0
      right 0
      z-index 100
    .shopping-content
      margin-top 48px
      .notice
        width 50%
        height 125px
        padding 5px
        float: right
        box-sizing border-box
        li
          width 83px
          height 59px
          float left
          font-size 13px
          color #4a4a4a
          background-color #eaeaea
          border-radius 5px
          margin 2px
          text-align center
          line-height 59px
      .shopping-wrap-rigth
        padding-top 5px
      .shopping-wrap
        width 50%
        float left
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
          margin 5px
          h3
            text-align left
            color #333
            font-size 14px
            line-height 24px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
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
