<template>
    <div>
        这是首页展示内容
        <button @click="go"> 跳转到新闻页面</button>
        <div>
          <el-button type="primary" @click="out">退出</el-button>
        </div>
        <div>vuex---------------------</div>
        <Add></Add>
        <Subtra></Subtra>
    </div>
</template>
<script>
import Add from '@/views/vuex/add.vue'
import Subtra from '@/views/vuex/subtra.vue'
export default {
  components:{
    Add,
    Subtra
  },
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
    go:function(){
      console.log(this)
      // 通过路径跳转
      // this.$router.push({
      //    path:"/newview/123"
      // })
      // 通过名字跳转
      // this.$router.push({
      //    name:"newview"
      // })
      // 通过params传参  动态路由的传参
      // this.$router.push({
      //    name:"newview",
      //    params:{
      //      id:456
      //    }
      // })
      // 通过query传参  动态路由的传参
      this.$router.push({
         name:"newview",
         params:{
           id:456
         },
         query:{
           name:'小白',
           age:'18'
         }
      })
      // 替换
      // 替换是不会回到首页的
      // this.$router.replace({
      //   path:"/newview/123",
      //    query:{
      //      name:'小白',
      //      age:'18'
      //    }
      // })
    },
    out:function(){
      console.log('退出')
      sessionStorage.removeItem('islogin')
        this.$router.push({ path: '/login' })
    }
  }
}
</script>
