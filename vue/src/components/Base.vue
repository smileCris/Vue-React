<template>
  <div class="wrap">
    <div class="left-nav">
        <ul>
          <li @click="change (1, 'Table')" :class="{active: active == 1}">
            <img src="../assets/index/m1-icon.png">
            <p>餐 台</p>
          </li>
          <li @click="change (2, 'Bill')" :class="{active: active == 2}">
            <img src="../assets/index/m2-icon.png">
            <p>账 单</p>
          </li>
          <li @click="change (3, 'Member')" :class="{active: active == 3}">
            <img src="../assets/index/m3-icon.png">
            <p>会 员</p>
          </li>
          <li @click="change (4, 'Menu')" :class="{active: active == 4}">
            <img src="../assets/index/m4-icon.png">
            <p>菜 单</p>
          </li>
          <li @click="change (5, 'Count')" :class="{active: active == 5}">
            <img src="../assets/index/m5-icon.png">
            <p>统 计</p>
          </li>
          <li @click="change (6, 'Setting')" :class="{active: active == 6}">
            <img src="../assets/index/m6-icon.png">
            <p>设 置</p>
          </li>
          <li @click="change (7, 'Admin')" :class="{active: active ==7}">
            <img src="../assets/index/m7-icon.png">
            <p>管理员</p>
          </li>
          <li @click="change (8, 'List')" :class="{active: active ==8}">
            <img src="../assets/index/m8-icon.png">
            <p>打印清单</p>
          </li>
        </ul>
    </div>
    <div class="page-contain">
      <div class="navbar">
        <div class="blank"></div>
        <div class="left">
          <img src="../assets/index/icon-shop.png">
          <p class="large">鱼忘七秒</p><span></span>
          <div class="column">
            <p class="p1">鱼忘【Admin】</p>
            <p class="p2">欢迎您登陆航家.点餐商户后台</p>
          </div>
        </div>
        <div class="middle"></div>
        <div class="right">
          <input id="checkbox" type="checkbox">
          <label for="checkbox">
            <img src="../assets/index/login.png">
          </label>
          <ul>
            <a @click="change (9, 'Alertpwd')"><li>修改密码</li></a>
            <a href="login"><li>登出</li></a>
          </ul>
        </div>
      </div>
      <div class="content-wrapper">
        <Table :is="currentTab" keep-alive></Table>
      </div>
    </div>
  </div>
</template>

<script>
import Admin from './Admin'
import Bill from './Bill'
import Count from './Count'
import Member from './Member'
import Menu from './Menu'
import Setting from './Setting'
import Table from './Table'
import List from './List'
import Alertpwd from './Alertpwd'
export default {
  name: 'Base',
  data () {
    return {
      active: 1,
      currentTab: 'Table'
    }
  },
  components: {
    Admin,
    Bill,
    Count,
    Member,
    Menu,
    Setting,
    Table,
    List,
    Alertpwd
  },
  methods: {
    change (act, view) {
      console.log(act, view)
      this.active = act
      this.currentTab = view
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.wrap{
  display: flex;
  flex-direction: row;
  background: #f2f2f2;
  margin-bottom: 20px;
}
.wrap .left-nav{
  flex: 1;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  background-color: #262835;
}
.wrap .left-nav ul{
  margin-top: 80px;
  margin-bottom: 80px;
  background-color: #2d2f3c;
}
.wrap .left-nav ul li{
  min-height: 65px;
  color: #fff;
  list-style: none;
  padding-top: 15px;
  text-align: center;
  font-size: 13px;
  border-bottom: 1px solid #343643;
}
.wrap .left-nav ul li:last-child{
  border-bottom: none;
}
.wrap .left-nav ul li:hover{
  background-color: #262835;
}
.active{
  background-color: #1c1f28;
  border-left: 3px solid #fb6834;
}
.wrap .page-contain{
  flex: 16;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
.wrap .page-contain .navbar{
  height: 45px;
  line-height: 45px;
  flex: 1;
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow:4px 4px 6px #e0e0e0;
}
.wrap .page-contain .navbar .blank {
  width: 10px;
}
.wrap .page-contain .navbar .left{
  flex: 4 1;
  min-width: 272px;
  display: flex;
  line-height: 45px;
}
.wrap .page-contain .navbar .left img{
  height: 80%;
  margin: auto 5px auto 0;
  max-width: 36px;
  flex: 1;
}
.wrap .page-contain .navbar .left .large{
  font-size: 0.8em;
  min-width: 50px;
}
.wrap .page-contain .navbar .left span,.wrap .page-contain .navbar .right .span{
  width: 1px;
  height: 70%;
  background-color: #eee;
  margin: auto 10px;
}
.wrap .page-contain .navbar .left .column{
  width: 160px;
}
.wrap .page-contain .navbar .left .column .p1{
  margin: 0;
  line-height: 20px;
  font-size: 0.2em;
}
.wrap .page-contain .navbar .left .column .p2{
  margin: 0;
  line-height: 20px;
  font-size: 0.2em;
  color: #555;
}
.wrap .page-contain .navbar .middle{
  flex: 7 3;
}
.wrap .page-contain .navbar .right{
  display: flex;
  flex-direction: column;
  flex: 3 1;
  min-width: 260px;
  color: #555;
  font-size: 0.8em;
}
/* .wrap .page-contain .navbar .right img{
  padding: 5px;
  margin: 5px 5px 10px 0;
} */
/* checkbox下拉 */
#checkbox {
  display: none;
}
#checkbox:checked ~ ul {
  display: inline;
}
.right ul {
  margin-top: -10px;
  margin-left: 55px;
  width: 100px;
  border: 1px solid #eee;
  display: none;
}
.right ul li {
  list-style-type: none;
  padding: 5px;
  line-height: 20px;
  background-color: #fff;
}
.right label, .right label img {
  height: 45px;
  margin: 0;
  padding: 0;
}
.wrap .page-contain .content-wrapper{
  margin: 75px 15px 15px 15px;
  flex: 18;
  box-shadow: 0 0 3px #eee;
  background-color: #fafafa;
}
</style>
