<template>
    <div class="shopcart">
      <div class="shopcart-header">
        <router-link to="/">
        <img src="./back-icon.png" alt="" >
        </router-link>
        购物车
      </div>
      <div class="shopcart-sign-in">
        <router-link to="/login"><div class="sign-in">登录</div></router-link>
        <span>你可以在登录后同步电脑与手机购物车中的商品</span>
      </div>
      <div class="shopcart-input">
        <input type="text" placeholder="礼品兑换处，请输入兑换码">
        <button>兑换</button>
      </div>
      <div class="cart">
        <div class="img-wrap">
          <img src="./shop-cart.png" alt="">
        </div>
        <p>您的购物车还是空荡荡的</p>
        <router-link to="/"><button>赶紧去逛逛</button></router-link>
      </div>
      <div class="recommend">
        <div class="recommend-header">
          Rico.S为你精心推荐
        </div>
        <div ref="recommend" class="recommend-ref">
          <mt-navbar v-model="selected" class="recommend-item">
            <mt-tab-item :id="index" :key="index" v-for="(product,index) in shopping.StrollList">
              <div class="recommend-product">
                <img :src="product.ImageUrl" alt="">
                <p class="title">{{product.Name}}</p>
                <p class="price">￥{{product.SalePrice}}</p>
              </div>
            </mt-tab-item>
          </mt-navbar>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'
    import { Navbar, TabItem } from 'mint-ui';
    import BScroll from 'better-scroll'

    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);

    export default{
      data(){
        return {
          selected:'1',
          shopping:{}
        }
      },
      created () {
        Vue.nextTick(()=>{
          this._initScroll()
        }),
        axios.get('/api/shopping')
          .then(response => {
            const result = response.data
            if (result.code === 0) {
              this.shopping = result.data
            }
          })
      },
      methods:{
        _initScroll () {
          new BScroll(this.$refs.recommend,{
            click: true,
            scrollX: true,
            probeType: 3,
            bounce: true
          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopcart
  position relative
  .shopcart-header
    height 48px
    width 100%
    background-color #89be48
    color white
    font-size 21px
    text-align center
    line-height 48px
    img
      position absolute
      left 12px
      top 14px
      width 12px
  .shopcart-sign-in
    height 34px
    padding 10px
    background-color #f0fae6
    .sign-in
      float left
      width 64px
      height 31px
      text-align center
      line-height 31px
      background-color #fff
      border 1px solid #8bc146
      color #88c13e
      margin-right 10px
    span
      font-size 14px
      color #333
  .shopcart-input
    height 34px
    background-color #fff
    padding 8px 14px
    input
      float left
      width 279px
      height 34px
      border 1px solid #e7e7e7
      border-right 1px solid rgba(0,0,0,0)
      box-sizing border-box
      outline none
      padding-left 10px
    ::-webkit-input-placeholder
      font-size 13px
      text-align center
      color #bbb
    button
      float left
      width 67px
      height 34px
      border 1px solid #6fbd00
      background-color white
      text-align center
      font-size 17px
      color #6fbd00
      outline none
  .cart
    height 237px
    width 100%
    margin 0 auto
    text-align center
    padding-top 10px
    font-size 18px
    color rgb(102, 102, 102)
    .img-wrap
      height 160px
      padding-left 24px
      padding-bottom 5px
      img
        width 160px
        height 160px
        vertical-align middle
        margin 0 auto
    p
      height 27px
    button
      height 34px
      width 118px
      color rgb(137, 190, 72)
      font-size 16px
      border 1px solid rgb(137, 190, 72)
      background-color rgba(0,0,0,0)
      border-radius 5px


  .recommend
    background-color white
    height 219px
    overflow hidden
    .recommend-header
      height 24px
      line-height 24px
      padding 9px 11px
      border-bottom 1px solid #ccc
    .recommend-ref
      overflow hidden
      width 100%
      .mint-navbar
        width 575px
      .recommend-product
        color #333
        float left
        background-color white
        width 96px
        height 144px
        margin-left 10px
        font-size 12px
        line-height 16px
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        img
          width 96px
          height 96px
        .title
          width 96px
        .price
          line-height 28px
          font-size 14px
</style>
