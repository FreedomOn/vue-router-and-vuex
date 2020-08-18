<template>
  <div>
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :page-sizes="pageSizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
export default {
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1 //默认第一页
    },
    limit: {
      type: Number,
      default: 20 //默认每页20条
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50]; //默认显示可选的每页多少条数据
      }
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit("update:page", val); //改变的第几页的值赋值给父组件
      }
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit("update:limit", val); //改变的当前页几条数据的值赋值给父组件
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("pagination", { pageIndex: 1, pageSize: val });
    },
    handleCurrentChange(val) {
      this.$emit("pagination", { pageIndex: val, pageSize: this.pageSize });
    }
  }
};
</script>