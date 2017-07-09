/**
 * Created by hasee on 2017/7/1.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from './components/Section/ProductList.vue'
import ProductList02 from './components/Section/ProductList02.vue'
import ProductList03 from './components/Section/ProductList03.vue'
import Detail from './components/detail/detail.vue';
import Destination from './components/detail/Destination.vue';
import SectionView from './components/Section/Section.vue'
import PersonalCenter from './components/personalCenter/personalCenter.vue'
import myCol from './components/personalCenter/myCollected.vue'
import myShare from './components/personalCenter/myShare.vue'
import feedback from './components/personalCenter/feedback.vue'
import myAct from './components/personalCenter/myAct.vue'
import editInfo from './components/personalCenter/editInfo.vue'
import Order from './components/order/order.vue'
import Payment from './components/order/payment.vue'
import paySucc from './components/order/paySuc.vue'
import payFail from './components/order/payFail.vue'
import Phone from './components/personalCenter/phone.vue'
import Nickname from './components/personalCenter/nickname.vue'

Vue.use(VueRouter)

console.log(PersonalCenter)
const router = new VueRouter({
      mode: 'history',
      base: __dirname,
      scrollBehavior:()=>({y:0}),
      routes: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '*',
          redirect: '/home'
        },
        {
          path: '/home', component: SectionView,
          children: [
            {
              path: '/onSale', component: ProductList,
              children: [
                {
                  path: 'detail',
                  component: Detail,
                  children: [
                    {
                      path: 'destination',
                      component: Destination
                    }
                  ]
                },
              ]
            },
            {path: '/total', component: ProductList02},
            {path: '/filter', component: ProductList03},
          ]
        },
        {
          path: '/personalCenter', component: PersonalCenter,
          children:[
            {
              path: 'myAct',
              component: myAct,
            },
            {
              path: 'myCollected',
              component: myCol,
            },
            {
              path: 'myShare',
              component: myShare,
            },
            {
              path: 'feedback',
              component: feedback,
            },
            {
              path: 'editInfo',
              component: editInfo,
              children:[
                {
                  path: 'phone',
                  component: Phone,
                },
                {
                  path: 'nickname',
                  component: Nickname,
                },
              ]
            }
          ]
        },
        {
          path: '/order',
          component: Order
        },
        {
          path: '/payment',
          component: Payment,
          children:[
            {path:'paySucc',component:paySucc},
            {path:'payFail',component:payFail},
          ]
        },
      ]
    }
)

export default router