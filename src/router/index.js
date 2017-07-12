import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index.vue'
import allproduct from '../components/allproduct/allproduct.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import shopping from '../components/shopping/shopping.vue'
import usercenter from '../components/usercenter/usercenter.vue'
import productdetails from '../components/productdetails/productdetails.vue'
import loginandregister from '../components/loginandregister/loginandregister.vue'
import aboutlifevc from '../components/aboutlifevc/aboutlifevc.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/allproduct',
      component: allproduct
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/shopping',
      component: shopping
    },
    {
      path: '/usercenter',
      component: usercenter
    },
    {
      path: '/item',
      component: productdetails
    },
    {
      path: '/login',
      component: loginandregister
    },
    {
      path: '/register',
      component: loginandregister
    },
    {
      path: '/aboutlifevc',
      component: aboutlifevc
    }
  ]
})
