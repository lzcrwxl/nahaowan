<template>
  <section>
    <ul class="navbar" v-show="showNav">
      <router-link class="item" to="/onSale" tag="li">
        特价
      </router-link>
      <router-link class="item" to="/total" tag="li">
        全年活动
      </router-link>
      <router-link class="item" to="/filter" tag="li">
        活动筛选
      </router-link>
    </ul>
    <router-view></router-view>
  </section>
</template>

<script>
  import Bus from '../../bus'
  export default{
    data(){
      return{
        showNav:true
      }
    },
    methods: {

    },
    watch:{

    },
    created(){

    },
    computed(){
      console.log(this.showNav);
      Bus.$on('ok', function (msg) {
        this.showNav=msg;//msg==false
        console.log(this.showNav);//false
      });
    }
  }
</script>