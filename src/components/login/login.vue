<template>
    <div class="loginandregister">
      <div class="loginandregister-header">
        <router-link to="/usercenter"><span class="go-back-icon"></span></router-link>
        <img src="./login-background.png" alt="">
      </div>
      <div class="loginandregister-footer" v-show="isShow">
        <h1>老用户登录</h1>
        <input type="text" placeholder="请输入手机号" v-model="phonenumber">
        <input type="password" placeholder="请输入登录密码">
        <button class="forget-password">忘记密码</button>
        <div class="fast-login">
          <p>手机号快捷登录></p>
        </div>
        <div class="same-style">
          <button class="login-button" @click="checkValue">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
        </div>
        <div class="same-style">
          <button class="register-button" @click="changeIsShow">注&nbsp;&nbsp;&nbsp;&nbsp;册</button>
        </div>
      </div>
      <div class="loginandregister-footer2" v-show="!isShow">
        <h1>新用户注册</h1>
        <input type="text" placeholder="请输入手机号" v-model="phonenumber">
        <input type="password" placeholder="请设置6-20位密码,包含字母、数字或符号">
        <input type="text" placeholder="请输入图形验证码">
        <input type="text" placeholder="请输入手机验证码">
        <button class="get-key">获取验证码</button>
        <p>遇到问题？请<a href="">联系客服</a></p>
        <div class="same-style">
          <button class="login-button" @click="changeIsShow">注&nbsp;&nbsp;&nbsp;&nbsp;册</button>
        </div>
        <div class="same-style">
          <button class="register-button" @click="changeIsShow">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
        </div>
      </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default{
      data () {
        return{
          isShow: true,
          phonenumber:''
        }
      },

      methods:{
        changeIsShow () {
            this.isShow = !this.isShow
        },
        checkValue () {
            if(!this.phonenumber){
              let instance = Toast('请先输入手机号');
              setTimeout(() => {
                instance.close();
              }, 1000);
            }else{
              if(!(/^1[3,4,5,7,8]\d{9}$/.test(this.phonenumber))){
                let instance = Toast('请输入正确的手机号');
                setTimeout(() => {
                  instance.close();
                }, 1000);
              }
            }
        }
      }
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


    .loginandregister-footer,.loginandregister-footer2
      position relative
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
      input
        height 50px
        width 337px
        background-color rgba(0,0,0,0)
        border-bottom 1px solid #ddd
        font-size 16px
      .forget-password
        position absolute
        right 18px
        top 145px
        width 96px
        height 31px
        border 1px solid #3aad36
        border-radius 4px
        font-size 16px
        color #3aad36
        background-color rgba(0,0,0,0)
      .fast-login
        height 50px
        p
          text-align right
          font-size 16px
          color #3aad36
          line-height 42px
          padding-right 18px
      .same-style
        height 38px
        margin-bottom 14px
        button
          font-size 20px
          line-height 36px
          border none
          border-radius 5px
          width 300px
          height 38px
          color white
        .login-button
          background-color #3aad36
        .register-button
          background-color #8a8a8a
          opacity .5

    .loginandregister-footer2
      p
        padding 10px 0
        font-size 14px
        color #666
        a
          color #3ea438
          text-decoration underline
      .get-key
        position absolute
        right 18px
        top 246px
        width 96px
        height 31px
        border 1px solid #3aad36
        border-radius 4px
        font-size 16px
        color #3aad36
        background-color rgba(0,0,0,0)

</style>
