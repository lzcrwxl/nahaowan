<template>
  <div id="payment">
    <div id="routerSeen" v-if="paymentShow">
      <header class="showBox ovh">
        <h3 class="f32 b">【自由行】春节特惠！【上海迪士尼乐园一日单门 票！】一票通玩快速入园、当天可多次入园。</h3>
        <ul class="mt40 mb30">
          <li class="f28">
            <h5 class="dib g9">订单编号：</h5>
            <span class="g3">91072097127917258190285</span>
          </li>
          <li class="f28 mt40">
            <h5 class="dib g9">订单总额：</h5>
            <span class="g3">420.00元</span>
          </li>
          <li class="f28 mt40">
            <h5 class="dib g9">实际付款 : </h5>
            <span class="g2c">&nbsp;340.00元</span>
          </li>
        </ul>
      </header>
      <section>
        <div class="payway mt100 f0">
          <router-link to="/payment/paySucc" class="payBtn wechat"><i></i><span class="vt ml20">微信支付</span>
          </router-link>
          <router-link to="/payment/payFail" class="payBtn alipay"><i></i><span class="vt ml20">支付宝支付</span>
          </router-link>
        </div>
      </section>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
  @import '../../assets/less/payment.less';
</style>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default{
    data(){
      return {
        showPayment: true
      }
    },
    computed: mapGetters(['paymentShow']),
    watch:{
      $route(to){
        var path = to.path.substring(1);
        console.log(path)
        if (path == 'payment/paySucc' || path == 'payment/payFail') {
          this.$store.dispatch('hidePayment')
        } else {
          this.$store.dispatch('showPayment')
        }
      }
    }
  }
</script>