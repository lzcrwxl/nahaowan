<template>
  <div id="myActivities">
    <header>
      <ul class="status">
        <li><a href="#" class="f28">待付款</a></li>
        <li><a href="#" class="f28 active rel">已付款</a></li>
      </ul>
    </header>
    <section>
      <div class="payed">
        <div class="activityBox">
          <div class="">
            <img src="img/scenery.png" alt="">
            <div class="dib showRt">
              <h4 class="f30 g3 b">吴越古道（特价）清明大放 价！古道悠长。</h4>
              <div class="time f26 g9">
                <span class="g2c">5.12</span>&nbsp;&nbsp;12:00
              </div>
              <div class="price mt20 rel">
                <span class=" f24 g9">活动价格</span>
                <span class="f36 priceTag">￥500</span>
              </div>
            </div>
          </div>
          <div class="orderInfo f26">
            <span class="g3 vb">订单编号：123456789</span>
            <span class="g9 r mr30">实际付款：<i class="g2c">￥500</i></span>
          </div>
        </div>
        <div class="activityBox">
          <div class="">
            <img src="img/scenery.png" alt="">
            <div class="dib showRt">
              <h4 class="f30 g3 b">吴越古道（特价）清明大放 价！古道悠长。</h4>
              <div class="time f26 g9">
                <span class="g2c">5.12</span>&nbsp;&nbsp;12:00
              </div>
              <div class="price mt20 rel">
                <span class=" f24 g9">活动价格</span>
                <span class="f36 priceTag">￥500</span>
              </div>
            </div>
          </div>
          <div class="orderInfo f26">
            <span class="g3 vb">订单编号：123456789</span>
            <span class="g9 r mr30">实际付款：<i class="g2c">￥500</i></span>
          </div>
        </div>
      </div>
      <div class="readyPay dn">
        <div class="activityBox">
          <div class="">
            <img src="img/scenery.png" alt="">
            <div class="dib showRt">
              <h4 class="f30 g3 b">吴越古道（特价）清明大放 价！古道悠长。</h4>
              <div class="time f26 g9">
                <span class="g2c">5.12</span>&nbsp;&nbsp;12:00
              </div>
              <div class="price mt20 rel">
                <span class=" f24 g9">活动价格</span>
                <span class="f36 priceTag">￥500</span>
              </div>
            </div>
          </div>
          <div class="orderInfo f26">
            <span class="g3 vb">订单编号：123456789</span>
            <div class="r btnWrapper f24 mt20 mr30">
              <button class="cancelBtn">取消报名</button>
              <button class="loadBtn">待付款</button>
            </div>
          </div>
        </div>
      </div>
      <div class="noorder fix ovh dn">
        <p class="f30">您还没有相关订单</p>
      </div>
    </section>
    <div class="cancelOrder dn">
      <div class="btnBar">
        <a href="#" class="g9">取消</a>
        <a href="#" class="g3 r">确定</a>
      </div>
      <ul>
        <li><a href="#" class="f28 g9 mt40">行程有变，不能参加了</a></li>
        <li><a href="#" class="f32 g6 mt20 mb20">实际情况与活动信息不符</a></li>
        <li><a href="#" class="f36 select">主办方取消了活动</a></li>
        <li><a href="#" class="f32 g6 mt20 mb80">其他原因</a></li>
      </ul>
    </div>
    <div class="module dn"></div>
  </div>
</template>
<style>
</style>
<script>
  import '../../assets/less/myActivities.less'
  export default{

  }
</script>