<template>
  <div>
    <pagination
      v-show="length>0"
      :total="length"
      :page.sync="pageIndex"
      :limit.sync="pageSize"
      @pagination="handlePageChange"
    />
  </div>
</template>
<script>
import Pagination from "./pagination";
export default {
  components: { Pagination },
  data() {
    return {
      length: 0,
      pageSize: 20, //要传过去的数据 每页多少条数据
      pageIndex: 1 //要传过去的数据 第几页
    };
  },
  methods:{
      handlePageChange(data) {
        this.pageIndex = data.pageIndex
        this.pageSize = data.pageSize
        this.loadData()//这是重新获取数据的方法
      }
  }
};
</script>