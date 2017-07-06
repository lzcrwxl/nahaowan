/**
 * Created by hasee on 2017/7/1.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from './components/Section/ProductList.vue'
import ProductList02 from './components/Section/ProductList02.vue'
import ProductList03 from './components/Section/ProductList03.vue'
import Detail from './components/detail/detail.vue';
import Detail02 from './components/detail/detail02.vue';
import Destination from './components/detail/Destination.vue';
import SectionView from './components/Section/Section.vue'
import PersonalCenter from './components/personalCenter/personalCenter.vue'

Vue.use(VueRouter)

console.log(PersonalCenter)
const router = new VueRouter({
      mode: 'history',
      base: __dirname,
      routes: [
        {
          path: '/onSale', component: ProductList,
          children: [
            // { path: '', component: Detail },
            {
              path: 'detail',
              component: Detail,
              children:[
                {
                  path:'destination',
                  component:Destination
                }
              ]
            },
            {
              path: 'detail02',
              component: Detail02
            }
          ]
        },
        {path: '/total', component: ProductList02},
        {path: '/filter', component: ProductList03},
        {
          path: '/',
          redirect: '/onSale'
        },
        {
          path: '*',
          redirect: '/onSale'
        },
        {
          path:'/home',component:SectionView
        },
        {
          path:'/personalCenter',component:PersonalCenter
        }
      ]
    }
)

export default router