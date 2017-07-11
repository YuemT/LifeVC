<template>
  <div>
    <!--轮播图-->
    <mt-swipe :auto="4000" class="swipeImg">
      <mt-swipe-item>
        <router-link to="/item">
          <img src="./swipe/1.jpg" alt="">
        </router-link>
      </mt-swipe-item>
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
  </div>
</template>

<script>
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swipeImg
    height 250px
    img
      width 100%
</style>
