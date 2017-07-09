<template>
  <div class="phoneBox">
    <div class="phoneBar">
      当前手机号：<span>18273123212</span>
    </div>
    <ul class="editPhone">
      <li class="f30">
        <div class="dib countryCode">
          <span>+86</span>
        </div><input type="text" placeholder="请输入手机号" class="phoneNum">
      </li>
      <li class="f30 tj">
        <input type="text" placeholder="请输入6位验证码">
        <a href="#" class="g2c p10">获取验证码</a>
      </li>
    </ul>
  </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
  @import '../../assets/less/phone.less';
</style>
<script>
  export default{}
</script>