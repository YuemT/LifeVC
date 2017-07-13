<template>
    <div class="product-det">
      <div class="product-details">
        <div class="product-details-header">
          <router-link to="/">
            <img src="./back-icon.png" alt="" >
          </router-link>
          商品介绍
        </div>
        <!--轮播图-->
        <div class="product-details-wrapper">
          <div class="carousel">
            <mt-swipe :auto="4000">
              <mt-swipe-item><img src="./detailimg-1.jpg" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="./detailimg-2.jpg" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="./detailimg-3.jpg" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="./detailimg-4.jpg" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="./detailimg-1.jpg" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="./detailimg-2.jpg" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="./detailimg-3.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="product-title">
            <h2>耐高温玻璃饭盒</h2>
            <p class="product-title-info">午餐自己带,更健康</p>
            <p class="product-title-price">
              <span class="product-title-price-left">¥19</span>
              <span class="product-title-price-right">¥29</span>
            </p>
            <p class="product-title-discount">
              <span class="product-title-discount-left">限时体验价</span>
              <span class="product-title-discount-right">新</span>
            </p>
          </div>
        </div>
        <!--优惠信息-->
        <div class="product-promo-wrap">
          <span class="product-promo-wrap-left">优惠</span>
          <span class="product-promo-wrap-right">登录查看你的积分和优惠券</span>
        </div>
        <!--规格和颜色-->
        <div class="size-and-color">
          <div class="size-and-color-item">
            <span>规格:</span>
            <div class="product-size">
              分隔式
            </div>
            <div class="product-size">
              带筷式
              </div>
          </div>
          <div class="size-and-color-item">
            <span>颜色:</span>
            <div class="product-color product-color-1">
            </div>
            <div class="product-color product-color-2">
            </div>
          </div>
        </div>
        <!--数量-->
        <div class="product-num">
          <span class="number">数量:</span>
          <div class="product-num-item">
            <span class="product-num-plus" @click="addNum(false)">－</span>
            <span class="product-number">{{num}}</span>
            <span class="product-num-minus" @click="addNum(true)">＋</span>
          </div>
        </div>
        <!--运费-->
        <div class="transport">
          <span class="product-transport">送至:</span>
          <span class="transport-city" @click="showAdress=!showAdress">{{addressProvince}}{{addressCity}}{{addressXian}}(满￥99免运费)</span>
          <span class="transport-discount">新会员首单，满69元免运费</span>
        </div>
        <!--活动中心-->
        <div class="active-center">
          <img src="./active-center.jpg" alt="">
          <img src="./seller-info.jpg" alt="">
        </div>
        <!--商品规格-->
        <div class="product-information">
          <ul>
            <li><span class="product-information-active">商品介绍</span></li>
            <li><span v-bind:class="{productInformationActive:isActive}">规格参数</span></li>
            <li><span>评论(0)</span></li>
          </ul>
        </div>
        <!--详情图-->
        <div class="detail-imgs">
          <img src="./detail-1.jpg" alt="">
          <img src="./detail-2.jpg" alt="">
          <img src="./detail-3.jpg" alt="">
          <img src="./detail-4.jpg" alt="">
          <img src="./detail-5.jpg" alt="">
          <img src="./detail-6.jpg" alt="">
          <img src="./detail-7.jpg" alt="">
          <img src="./detail-8.jpg" alt="">
          <img src="./detail-9.jpg" alt="">
          <img src="./detail-10.jpg" alt="">
          <img src="./detail-11.jpg" alt="">
          <img src="./detail-12.jpg" alt="">
        </div>
        <!--会员使用评论-->
        <div class="user-common">
          <p class="user-common-header">用户使用评论&nbsp;:&nbsp;(11条)</p>
          <div class="user-common-detail">
            <p>河南 136*****536&nbsp;<span>玛瑙会员&nbsp;累计购物:&nbsp;112</span></p>
            <p>质量不错，也好看，就是有点小</p>
            <span>2017-07-12&nbsp;&nbsp;规格:分隔式&nbsp;颜色:咖啡色</span>
          </div>
          <div class="user-common-detail">
            <p>河南 136*****536&nbsp;<span>玛瑙会员&nbsp;累计购物:&nbsp;112</span></p>
            <p>质量不错，也好看，就是有点小</p>
            <span>2017-07-12&nbsp;&nbsp;规格:分隔式&nbsp;颜色:咖啡色</span>
          </div>
          <div class="user-common-detail">
            <p>河南 136*****536&nbsp;<span>玛瑙会员&nbsp;累计购物:&nbsp;112</span></p>
            <p>质量不错，也好看，就是有点小</p>
            <span>2017-07-12&nbsp;&nbsp;规格:分隔式&nbsp;颜色:咖啡色</span>
          </div>
          <div class="user-common-detail">
            <p>河南 136*****536&nbsp;<span>玛瑙会员&nbsp;累计购物:&nbsp;112</span></p>
            <p>质量不错，也好看，就是有点小</p>
            <span>2017-07-12&nbsp;&nbsp;规格:分隔式&nbsp;颜色:咖啡色</span>
          </div>
          <div class="see-more">
            查看更多
          </div>
        </div>

      </div>
      <!--app安装提示-->
      <div class="detail-app-footer" v-show="isShow">
        <span class="close-icon" @click="closeIcon"></span>
        <img class="downloadTop" src="./downloadTop.png" alt="">
        <img class="downloadBottom" src="./downloadBottom.png" alt="">
      </div>
      <!--三级联动-->
      <transition name="address">
        <div class="address-detail" v-show="showAdress">
          <div class="address-header">
            <button class="button-left" @click="showAdress=!showAdress">取消</button>
            <button class="button-right" @click="showAdress=!showAdress">确定</button>
          </div>
          <div class="address-components">
            <div class="address">
              <mt-picker :slots="addressSlots" class="picker" @change="onAddressChange" :visible-item-count="5" ></mt-picker >
            </div>
          </div>
        </div>
      </transition>
      <!--黑窗口-->
      <transition name="blackwindow">
        <div class="black-window" v-show="showAdress"></div>
      </transition>
      <!--底部footer-->
      <div class="product-footer">
        <span class="kefu">客服</span>
        <router-link to="/"><span class="shouye">首页</span></router-link>
        <button class="shopcart-button">
        </button>
        <button class="add-to-shopcart">加入购物车</button>
        <p class="circle">0</p>
      </div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import { Swipe, SwipeItem } from 'mint-ui';
    import addresscom from '../addresscom/addresscom.vue'

    import { Picker } from 'mint-ui'; //前提是npm install mint-ui -S
    import s from './address4.json'
    Vue.component(Picker.name, Picker);

    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default{
      data(){
        return {
          isShow: true,
          num: 1,
          showAdress: false,
          companyName:'',
          addressSlots: [
            {
              flex: 1,
              defaultIndex: 1,
              values: Object.keys(s),
              className: 'slot1',
              textAlign: 'center'
            }, {
              divider: true,
              content: '-',
              className: 'slot2'
            }, {
              flex: 1,
              values: [],
              className: 'slot3',
              textAlign: 'center'
            }, {
              divider: true,
              content: '-',
              className: 'slot4'
            }, {
              flex: 1,
              values: [],
              className: 'slot5',
              textAlign: 'center'
            }
          ],
          streetSlots: [
            {
              flex: 1,
              values: [],
              className: 'slot1',
              textAlign: 'center'
            }
          ],
          addressProvince: '省',
          addressCity: '市',
          addressXian: '区',
          addressStreet: '街道',
          productInformationActive:{
            lineHeight:'26px',
            display: 'block',
            backgroundColor: '#89be48',
            width: '76px',
            height: '26px',
            margin: '8px auto',
            borderRadius: '20px',
            color:'white',
            fontSize:'15px'
          },
          isActive:false
        }
      },
      methods:{
        closeIcon () {
          this.isShow = !this.isShow
        },
        addNum(isAdd) {
          if(isAdd){
            this.num++
          }else{
            if(this.num != 1){
              this.num--
            }
          }
        },
        onAddressChange(picker, values) {
          let sheng = Object.keys(s);
          let shi = Object.keys(s[values[0]]);
          let xian = s[values[0]][shi[0]];
          this.xianObj = xian;
          picker.setSlotValues(1, shi);
          this.addressProvince = values[0];
          this.addressCity = values[1];
          this.addressXian = values[2];
          picker.setSlotValues(2, Object.keys(xian));
        },
        onStreetChange(picker, values){
          this.addressStreet = values[0]
        }
      },
      watch: {
        'addressXian': {
          handler(val, oval){
            let street = this.xianObj[this.addressXian]
            this.streetSlots[0].values = street
          }
        }
      },
      created(){

      },
      mounted(){
        this.$nextTick(() => {
          setTimeout(() => {//这个是一个初始化默认值的一个技巧
            this.addressSlots[0].defaultIndex = 0;
          }, 100);
        });
      },
      components:{
          addresscom
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.product-det
  position absolute
  top 0
  left 0
  z-index 1000
  .product-details
    padding-bottom 52px
    background-color white
    .product-details-header
      position fixed
      top 0
      left 0
      z-index 100
      height 40px
      width 100%
      background-color #89be48
      color white
      font-size 21px
      text-align center
      line-height 40px
      img
        position absolute
        left 12px
        top 10px
        width 12px
    .product-details-wrapper
      margin-top 40px
      .carousel
        height 375px
        img
          width 100%
      .product-title
        height 92px
        padding 20px 0 17px
        background-color white
        text-align center
        h2
          font-size 20px
        .product-title-info
          margin-top 7px
          color #999
        .product-title-price
          margin-top 10px
          line-height 22px
          .product-title-price-left
            font-size 22px
            color #c00
          .product-title-price-right
            font-size 20px
            color #000
            font-weight 200
            text-decoration line-through
            margin-left 2px
        .product-title-discount
          .product-title-discount-left
            display inline-block
            margin-right 2px
            padding 1px
            background-color rgb(254, 209, 9)
            font-size 14px
          .product-title-discount-right
            display inline-block
            background-color rgb(205, 6, 15)
            font-size 14px
            color rgb(253, 238, 238)
            padding 1px
    .product-promo-wrap
      margin-left 7px
      height 40px
      border-top 1px solid #ddd
      border-bottom 1px solid #ddd
      background-color white
      font-size 13px
      line-height 40px
      .product-promo-wrap-left
        color white
        background-color #cd060f
        margin-right 6px
      .product-promo-wrap-right
        color #cd060f
    .size-and-color
      height 154px
      margin-left 7px
      color #666
      .size-and-color-item
        height 57px
        margin-top 10px
        span
          font-size 13px
          display block
          padding 4px 0
        .product-size
          margin-right 8px
          float left
          //width 42px
          height 38px
          padding 0 8px
          font-size 14px
          line-height 38px
          text-align center
          border 1px solid #83b842
        .product-color
          width 48px
          height 48px
          float left
          border 1px solid #83b842
          margin-right 8px
        .product-color-1
          background-image url("./white.jpg")
          background-size 100%
        .product-color-2
          background-image url("./black.jpg")
          background-size 100%
    .product-num
      color #666
      font-size 13px
      height 27px
      padding-left 7px
      line-height 27px
      .number
        margin-right 10px
      span
        display block
        float left
      .product-num-item
        .product-num-plus,.product-num-minus
          width 27px
          height 27px
          border 1px solid #ccc
          background-color #eee
          box-sizing border-box
          text-align center
        .product-number
          height 27px
          width 38px
          border-top 1px solid #ccc
          border-bottom 1px solid #ccc
          text-align center
          color #2e2e2e
          box-sizing border-box
    .transport
      height 40px
      font-size 13px
      padding-left 7px
      margin-top 18px
      .product-transport
        color #666
      .transport-city
        color #333
      .transport-discount
        display block
        color rgb(204, 0, 0)
        padding-top 8px
        margin-left 34px


    .active-center
      height 302px
      margin-top 15px
      padding-bottom 8px
      border-top 1px solid #ddd
      background-color #eee
      img
        width 100%
        display block
    .product-information
      height 40px
      padding 3px 8px
      border-bottom 2px solid #eee
      li
        font-size 14px
        width 33.3333%
        float left
        text-align center
        line-height 40px
        .product-information-active
          line-height 26px
          display block
          background-color #89be48
          width 76px
          height 26px
          margin 8px auto
          border-radius 20px
          color white
          font-size 15px
    .detail-imgs
      img
        width 100%
        display block
  .address-detail
    position fixed
    z-index 1100
    bottom 0
    left 0
    height 220px
    width 100%
    background-color white
    .address-header
      border-bottom 1px solid #dcdcdc
      button
        height 40px
        font-size 17px
        color #26a2ff
        line-height 35px
      .button-left
        padding-left 30px
      .button-right
        padding-left 230px
    .address-components
      height 180px
  .blackwindow-enter-active, .blackwindow-leave-active
    transition opacity .1s linear
  .blackwindow-enter, .blackwindow-leave-to
    opacity 0
  .black-window
    position fixed
    left 0
    top 0
    z-index 1050
    width 100%
    height 667px
    background-color rgba(0,0,0,.5)
  .user-common
    .user-common-header
      height 26px
      border-top 6px solid #ddd
      line-height 26px
    .user-common-detail
      height 60px
      padding 10px 0 10px 5px
      font-size 12px
      line-height 20px
      p
        color
      span
        color silver
    .see-more
      margin-top 10px
      text-align center
      height 51px
      line-height 51px
      border-top 1px solid rgb(242, 242, 242)

  .address-enter-active, .address-leave-active
    transition opacity .1s linear
  .address-enter, .address-leave-to
    opacity 0
  .detail-app-footer
    z-index 1200
    position fixed
    left 0
    bottom 47px
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

  .product-footer
    height 38px
    width 100%
    padding 5px 2px
    border-top 1px solid #ddd
    background #f8f8f8
    position fixed
    left 0
    bottom 0
    span
      display inline-block
      height 48px
      width 44px
      font-size 12px
      background-size 40%
      background-repeat no-repeat
      background-position top
      text-align center
      padding-top 23px
    .kefu
      background-image url("./kefu.png")
    .shouye
      background-image url("./shouye.png")
    .shopcart-button
      width 75px
      height 38px
      border 1px solid #009d42
      border-radius 5px
      background rgba(0,0,0,0)
      background-image url("./gouwuche.png")
      background-size 32%
      background-repeat no-repeat
      background-position 15px 8px
      margin-left 5px
    p
      position absolute
      top 15px
      left 150px
      display inline-block
      width 18px
      height 18px
      background-color #f60
      border-radius 50%
      color white
      line-height 18px
      text-align center
    .add-to-shopcart
      float right
      margin-right 15px
      width 168px
      height 38px
      background-color #009d42
      border-radius 5px
      border none
      box-sizing border-box
      color white
      font-size 16px
</style>
