<template>
  <div class="hello">
   <div id='nav'>
      <!-- 一级路由一定要加/ -->
      <router-link to='/home'>首页</router-link>
      <router-link to='/person'>个人</router-link>
      <router-link to='/tip'>提示</router-link>
      <router-link to='/news'>新闻</router-link>  
      <el-button type="primary" @click="out">退出</el-button>
    </div>
    <div class="bottom">
          <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    // 在index路由定义的一些元信息 放在meta信息
    // console.log(this.$route)
  },
  methods:{
    out: function() {
      console.log("退出");
      sessionStorage.removeItem("islogin");
      localStorage.removeItem('key')
      this.$router.push(
        { path: "/login" },
        this.$message.success("退出成功了")
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.router-link-active {
  color: aqua !important;;
 
}
#nav{
  width: 100%;
  display: block;
  background: plum;
  height: 50px;
  display: flex;
}
  a{
     text-decoration: none;
    width: 50px;
    height: 50px;
    line-height: 50px;
    flex: 1;
    list-style: none;
    justify-content:center;
    text-align: center;
    
  }
</style>
