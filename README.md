## Daily log 7/11
1. 完成基本路由和组件设置
2. 完成首页，全部商品，闲逛三个页面的静态页面
  * 通过 mint-ui 实现顶部tab切换
    * 拖动效果未完成(后期完成)
  * 通过 mint-ui 实现轮播图
  * 通过 `<map>` 标签引入图片
3. 明日计划
  * 完成商品详情页，购物车，账户中心静态页面
  * 完善页面小布局
    * tab页签拖动
    * 首页底部app安装推荐
    * 全部商品页搜索按钮优化
    * 首页底部图片切换效果


</br></br></br></br>
  


## 丽芙家居(App)
## 准备工作：
1. 使用vue-cli(脚手架)搭建项目
    *	npm install -g vue-cli : 全局下载工具
    * vue init webpack LifeVC :下载基于webpack模板项目
    * cd LifeVC
    * npm install : 下载项目依赖的所有模块
    * npm run dev
    * 访问: localhost:8080
2. 需要完成的页面：
    * 首页
    * 全部产品页
    * 注册/登陆
    * 列表页
3. google插件准备
    * 扒图片插件
      * Gentleman
4. 使用Stylus css预编译器
    * 安装依赖的包
      * npm install stylus stylus-loader --save-dev
    * 编写样式(.vue)
          
            <style lang="stylus" rel="stylesheet/stylus">
              @import "common/stylus/mixins.styl"
            
            </style>
    * 拷贝common文件
  
5. 引入reset样式表(index.html)
    * static/css/reset.css
        
          <link rel="stylesheet" href="static/reset.css">
6. 安装，引入Mint UI
    * npm i mint-ui --save
    * 按需引入组件
      * 使用插件
        * babel-plugin-component
      * npm i babel-plugin-component -D
      * 配置 .babelrc 
            
              {
                "plugins": ["other-plugin", ["component", [
                  { "libraryName": "mint-ui", "style": true }
                ]]]
              }
      * 按需引入插件
          
              import Button from 'mint-ui/lib/button'; 
              Vue.component(Button.name, Button);
7. 移动端设置meta标签
    
        <meta name="viewport"
            content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
      
## 分析应用的整体vue组件结构
  * 主组件 app  
      * index 主页
      * allproduct 所有商品
      * shopping 闲逛
      * shopcart 购物车
      * usercenter 用户中心
  * 设置组件基本结构
## 设置路由文件  
  * ../src/router/index.js
  
  


      

  



