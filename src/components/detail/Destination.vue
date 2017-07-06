<template>
  <div class="showBox" v-if="show01">
    <p class="f28 lh45 tj">上海迪士尼乐园，又称上海迪斯尼乐园，是中国第二个、亚洲第三个，世界第六个迪士尼主题公园。作为中国第二座迪士尼主题乐园，上海迪士</p>
    <div class="descBg">
      <img src="../../assets/images/detail/show.png" alt="">
    </div>
    <p class="f28 lh45 tj mt30">迪士尼乐拍通服务是上海迪士尼乐园内独有的美妙影像服务，我们的迪士尼乐拍通摄影师分布在乐园内的每一个角落，可以为您捕捉乐园的每一</p>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        'show01': true,
      }
    }
  }
</script>