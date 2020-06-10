<template>
  <div>
    <h3>当前最新的count值为：{{count}}</h3>
    <h3>{{showNum}}</h3>
    <el-button @click="sub1">-1</el-button>
    <el-button @click="sub2">-N</el-button>
    <el-button @click="subAsync()">异步-1</el-button>
    <el-button @click="sub4">异步-N</el-button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions,mapGetters } from "vuex";
export default {
  // 通过计算属性 利用展开运算符把store中 state中的某一个值拿到直接使用
  computed: {
    ...mapState(["count"]),
    ...mapGetters(['showNum'])
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["sub", "subN"]),
    ...mapActions(["subAsync",'subNAsync']),
    sub1() {
      this.sub();
    },
    sub2() {
      this.subN(2);
    },
    // sub3() {
        // 可以在点击触发的时候 直接使用...mapActions中的函数
    //   this.subAsync();
    // },
    sub4() {
      this.subNAsync(6);
    }
  }
};
</script>