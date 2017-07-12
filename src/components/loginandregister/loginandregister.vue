<template>
    <div class="loginandregister">
      <div class="loginandregister-header">
        <router-link to="/"><span class="go-back-icon"></span></router-link>
        <img src="./login-background.png" alt="">
      </div>
      <div class="loginandregister-footer">
        <h1>老用户登录</h1>
      </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loginandregister
    position relative
    left 0
    top 0
    z-index 1000
    height 100%
    background-color #eee
    .loginandregister-header
      position relative
      width 100%
      height 141px
      background-color white
      text-align center
      img
        width 120px
        margin-top 42px
      .go-back-icon
        position absolute
        top 38%
        left 20px
        display block
        width 28px
        height 28px
        border-radius 50%
        border 1px solid #3aad36
        background-image url("./background-img.png")
        background-size 50%
        background-repeat no-repeat
        background-position center


    .loginandregister-footer
      height 526px
      background-image url("./background.jpg")
      background-size 100%
      background-position center
      background-repeat no-repeat
      text-align center
      h1
        height 84px
        line-height 84px
        font-size 20px
        color #037049
        font-family Microsoft YaHei,Helvetica,STHeiti,Droid Sans Fallback
</style>
