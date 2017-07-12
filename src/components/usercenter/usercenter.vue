<template>
    <div class="usercenter">
      <div class="usercenter-header">
        账户中心
        <span>设置</span>
      </div>
      <div class="prompt">
        <span class="not-yet">您还未登录</span>
        <div class="choose">
          <router-link to="/login"><a href="">登录</a></router-link>
          <span>|</span>
          <router-link to="/register"><a href="">注册</a></router-link>
        </div>
      </div>
      <div class="user-list">
        <ul>
          <li class="user-item">
            <a href="">
              <span class="user-icon"></span>
              <span class="user-text">待支付</span>
            </a>
          </li>
          <li class="user-item">
            <a href="">
              <span class="user-icon"></span>
              <span class="user-text">待发货</span>
            </a>
          </li>
          <li class="user-item right-item">
            <a href="">
              <span class="user-icon"></span>
              <span class="user-text">待收货</span>
            </a>
          </li>
        </ul>
        <ul>
          <li class="user-item">
            <a href="">
              <span class="user-icon"></span>
              <span class="user-text">待评论</span>
            </a>
          </li>
          <li class="user-item">
            <a href="">
              <span class="user-icon"></span>
              <span class="user-text">待回复</span>
            </a>
          </li>
          <li class="user-item right-item">
            <a href="">
              <span class="user-icon"></span>
              <span class="user-text">退换货</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="my-order list-style">
        <ul>
          <li class="list-style-item">
            <a href="">
              <span class="item-left"></span>
              <p class="item-text">我的订单</p>
              <span class="item-right-text"></span>
            </a>
          </li>
        </ul>
      </div>
      <div class="my-prefer list-style">
        <ul>
          <li class="list-style-item">
            <a href="">
              <span class="item-left"></span>
              <p class="item-text">我的订单</p>
              <span class="item-right-text"></span>
            </a>
          </li>
          <li class="list-style-item">
            <a href="">
              <span class="item-left"></span>
              <p class="item-text">我的订单</p>
              <span class="item-right-text"></span>
            </a>
          </li>
          <li class="list-style-item">
            <a href="">
              <span class="item-left"></span>
              <p class="item-text">我的订单</p>
              <span class="item-right-text"></span>
            </a>
          </li>
        </ul>
      </div>
      <div class="my-info list-style">
        <ul>
          <li class="list-style-item">
            <a href="">
              <span class="item-left"></span>
              <p class="item-text">我的订单</p>
              <span class="item-right-text"></span>
            </a>
          </li>
          <li class="list-style-item">
            <a href="">
              <span class="item-left"></span>
              <p class="item-text">我的订单</p>
              <span class="item-right-text"></span>
            </a>
          </li>
          <li class="list-style-item">
            <a href="">
              <span class="item-left"></span>
              <p class="item-text">我的订单</p>
              <span class="item-right-text"></span>
            </a>
          </li>
          <li class="list-style-item">
            <a href="">
              <span class="item-left"></span>
              <p class="item-text">我的订单</p>
              <span class="item-right-text"></span>
            </a>
          </li>
          <li class="list-style-item">
            <a href="">
              <span class="item-left"></span>
              <p class="item-text">我的订单</p>
              <span class="item-right-text"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .usercenter
    margin-bottom 54px
    .usercenter-header
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
      span
        position absolute
        right 15px
        font-size 19px
    .prompt
      margin-top 48px
      height 104px
      background-image url("./background.png")
      background-size 100%
      background-repeat no-repeat
      text-align center
      padding-top 6px
      .not-yet
        display block
        height 36px
        line-height 36px
        font-size 16px
      .choose
        width 115px
        height 36px
        padding 0 10px
        margin 6px auto
        border 1px solid #009c42
        line-height 36px
        font-size 18px
        color #009c42
        background-color rgba(255,255,255,.4)
        border-radius 20px
        a
          color #009c42
    .user-list
      ul
        position relative
        height 61px
        background white
        border-bottom 1px solid #eee
        li
          float left
          margin-top 16px
          width 124px
          height 30px
          border-right 1px solid #dedede
          a
            .user-icon
              vertical-align middle
              display inline-block
              width 60px
              height 30px
              background-image url("icon-1.png")
              background-size 71%
              background-position 14px -6px
              background-repeat no-repeat
            .user-text
              display inline-block
              font-size 12px
              color #585858
        .right-item
          border-right none


    .list-style
      margin-bottom 12px
      .list-style-item
        a
          display block
          height 60px
          background-color white
          background-image url("./icon-a.png")
          background-repeat no-repeat
          background-size 30px 30px
          background-position 20px 15px
          line-height 60px
          font-size 15px
          color #585858
          padding-left 60px
          position relative
          border-bottom 1px solid #eee
          .item-right-text
            display inline-block
            position absolute
            top 24px
            right 12px
            width 10px
            height 10px
            border-right 2px solid #bbb
            border-bottom 2px solid #bbb
            transform rotate(-45deg)



</style>
