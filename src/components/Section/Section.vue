<template>
  <section>
    <ul class="navbar" v-show="headerShow">
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
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default{
    data(){
      return {
        showNav: true
      }
    },
    computed: mapGetters([
      'headerShow'
    ]),
    methods: {},
    watch: {},
    created(){

    },
  }
</script>