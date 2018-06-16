<template>
  <div class="wrap">
      <img src="../assets/login/login-icon.png">
      <form></form>
  </div>
</template>
<style scoped>
.wrap{
    display: flex;
    flex-direction: column;
    background-image: url("../assets/login/login-bg.png");
    background-size: cover;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
}
.wrap img{
    margin: 8% auto 0 auto;
    width: 8%;
}
.wrap form{
    margin: 2% auto;
    height: 40%;
    min-height: 300px;
    min-width: 300px;
    width: 25%;
    background-color: #fff;
    border-radius: 5px;
}
</style>
<script>
export default {
  name: 'login'
}
</script>
