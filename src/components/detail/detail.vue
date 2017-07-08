<template>
  <div>
    <Introduction :banner="lbtData" :tips="tipsData"></Introduction>
    <Info :avators="avators"></Info>
    <footer>
      <a href="#" class="service">
        <dl class="">
          <dt></dt>
          <dd>客服</dd>
        </dl>
      </a>
      <a href="#" class="collect">
        <dl class="">
          <dt></dt>
          <dd>收藏</dd>
        </dl>
      </a>
      <a href="#" class="signUp">
        我要报名
      </a>
    </footer>
    <a href="JavaScript:void (0)" class="back" onclick="window.history.go(-1)"></a>
  </div>
</template>

<style>
</style>
<!--返回按钮-->
<script>
  import Vue from 'vue'
  import '../../assets/less/detail.less';
  import Introduction from './introduction.vue'
  import Info from './Info.vue'

  export default{
    data(){
      return {
        lbtData: {},
        tipsData:{},
        avators:{}
      }
    },
    mounted(){
      this.fetchData();
    },
    watch:{
      $route(to){
        var reg=/detail/;
        console.log(to.path);
        if (reg.test(to.path)){
          console.log(reg);
        }
      }
    },
    computed: {},
    methods:{
      fetchData(){
        let _this=this;
        this.$http.get('/src/data/detail.json').then(function (res) {
          _this.tipsData=res.data.tips;
          _this.lbtData=res.data.banner;
          _this.avators=res.data.avators;
        }).catch((err)=>console.log(err))
      }
    },
    components: {
      Introduction,Info
    }
  }
</script>
</html>