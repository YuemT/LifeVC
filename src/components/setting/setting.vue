<template>
    <div class="setting">
      <div class="setting-header">
        <router-link to="/usercenter">
          <img src="./back-icon.png" alt="" >
        </router-link>
        设置
      </div>
      <ul>
        <li class="list-style-item" @click="openConfirm">
          <span href="#" class="item-left-1">
            <p class="item-text">清理缓存</p>
            <span class="item-right-text"></span>
          </span>
        </li>
        <li class="list-style-item list-style-item-down">
          <span class="item-left-1">
            <p class="item-text">关于LifeVC
              <span class="version">平台: browser 版本：5.1.2 - 261</span>
            </p>
            <span class="item-right-text"></span>
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    export default{
      data () {
        return {

        }
      },
      methods:{
        openConfirm(){
          MessageBox.confirm('确定要清理缓存吗？').then(()=>{
            let instance = Toast('清理成功');
            setTimeout(() => {
              instance.close();
            }, 1000);
          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .setting-header
    height 48px
    width 100%
    background-color #89be48
    color white
    font-size 21px
    text-align center
    line-height 48px
    img
      position absolute
      left 12px
      top 14px
      width 12px
  .list-style-item
    .item-left-1
      display block
      height 60px
      background-color white
      background-repeat no-repeat
      background-size 30px 30px
      background-position 14px 15px
      line-height 60px
      font-size 14px
      color #585858
      padding-left 20px
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
  .list-style-item-down
    margin-top 12px
    .version
      margin-left 75px
      font-size 12px
      color #ccc
      line-height 60px
</style>
