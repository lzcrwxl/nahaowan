<template>
  <div id="order">
    <header>
      <h3 class="b">【自由行】春节特惠！【上海迪士尼乐园一日单门 票！】一票通玩快速入园、当天可多次入园。</h3>
    </header>
    <section class="mt20">
      <div class="signUpInfo">
        <h6 class="actTitle">报名信息</h6>
        <ul class="mt30 attend f28">
          <li>
            <h5 class="dib tj g9 infoItem">姓&emsp;&emsp;名&nbsp;:</h5>
            <input type="text" placeholder="请与证件一致" class="ml20">
          </li>
          <li>
            <h5 class="dib tj g9 infoItem">昵&emsp;&emsp;称&nbsp;:</h5>
            <input type="text" placeholder="非必选项" class="ml20">
          </li>
          <li>
            <h5 class="dib tj g9 infoItem">身份证号：</h5>
            <input type="text" placeholder="用于购买保险" class="ml20">
          </li>
          <li>
            <h5 class="dib tj g9 infoItem">手&ensp;机&ensp;号：</h5>
            <input type="text" placeholder="用于活动联系" class="ml20">
          </li>
          <li class="arrow rel">
            <a href="#" class="">
              <h5 class="dib tj g9 infoItem">上车地点：</h5>
              <span class="ml20 gd9" href="#">请选择</span>
            </a>
          </li>
        </ul>
        <div class="saveInfo rel">
          <span class="f28 g3">保存为常用信息</span>
          <div class="switchLabel abs">
            <span class="switchButton"></span>
          </div>
        </div>
      </div>
      <div class="addPeople">
        <button class="addBtn">添加玩家</button>
      </div>
      <div class="signUpInfo pb30 fix">
        <h6 class="actTitle">
          优惠信息
          <a href="#" class="rules">特惠规则</a>
        </h6>
        <ul class="mt60 discount f0">
          <li class="f28"><b class="g3">【 新人红包 】</b>首次参加活动立减10元。</li>
          <li class="mt30 f28"><b class="g3">【 新人红包 】</b>首次参加活动立减10元。</li>
          <li class="mt30 f28"><b class="g3">【 新人红包 】</b>首次参加活动立减10元。</li>
        </ul>
      </div>
      <div class="pl20 pt30 pr30 pb30">
        <p class="f24 g3 lh30">身份信息仅用来购买户外专业保险，萌驴户外旅行承诺不会泄露玩家身份信息或用于其他用途。 </p>
        <p class="mt30 f24 g3"> 继续预定代表你已阅读并同意 <a href="#" class="g2c">《预定须知》</a></p>
      </div>
    </section>
    <footer>
      <ul class="btnItem">
        <li class="btnLf">
          <div class="f24">实际付款: <span class="g2c f48"><i class="f24">￥</i>340</span> </div>
          <div class="f20 mt20">可获积分：&nbsp;340</div>
        </li>
        <li class="btnRt">
          <router-link to="/payment">
            提交订单
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
  @import '../../assets/less/order.less';
</style>
<script>
  export default{

  }
</script>