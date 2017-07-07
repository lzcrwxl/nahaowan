<template>
  <section class="mt20">
    <div class="info showBox">
      <h6 class="actTitle">活动信息</h6>
      <div class="infoBottom">
        <ul>
          <li>
            <h5 class="">活动时间:</h5>
            <div class="msg g3 f28">04/01 - 04/13</div>
          </li>
          <li class="mt40">
            <h5 class="">目的地:</h5>
            <div class="msg g3 f28">安徽宁国吴越古道</div>
          </li>
          <li class="mt40">
            <h5 class="">集合地点:</h5>
            <div class="msg g3 f28">上海体育馆二号扶梯（斜土路、零林路交叉口 处集合）</div>
          </li>
          <li class="mt40">
            <h5 class="">费用构成:</h5>
            <div class="msg g3 f28">促销！！340费用全包！！无自费！！（会员 不参加该促销活动）</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="leader showBox mt20">
      <h6 class="actTitle">活动领队</h6>
      <div>
        <div class="avator">
          <img src="../../assets/images/avator.png" alt="">
          <span class="r f28 g6 mt20">领队</span>
        </div>
      </div>
    </div>
    <div class="leader showBox mt20">
      <h6 class="actTitle">已参加的伙伴 <span>71</span> 人</h6>
      <div>
        <div class="avator rel">
          <img :src="url.imgs" alt="" v-for="(url,index) in avators" :class="{'ml10':(index>0)}">
          <a href="#" class="more"></a>
        </div>
      </div>
    </div>
    <div class="trip mt20">
      <ul class="tripList">
        <li v-for="(item,index) in list" :class="{'trip-active':(selected==index)}"
            :key="item"><a @click.stop.prevent="change(index)">{{item.text}}</a></li>
        <!--<li><a href="#">详细行程</a></li>-->
        <!--<li><a href="#">费用说明</a></li>-->
        <!--<li><a href="#">预订须知</a></li>-->
      </ul>
      <keep-alive>
        <component :is="currentView"></component>
      </keep-alive>
    </div>
    <div class="recommand mt20">
      <h6 class="actTitle">近期活动推荐</h6>
      <ul class="mt30 activities pl20">
        <li>
          <a href="#" class=" g6">
            <span class="introduction ml30">【跟团游】【特卖！夜游/日游上海纯玩一日游！asdasdasdasd</span>
            <span class="pricing"><i>￥360</i>&nbsp;起</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import item0 from './Destination.vue'
  import item1 from './journey.vue'
  import item2 from './fee.vue'
  import item3 from './reserve.vue'
  export default{
    data(){
      return {
        selected: 0,
        currentView: 'item0',
        isActive: true,
        list: [
          {text: '目的地'},
          {text: '详细行程'},
          {text: '费用说明'},
          {text: '预订须知'},
        ]
      }
    },
    methods: {
      change(index){
        this.selected = index;
        this.currentView = 'item' + index;
      }
    },
    props: ['avators'],
    components: {
      item0, item1, item2, item3
    }
  }
</script>
