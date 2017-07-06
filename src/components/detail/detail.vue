<template>
  <div>
    <Introduction :banner="lbt" :tips="tips"></Introduction>
    <Info :avators="avators"></Info>
    <footer>
      <a href="#" class="service">
        <dl class="">
          <dt></dt>
          <dd>客服</dd>
        </dl>
      </a>
      <a href="#" class="collect">
        <dl class="">
          <dt></dt>
          <dd>收藏</dd>
        </dl>
      </a>
      <a href="#" class="signUp">
        我要报名
      </a>
    </footer>
    <a href="JavaScript:void (0)" class="back" onclick="window.history.go(-1)"></a>
  </div>
</template>

<style>
</style>
<!--返回按钮-->
<script>
  import Vue from 'vue'
  import '../../assets/less/detail.less'
  import '../../assets/css/swiper-3.4.1.min.css'
  import '../../assets/js/jquery.min'
  import Swiper from '../../assets/js/swiper-3.4.1.jquery.min'
  import Introduction from './introduction.vue'
  import Info from './Info.vue'
  export default{
    data(){
      return {
        lbt: [
          {
            'imgs': require('../../assets/images/detail/banner.png')
          },
          {
            'imgs': require('../../assets/images/detail/banner.png')
          },
          {
            'imgs': require('../../assets/images/detail/banner.png')
          },
        ],
        tips: [
          {text: '新人线路难度较低'},
          {text: '新人线路'},
          {text: '新人线路难度较低'},
          {text: '新人线路'},
          {text: '新人线路'},
          {text: '新人线路难度较低'},
        ],
        avators:[
          {
            'imgs':require('../../assets/images/avator.png')
          },
          {
            'imgs':require('../../assets/images/avator.png')
          },
          {
            'imgs':require('../../assets/images/avator.png')
          },
          {
            'imgs':require('../../assets/images/avator.png')
          },
          {
            'imgs':require('../../assets/images/avator.png')
          },
          {
            'imgs':require('../../assets/images/avator.png')
          },
          {
            'imgs':require('../../assets/images/avator.png')
          },
        ]
      }
    },
    mounted(){
      this.lunbo()
    },
    computed: {},
    methods: {
      lunbo(){
        $(function () {
          var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            autoplay: 5000
          })
        })
      },

    },
    components: {
      Introduction,Info
    }
  }
</script>
</html>