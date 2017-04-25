import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import productInfo from '@/views/productInfo'
import productInfo1 from '@/views/productInfo1'
import productInfo2 from '@/views/productInfo2'
import buyService from '@/views/buyService'
import bugInfo from '@/views/bugInfo'
import about from '@/views/about'
import jurisdiction from '@/views/jurisdiction'
import myJurisdiction from '@/views/myJurisdiction'
import myCenterList from '@/views/myCenterList'
import orderList from '@/views/orderList'
import orderInfo from '@/views/orderInfo'
import myInfo from '@/views/myInfo'
import orderNull from '@/views/orderNull'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/productInfo',
      name: 'productInfo',
      component: productInfo
    },
    {
      path: '/productInfo1',
      name: 'productInfo1',
      component: productInfo1
    },
    {
      path: '/productInfo2',
      name: 'productInfo2',
      component: productInfo2
    },
    {
      path: '/buyService',
      name: 'buyService',
      component: buyService
    },
    {
      path: '/bugInfo',
      name: 'bugInfo',
      component: bugInfo
    },
    {
      path: '/aboutUs',
      name: 'about',
      component: about
    },
    {
      path: '/jurisdiction',
      name: 'jurisdiction',
      component: jurisdiction
    },
    {
      path: '/myJurisdiction',
      name: 'myJurisdiction',
      component: myJurisdiction
    },
    {
      path: '/personalCenter',
      name: 'myCenterList',
      component: myCenterList
    },
    {
      path: '/orderManage',
      name: 'orderList',
      component: orderList
    },
    {
      path: '/orderInfo',
      name: 'orderInfo',
      component: orderInfo
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    },
    {
      path: '/orderNull',
      name: 'orderNull',
      component: orderNull
    }

  ]
})
