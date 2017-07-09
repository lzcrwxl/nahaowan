<template>
  <div id="editInfo">
    <div v-show="editShow">
      <header>
        <a class="showBar mt40 editProfile fix forward rel pr30">
          <span class="f30 g3">我的头像</span>
          <div class="profile">
            <img src="img/avator.png" alt="">
          </div>
        </a>
      </header>
      <section>
        <div class="showBar mt40 fix">
          <ul class="infoBox">
              <router-link to="/personalCenter/editInfo/nickname" class="g3 f30 rel forward" tag="li">
                昵称:
                <span class="r pr70 g9">桂花大哥</span>
              </router-link>
            <li class="rel forward">
              <a href="#" class=" g3 f30">
                性别:
                <span class="r pr70 g9">男</span>
              </a>
            </li>
            <li class="rel forward">
              <a href="#" class=" g3 f30">
                所在地:
                <span class="r pr70 g9">上海崇明</span>
              </a>
            </li>
          </ul>

        </div>
        <div class="showBar mt40 fix">
          <ul class="infoBox">
            <router-link to="/personalCenter/editInfo/phone" class=" g3 f30 rel forward" tag="li">
              手机号:
              <span class="r pr70 g9">15232039485</span>
            </router-link>
            <li class="rel forward">
              <a href="#" class=" g3 f30">
                真实姓名:
                <span class="r pr70 g9">龙哥</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div class="module dn"></div>
      <div class="editBox">
        <ul class="editList">
          <li class="g3">男</li>
          <li class="gc8">女</li>
        </ul>
        <button class="completed mt10">完成</button>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
  @import '../../assets/less/edit.less';
</style>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default{
    computed: mapGetters(['editShow']),
    watch: {
      $route(to){
        var path = to.path.substring(1);
        console.log(path)
        if (path == 'personalCenter/editInfo/phone'||path == 'personalCenter/editInfo/nickname') {
          this.$store.dispatch('hideEdit')
        } else {
          this.$store.dispatch('showEdit')
        }
      }
    }
  }
</script>