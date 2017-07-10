<template>
  <div id="app">
    <!--路由组件-->
    <router-view></router-view>
    <!--底部tab区域-->
    <div class="tab">
      <div class="tab-item">
        <div class="icon icon-home"></div>
        <span>
          <router-link to="/index">首页</router-link>
        </span>
      </div>
      <div class="tab-item">
        <div class="icon icon-type"></div>
        <span>
          <router-link to="/allproduct">全部商品</router-link>
        </span>
      </div>
      <div class="tab-item">
        <div class="icon icon-nav"></div>
        <span>
          <router-link to="/shopping">闲逛</router-link>
        </span>
      </div>
      <div class="tab-item">
        <div class="icon icon-shopping"></div>
        <span>
          <router-link to="/shopcart">购物车</router-link>
        </span>
      </div>
      <div class="tab-item">
        <div class="icon icon-user"></div>
        <span>
          <router-link to="/usercenter">账户中心</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import '../static/reset.css'
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html
  background-color #f2f2f2
  #app
    width 100%
    height 100%
    .tab
      width 100%
      height 54px
      border-top 1px solid #ddd
      position fixed
      bottom 0
      background #f8f8f8
      .tab-item
        float left
        width 20%
        text-align center
        color #ababab
        font-size 12px
        .active
          color #009c42
        .icon
          width 100%
          height 33px
        .icon-home
          background-image url("./image/home.png")
          background-size 29%
          background-position 50%
          background-repeat no-repeat
        .icon-type
          background-image url("./image/type.png")
          background-size 29%
          background-position 50%
          background-repeat no-repeat
        .icon-nav
          background-image url("./image/nav.png")
          background-size 29%
          background-position 50%
          background-repeat no-repeat
        .icon-shopping
          background-image url("./image/shopcart.png")
          background-size 29%
          background-position 50%
          background-repeat no-repeat
        .icon-user
          background-image url("./image/user.png")
          background-size 29%
          background-position 50%
          background-repeat no-repeat
</style>
