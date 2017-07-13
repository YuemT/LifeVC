<template>
  <div id="app">
    <!--路由组件-->
    <router-view></router-view>
    <!--底部tab区域-->
    <div class="tab">
      <div class="tab-item">
        <router-link to="/index">
          <div class="icon icon-home"></div>
          <span>
            首页
          </span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/allproduct">
          <div class="icon icon-type"></div>
          <span>
            全部商品
          </span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shopping">
          <div class="icon icon-nav"></div>
          <span>
           闲逛
          </span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shopcart">
          <div class="icon icon-shopping"></div>
          <span>
            购物车
          </span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/usercenter">
          <div class="icon icon-user"></div>
          <span>
            账户中心
          </span>
        </router-link>
      </div>
    </div>
    <!--app安装提示-->
    <div class="index-app-footer" v-show="isShow">
      <span class="close-icon" @click="closeIcon"></span>
      <img class="downloadTop" src="./image/downloadTop.png" alt="">
      <img class="downloadBottom" src="./image/downloadBottom.png" alt="">
    </div>
  </div>
</template>

<script>
import '../static/reset.css'
export default {
  name: 'app',
  data(){
    return {
        isShow: true
    }
  },
  methods:{
    closeIcon () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html
  background-color #f2f2f2
  font-family Microsoft YaHei,Helvetica,STHeiti,Droid Sans Fallback
  input
    outline none
  button
    outline none
  #app
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
          background-image url("./image/home-1.png")
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
        .active .icon-home
          background-image url('./image/home.png')
        .active .icon-type
          background-image url('./image/type-1.png')
        .active .icon-nav
          background-image url('./image/nav-1.png')
        .active .icon-shopping
          background-image url('./image/shopcart-1.png')
        .active .icon-user
          background-image url('./image/user-1.png')
    .index-app-footer
      position fixed
      left 0
      bottom 53px
      width 375px
      .downloadBottom
        width 100%
      .downloadTop
        display block
        width 15.5%
        position absolute
        left 18px
        top -42px
      .close-icon
        width 26px
        height 24px
        display block
        position absolute
        top 0
        right 0

</style>
