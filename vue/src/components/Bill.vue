<template>
<div class="main">
  <input id="select" type="text">
  <table>
    <thead>
        <tr>
        <th>订单号</th>
        <th>用餐时间</th>
        <th>用餐人数</th>
        <th>用餐桌号</th>
        <th>操作人</th>
        <th>点餐详情</th>
        <th>点参价格</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>201707191212</td>
            <td>2017/07/19 12:12:34</td>
            <td>4</td>
            <td>1号桌</td>
            <td>鱼忘管理员</td>
            <td>4项</td>
            <td>321元</td>
        </tr>
        <tr>
            <td>201707191212</td>
            <td>2017/07/19 12:12:34</td>
            <td>4</td>
            <td>1号桌</td>
            <td>鱼忘管理员</td>
            <td>4项</td>
            <td>321元</td>
        </tr>
        <tr>
            <td>201707191212</td>
            <td>2017/07/19 12:12:34</td>
            <td>4</td>
            <td>1号桌</td>
            <td>鱼忘管理员</td>
            <td>4项</td>
            <td>321元</td>
        </tr>
        <tr>
            <td>201707191212</td>
            <td>2017/07/19 12:12:34</td>
            <td>4</td>
            <td>1号桌</td>
            <td>鱼忘管理员</td>
            <td>4项</td>
            <td>321元</td>
        </tr>
    </tbody>
  </table>
</div>
</template>
<script>
export default {
  name: 'Bill'
}
</script>
<style scoped>
.main {
    margin: 30px 20px;
    padding: 20px;
    color: #555;
}
table {
    width: 70%;
    min-height: 25px;
    line-height: 25px;
    text-align: center;
    margin-top: 20px;
    border-collapse: collapse;
    font-size: 15px;
}
tr th {
    background-color: #eee;
    border: 1px solid #e6e6e6;
}
tr th:first-child {
    border-left: none;
}
tr th:last-child {
    border-right: none;
}
table tr:nth-of-type(even) {
    background-color: #eee;
}
</style>
