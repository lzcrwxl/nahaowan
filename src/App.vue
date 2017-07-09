<template>
  <div id="app">
    <BanHeader v-if="headerShow"></BanHeader>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FooterView v-show="footerShow"></FooterView>
  </div>
</template>
<script>
  import './assets/less/index.less'
  import BanHeader from './components/Head.vue'
  import SectionView from './components/Section/Section.vue'
  import FooterView from './components/footer/FooterView.vue'
  import {mapGetters, mapActions} from 'vuex'

  const headPath={

  }
  export default {
    computed: mapGetters([
      'headerShow',
      'footerShow'
    ]),
    mounted(){
      var path=this.$route.path.substring(1);
      this.headerChange(path);
      this.footerChange(path);
    },
    watch: {
      $route(to){
        var path=to.path.substring(1);
        this.headerChange(path);
        this.footerChange(path);
      }
    },
    methods:{
      headerChange(path){
        if (path== 'personalCenter' || path == 'onSale/detail'||path == 'personalCenter/myAct'||path == 'personalCenter/myShare'||path == 'personalCenter/feedback'||path == 'personalCenter/myCollected'||path == 'personalCenter/editInfo'||path == 'order'||path == 'payment'||path == 'payment/paySucc'||path == 'payment/payFail'||path=='personalCenter/editInfo/phone'||path == 'personalCenter/editInfo/nickname') {
          this.$store.dispatch('hideHeader')
        } else {
          this.$store.dispatch('showHeader')
        }
      },
      footerChange(path){
        if (path == 'onSale/detail'||path == 'personalCenter/myAct'||path == 'personalCenter/myShare'||path == 'personalCenter/feedback'||path == 'personalCenter/myCollected'||path == 'personalCenter/editInfo'||path == 'order'||path == 'payment'||path == 'payment/paySucc'||path == 'payment/payFail'||path=='personalCenter/editInfo/phone'||path == 'personalCenter/editInfo/nickname') {
          this.$store.dispatch('hideFooter')
        } else {
          this.$store.dispatch('showFooter')
        }
      }
    },
    components: {
      BanHeader,
      SectionView,
      FooterView
    }
  }
</script>
