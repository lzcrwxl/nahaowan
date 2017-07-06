<template>
  <footer>
    <ul class="footList">
      <li class="home">
        <router-link to="/home" active-class="active">
          <dl>
            <dt></dt>
            <dd class="f18 g9">首页</dd>
          </dl>
        </router-link>
      </li>
      <li class="my">
        <router-link to="/personalCenter">
          <dl>
            <dt></dt>
            <dd class="f18 g9">我的</dd>
          </dl>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default{

  }
</script>