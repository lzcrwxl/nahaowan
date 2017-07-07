<template>
  <div id="personalCenter">
    <header>
      <div class="profile">
        <img src="../../assets/images/profile.png" alt="" class="vm">
        <span class="ml40 g3 f36 vm">桂花大哥</span>
        <span class="f24 g9 r signIn">连续签到<i>&nbsp;8&nbsp;</i>天</span>
      </div>
      <ul class="credits">
        <li class="f30 g3 pl30">
          积分
          <span class="g2c ml100">1000</span>
        </li>
        <li class="exchange rel">
          <button class="btnSm">积分兑换</button>
        </li>
      </ul>
    </header>
    <section class="mt30">
      <div class="showBar fix">
        <ul class="infoBox">
          <li class="rel forward">
            <a href="#" class="infoWrapper g3 f30 myactivity">
              我的活动:
            </a>
            <span class="r dot" v-show="dots">1</span>
          </li>
         <!-- <li class="rel forward">
            <a href="#" class="infoWwrapper g3 f30 myshare">
              我的分享:
            </a>
          </li>
          <li class="rel forward">
            <a href="#" class="infoWwrapper g3 f30 mycollect">
              我的收藏:
            </a>
          </li>
          <li class="rel forward">
            <a href="#" class="infoWwrapper g3 f30 feedback">
              意见反馈:
            </a>
          </li>-->
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import '../../assets/less/personalInfo.less';

  export default{
    data(){
      return{
        dots:true
      }
    }
  }
</script>