<template>
  <header class="rel" v-if="showBanner">
    <div class="background">
      <img src="../assets/images/bg.png" alt="">
    </div>
    <div class="location">
      <span>上海</span>
      <div class="searchBox rel">
        <!--<input type="text" class="search">-->
        <em class="f28 wh">搜索</em>
      </div>
    </div>
  </header>
</template>

<script>
  export default{
    data(){
      return{
        showBanner:true
      }
    }
  }
</script>