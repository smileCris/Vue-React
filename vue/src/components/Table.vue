<template>
    <el-table
    :data="list"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Table',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.get('https://easy-mock.com/mock/5b1f331f630e9c3e6b85b766/react0612/list')
      .then((response) => {
        this.list = response.data.list
        console.log(this.list)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
