<template>
    <transition name="aboutlifevc">
      <div class="aboutlifevc">
        <div class="aboutlifevc-header">
          <router-link to="/">
            <img src="./back-icon.png" alt="" >
          </router-link>
          了解LifeVC
        </div>
        <div class="aboutlifevc-content">
          <aboutdetail></aboutdetail>
          <aboutdetail></aboutdetail>
          <aboutdetail></aboutdetail>
          <aboutdetail></aboutdetail>
          <aboutdetail></aboutdetail>
        </div>
      </div>
    </transition>
</template>

<script>
    import aboutdetail from '../aboutdetail/aboutdetail.vue'
    export default{
      components:{
        aboutdetail
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .aboutlifevc-enter-active, .aboutlifevc-leave-active
    transition: all .2s linear

  .aboutlifevc-enter, .aboutlifevc-leave-to
    transform translateX(375px)
  .aboutlifevc
    width 100%
    min-height 100%
    background-color white
    position absolute
    z-index 100

    .aboutlifevc-header
      position fixed
      height 48px
      width 100%
      background-color #89be48
      color white
      font-size 20px
      text-align center
      line-height 48px
      img
        position absolute
        left 12px
        top 14px
        width 12px
    .aboutlifevc-content
      width 92%
      margin 48px auto 0
</style>
