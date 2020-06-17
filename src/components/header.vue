<template>
  <div class="hello">
   <div id='nav'>
      <el-button type="primary" @click="out">退出</el-button>
    </div>
    
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  methods:{
    out: function() {
      console.log("退出");
      sessionStorage.removeItem("islogin");
      localStorage.removeItem('key')
      Cookies.remove('token');
      location.reload()
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
#nav{
    height: 45px;
    background: azure;
}

</style>
