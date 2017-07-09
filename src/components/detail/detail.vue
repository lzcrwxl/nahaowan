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
      <a href="javascript:void (0)" :class="{collected:isCollected}" @click.prevent="collected" class="uncollected">
        <dl class="">
          <dt></dt>
          <dd>收藏</dd>
        </dl>
      </a>
      <router-link to="/order" class="signUp">
        我要报名
      </router-link>
    </footer>
    <a href="JavaScript:void (0)" class="back" onclick="window.history.go(-1)"></a>
  </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>

</style>
<!--返回按钮-->
<script>
  import '../../assets/less/detail.less';
  import Vue from 'vue'
  import Introduction from './introduction.vue'
  import Info from './Info.vue'

  export default{
    data(){
      return {
        lbtData: {},
        tipsData:{},
        avators:{},
        isCollected:false
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
      },
      collected(){
        this.isCollected=!this.isCollected;
      }
    },
    components: {
      Introduction,Info
    }
  }
</script>
</html>