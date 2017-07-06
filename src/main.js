import Vue from 'vue'
import App from './App.vue'

import 'babel-polyfill'
import './assets/css/reset.css'
import './assets/css/base.css'
import './assets/js/jquery.min'
import './assets/js/swiper-3.4.1.jquery.min'
import router from './route.config'
import './assets/js/common'



new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')


var bus=new Vue();
