// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router'
import './mock/mockServer' //引入加载模块

Vue.config.productionTip = false
import './common/stylus/fonts.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app }
})
