<template>
  <header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="value in banner">
          <img :src="value.imgs" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="showBox">
      <h4 class="b">【自由行】春节特惠！【上海迪士尼乐园一日单门 票！】一票通玩快速入园、当天可多次入园。</h4>
      <div class="priceBox">
        <span class="origin"><i>￥</i>320</span>
        <span class="market ml30">市场价：<i>￥560</i></span>
      </div>
      <div class="lh62">
        <span class="tipItem" v-for="(tip,index) in tips" :class="{'ml30':!(index%3==0)}">{{tip.text}}</span>
      </div>
    </div>
  </header>
</template>

<script>
  import '../../assets/css/swiper-3.4.1.min.css'
  import '../../assets/js/jquery.min'
  import Swiper from '../../assets/js/swiper-3.4.1.jquery.min'
  export default{
    data(){
      return {}
    },
    created(){
      this.lunbo()
    },
    methods: {
      lunbo(){
        this.$nextTick(()=>{
          console.log(111);
          var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            autoplay: 1000
          })
        })
      },
    },
    props: ['banner', 'tips']
  }
</script>