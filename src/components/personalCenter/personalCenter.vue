<template>
  <div>
    <div id="personalCenter" v-if="centerShow">
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
            <router-link to="/personalCenter/myAct" class="rel forward infoWwrapper g3 f30 myactivity" tag="li">
              我的活动:
              <span class="r dot" v-show="dots">1</span>
            </router-link>
            <router-link to="/personalCenter/myShare" class="rel forward infoWwrapper g3 f30 myshare" tag="li">
              我的分享:
            </router-link>
            <router-link to="/personalCenter/myCollected" class="rel forward infoWwrapper g3 f30 mycollect" tag="li">
              我的收藏:
            </router-link>
            <router-link to="/personalCenter/feedback" class="rel forward infoWwrapper g3 f30 feedback" tag="li">
              意见反馈:
            </router-link>
          </ul>
        </div>
      </section>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import '../../assets/less/personalInfo.less';
  import {mapGetters, mapActions} from 'vuex'

  export default{
    data(){
      return {
        dots: true
      }
    },
    computed: mapGetters([
      'centerShow',
    ]),
    watch: {
      $route(to){
        var path = to.path.substring(1);
        console.log(path)
        if (path == 'personalCenter/myAct'||path == 'personalCenter/myShare'||path == 'personalCenter/feedback'||path == 'personalCenter/myCollected') {
          this.$store.dispatch('hideCenter')
        } else {
          this.$store.dispatch('showCenter')
        }
      }
    }
  }
</script>