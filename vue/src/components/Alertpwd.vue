<template>
<div class="main">
  <form>
    <label>用户名</label>
    <input type="text"><br>
    <label>密&nbsp;&nbsp;&nbsp;码</label>
    <input type="password"><br>
    <input type="button" value="保存">
  </form>
</div>
</template>
<script>
export default {
  name: 'Alertpwd'
}
</script>
<style scoped>
.main {
    padding: 20px;
    color: #555;
}
form {
    margin: 30px 20px;
}
</style>
