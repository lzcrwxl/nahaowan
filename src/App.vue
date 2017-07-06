<template>
  <div id="app">
    <BanHeader></BanHeader>
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>
<script>
  import './assets/less/index.less'
  import BanHeader from './components/Head.vue'
  import SectionView from './components/Section/Section.vue'
  import FooterView from './components/footer/FooterView.vue'

  export default {
    components:{
      BanHeader,
      SectionView,
      FooterView
    }
  }
</script>
