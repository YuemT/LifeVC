<template>
  <div class="index-tab-wrap">
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
    <div class="item-combo">
      <img src="./oneyear.jpg" width="100%" alt="Planets" usemap="#planetmap6">
      <map data-v-46782024="" name="planetmap6" id="planetmap6">
        <area data-v-46782024="" shape="rect" coords="0,2,375,101">
      </map>
    </div>
    <div class="item-combo">
      <img src="./combo-1.jpg" width="100%" alt="Planets" usemap="#planetmap7">
      <map data-v-46782024="" name="planetmap7" id="planetmap7">
        <area data-v-46782024="" shape="rect" coords="0,2,375,101">
      </map>
    </div>
    <div class="item-combo">
      <img src="./combo-2.jpg" width="100%" alt="Planets" usemap="#planetmap8">
      <map data-v-46782024="" name="planetmap8" id="planetmap8">
        <area data-v-46782024="" shape="rect" coords="0,2,375,101">
      </map>
    </div>
    <div class="item-combo">
      <img src="./combo-3.jpg" width="100%" alt="Planets" usemap="#planetmap9">
      <map data-v-46782024="" name="planetmap9" id="planetmap9">
        <area data-v-46782024="" shape="rect" coords="0,2,375,101">
      </map>
    </div>
    <div class="item-combo">
      <img src="./combo-4.jpg" width="100%" alt="Planets" usemap="#planetmap10">
      <map data-v-46782024="" name="planetmap10" id="planetmap10">
        <area data-v-46782024="" shape="rect" coords="0,2,375,101">
      </map>
    </div>
    <div class="item-combo">
      <img src="./about.jpg" width="100%" alt="Planets" usemap="#planetmap11">
      <map data-v-46782024="" name="planetmap11" id="planetmap11">
        <area data-v-46782024="" shape="rect" coords="0,2,375,101">
      </map>
    </div>
    <div class="item-combo">
      <img src="./buyfree.jpg" width="100%" alt="Planets" usemap="#planetmap12">
      <map data-v-46782024="" name="planetmap12" id="planetmap12">
        <area data-v-46782024="" shape="rect" coords="0,2,375,101">
      </map>
    </div>
    <div class="item-combo">
      <img src="./hotsale.jpg" width="100%" alt="Planets" usemap="#planetmap13">
      <map data-v-46782024="" name="planetmap13" id="planetmap13">
        <area data-v-46782024="" shape="rect" coords="0,2,375,101">
      </map>
    </div>
    <div class="item-combo">
      <img src="./hotsale-1.jpg" width="100%" alt="Planets" usemap="#planetmap14">
      <map data-v-46782024="" name="planetmap14" id="planetmap14">
        <area data-v-46782024="" shape="rect" coords="0,2,375,101">
      </map>
    </div>
  </div>
</template>

<script>
    export default{

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.index-tab-wrap
  background-color white
  .swipeImg
    height 250px
    img
      width 100%
      border 0
</style>
