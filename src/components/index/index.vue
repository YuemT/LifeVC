<template>
  <div class="wrap">
    <!--头部header-->
    <div class="index-header">
      <div class="header-title">
      <span class="head-type">
      </span>
      </div>
      <!--nav导航-->
      <mt-navbar class="page-part" v-model="selected">
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
          <!--轮播图-->
          <mt-swipe :auto="4000" class="swipeImg">
            <mt-swipe-item><img src="./swipe/1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./swipe/2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./swipe/3.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./swipe/4.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./swipe/5.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./swipe/6.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./swipe/7.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./swipe/8.jpg" alt=""></mt-swipe-item>
          </mt-swipe>
          <!--分类图片-->
          <div class="item-combo">
            <img src="./classify.jpg" width="375" height="90" alt="Planets" usemap="#planetmap">
            <map name="planetmap">
              <area shape="rect" coords="0，9，123，88" alt="Sun" href="sun.htm">
              <area shape="rect" coords="123,9,251,90" alt="Mercury" href="mercur.htm">
              <area shape="rect" coords="251,9,375,89" alt="Venus" href="venus.htm">
            </map>
          </div>
          <!--暑期旅行-->
          <div class="item-combo">
            <img src="./journey.jpg" width="375" height="150" alt="Planets" usemap="#planetmap2">
            <map name="planetmap2">
              <area shape="rect" coords="0，1，375，148" alt="Sun" href="sun.htm">
            </map>
          </div>
          <!--分类组合图片-->
          <div class="item-combo">
            <img src="./newpublic.jpg" width="375" alt="Planets" usemap="#planetmap3">

            <map data-v-46782024="" name="planetmap2" id="planetmap3">
              <area data-v-46782024="" shape="rect" coords="0,64,375,231">
              <area data-v-46782024="" shape="rect" coords="0,240,375,407">
              <area data-v-46782024="" shape="rect" coords="0,407,375,573">
              <area data-v-46782024="" shape="rect" coords="0,573,123,749">
              <area data-v-46782024="" shape="rect" coords="123,573,251,749">
              <area data-v-46782024="" shape="rect" coords="251,573,375,749">
              <area data-v-46782024="" shape="rect" coords="0,749,123,925">
              <area data-v-46782024="" shape="rect" coords="123,749,251,925">
              <area data-v-46782024="" shape="rect" coords="251,749,375,925">
            </map>
          </div>
          <div class="item-combo">
            <img src="./combo.jpg" width="375" height="238" alt="Planets" usemap="#planetmap4">
            <map name="planetmap4">
              <area shape="rect" coords="0，26，371，235" alt="Sun" href="sun.htm">
            </map>
          </div>
          <div class="item-combo">
            <img src="./olduser.jpg" width="100%" alt="Planets" usemap="#planetmap5">
            <map data-v-46782024="" name="planetmap5" id="planetmap5">
              <area data-v-46782024="" shape="rect" coords="3,46,86,158">
              <area data-v-46782024="" shape="rect" coords="93,46,191,164">
              <area data-v-46782024="" shape="rect" coords="191,46,281,164">
              <area data-v-46782024="" shape="rect" coords="285,46,371,164">
              <area data-v-46782024="" shape="rect" coords="3,170,90,294">
              <area data-v-46782024="" shape="rect" coords="93,170,183,294">
              <area data-v-46782024="" shape="rect" coords="187,170,281,294">
              <area data-v-46782024="" shape="rect" coords="281,170,375,294">
            </map>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="2">
          <newproducts></newproducts>
        </mt-tab-container-item>
      </mt-tab-container>

  </div>

</template>

<script>
  import { TabContainer, TabContainerItem } from 'mint-ui';

  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);

  import Vue from 'vue'
  import {Navbar, TabItem} from 'mint-ui';
  import 'mint-ui/lib/style.css'
  import newproducts from '../newproducts/newproducts.vue'

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
      newproducts
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
        width 250%
        padding-bottom 2px
        span
          display inline-block
          width 80px
          color #333
          font-size 14px
    .index-tab
      margin-top 102px
      .mt-tab-container
        padding-top 102px

      .swipeImg
        height 250px
        img
          width 100%

</style>
