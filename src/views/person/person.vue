<template>
  <div class="table">
    <div class="t-bottom">
      <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'red'}">
        <el-table-column prop="date" label="日期" align="center" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center" width="180"></el-table-column>
        <el-table-column prop="address" align="center" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.initTable();
  },
  methods: {
    initTable() {
      //   使用json方式获取数据
      this.axios("api/table").then(res => {
        console.log(res.data); //查看接口返回时什么样的数据，要常用
        this.tableData = res.data; //接口返回的是一个数组，直接可以赋值给table
      });
    }
  }
};
</script>
<!--使用scoped需要注意，使用的它之后，你就无法更改elelment组件中的样式-->
<style scoped="scoped">
/*如果不想使用scoped,你就用父级的class把样式全部包裹起来，就不会相互影响页面的样式了*/
.table {
  width: 100%;
  height: 100%;
}
.t-top {
  width: 30%;
  height: 40px;
}
.el-input {
  width: 60%;
}
.t-bottom {
  margin-top: 20px;
}
</style>