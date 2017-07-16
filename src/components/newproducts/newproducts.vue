<template>
    <div class="new-products-wrap">
      <div class="week-products">
        <div class="text">最近一周新品</div>
        <div class="new-product" v-for="product in weekProduct">
          <div>
            <img :src="product.ImageUrl" alt="">
          </div>
          <div class="product-title">
            {{product.Name}}
        </div>
          <div class="product-detail">
            <span class="timing-try">限时体验价</span>
            <span>￥</span>
            <span>{{product.ActivityPrice?product.ActivityPrice:product.SalePrice}}</span>
            <span class="update" v-show="product.ActivityPrice">￥{{product.SalePrice}}</span>
            <span class="new-icon">新</span>
            <span class="rating-num">评论:{{product.CommentCount}}</span>
          </div>
        </div>
      </div>
      <div class="month-products">
        <div class="text">最近一月新品</div>
        <div class="new-product" v-for="product in monthProduct">
          <div>
            <img :src="product.ImageUrl" alt="">
          </div>
          <div class="product-title">
            {{product.Name}}
        </div>
          <div class="product-detail">
            <span class="timing-try">限时体验价</span>
            <span>￥</span>
            <span v-show="product.SalePrice">{{product.ActivityPrice?product.ActivityPrice:product.SalePrice}}</span>
            <span class="update" v-show="product.ActivityPrice">￥{{product.SalePrice}}</span>
            <span class="new-icon">新</span>
            <span class="rating-num">评论:{{product.CommentCount}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data () {
      return {
        weekProduct:{},
        monthProduct:{}
      }
    },
    created () {
      axios.get('/api/shopping')
        .then(response => {
          const result = response.data
          if (result.code === 0) {
            this.weekProduct = result.data.InnerDataWeek
            this.monthProduct = result.data.InnerDataMonth

          }
        })
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
