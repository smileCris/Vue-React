<template>
<div class="main">
  <table>
    <thead>
        <tr>
        <th>打印时间</th>
        <th>打印任务名称</th>
        <th>状态</th>
        <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2017/07/19 12:12:34</td>
            <td>A2桌前台确认小票-2</td>
            <td>打印成功</td>
            <td><input type="button" value="重新打印"></td>
        </tr>
        <tr>
            <td>2017/07/19 12:12:34</td>
            <td>A2桌前台确认小票-2</td>
            <td>打印成功</td>
            <td><input type="button" value="重新打印"></td>
        </tr>
        <tr>
            <td>2017/07/19 12:12:34</td>
            <td>A2桌前台确认小票-2</td>
            <td>打印成功</td>
            <td><input type="button" value="重新打印"></td>
        </tr>
        <tr>
            <td>2017/07/19 12:12:34</td>
            <td>A2桌前台确认小票-2</td>
            <td>打印成功</td>
            <td><input type="button" value="重新打印"></td>
        </tr>
    </tbody>
  </table>
  <div class="page"><input type="button" value="下一页>"><input type="button" value="<上一页"></div>
</div>
</template>
<script>
export default {
  name: 'List'
}
</script>
<style scoped>
.main {
    margin: 30px 20px;
    padding: 20px;
    color: #555;
}
table {
    width: 50%;
    min-height: 25px;
    line-height: 25px;
    text-align: center;
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
table input {
    background-color: #3ca53c;
    border: none;
    color: #fff;
    line-height: 20px;
    width: 100px;
    margin: 5px 10px;
    outline: none;
}
.page {
    width: 50%;
    margin-top: 30px;
}
.page input{
    float: right;
}
</style>
