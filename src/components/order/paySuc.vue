<template>
  <div class="payment ovh fix">
    <div class="iconsucc ovh iconBase"></div>
    <p class=" f32 tc">报名成功，可以在我的订单里查看!</p>
    <div class="btnBox">
      <router-link to="/personalCenter/myAct" class="btncfm check">查看订单</router-link>
      <router-link to="/home" class="btncfm return ml50">返回首页</router-link>
    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
  @import '../../assets/less/success.less';
</style>
<script>
  export default{}
</script>