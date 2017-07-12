<template>
  <div class="wrap">
    <!--头部header-->
    <div class="index-header">
      <div class="header-title">
        <span class="head-type">
        </span>
      </div>
      <!--nav导航-->
        <mt-navbar class="page-part" v-model="selected" id="navbar">
          <mt-tab-item id="1"><span>首页</span></mt-tab-item>
          <mt-tab-item id="2"><span>新品</span></mt-tab-item>
          <mt-tab-item id="3"><span>家务</span></mt-tab-item>
          <mt-tab-item id="4"><span>下厨</span></mt-tab-item>
          <mt-tab-item id="5"><span>家居服</span></mt-tab-item>
          <mt-tab-item id="6"><span>生活</span></mt-tab-item>
          <mt-tab-item id="7"><span>软装</span></mt-tab-item>
          <mt-tab-item id="8"><span>床品</span></mt-tab-item>
          <mt-tab-item id="9"><span>工作和旅行</span></mt-tab-item>
          <mt-tab-item id="10"><span>了解LifeVC</span></mt-tab-item>
        </mt-navbar>
    </div>
    <!--首页选项卡-->
    <div class="index-tab">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <indextab></indextab>
        </mt-tab-container-item>
      </mt-tab-container>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="2">
          <newproducts></newproducts>
        </mt-tab-container-item>
      </mt-tab-container>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="3">
          <housework></housework>
        </mt-tab-container-item>
      </mt-tab-container>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="4">
          <kitchen></kitchen>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

  </div>

</template>

<script>
  import indextab from '../indextab/indextab.vue'
  import { TabContainer, TabContainerItem } from 'mint-ui';

  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);

  import Vue from 'vue'
  import {Navbar, TabItem} from 'mint-ui';
  import 'mint-ui/lib/style.css'
  import newproducts from '../newproducts/newproducts.vue'
  import housework from '../housework/housework.vue'
  import kitchen from '../kitchen/kitchen.vue'

  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);

  import {Swipe, SwipeItem} from 'mint-ui';

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default{
    data() {
      return {
        selected: '1'
      };
    },
    components:{
      newproducts,
      indextab,
      housework,
      kitchen
    },
    methods:{
      jumpToDetail () {
        //alert('jumpToDetail ()')
        //发送请求，跳转页面
  }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    height 100%
    padding-bottom: 54px;
    .index-header
      position fixed
      top 0
      left 0
      right 0
      z-index 100
      .header-title
        position relative
        height 48px
        background-color #89be48
        background-image url("icon.png")
        background-size 50%
        background-repeat no-repeat
        background-position 50%
        .head-type
          display block
          position absolute
          top 27%
          right -13px
          height 44px
          width 44px
          background-image url("headertype.png")
          background-size 45%
          background-repeat no-repeat
      .page-part
        padding-bottom 2px
        span
          display inline-block
          width 80px
          color #333
          font-size 14px
    .index-tab
      margin-top 94px
      margin-bottom 53px
      .mt-tab-container
        padding-top 94px





</style>
