<template>
  <footer>
    <ul class="footList">
        <router-link to="/home" @click.native="homeSel" :class="{homeUnsel:notHome}" class="home" tag="li">
          <dl>
            <dt></dt>
            <dd class="f18 g9">首页</dd>
          </dl>
        </router-link>
        <router-link to="/personalCenter" class="my" tag="li" :class="{mySel:isMysel}" @click.native="mySel">
          <dl>
            <dt></dt>
            <dd class="f18 g9">我的</dd>
          </dl>
        </router-link>
    </ul>
  </footer>
</template>

<script>
  export default{
    data(){
      return{
        notHome:false,
        isMysel:false
      }
    },
    methods:{
      homeSel:function () {
        this.notHome=false;
        this.isMysel=false;
      },
      mySel:function () {
        this.isMysel=true;
        this.notHome=true;
      }
    }
  }
</script>