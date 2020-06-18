<template>
  <div class="content">
    <div class="left">
      <el-menu
        :default-active="key"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="select"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- <template v-for="(item,index) in $store.getters.routers"  v-if="!item.hidden">
          <el-submenu v-if="!item.alone && item.children.length>0" :index="index+''">
            <template slot="title">
              <i :class="item.iconCls?item.iconCls:[fa,fa-server]"></i>
              <span slot="title">{{ $t(`routeNmae.${item.name}`) }}</span>
            </template>



          </el-submenu>
          <el-menu-item :index="item.path" v-else>
            <i :class="item.iconCls?item.iconCls:[fa,fa-file]"></i>
            <span slot="title">{{ $t(`routeNmae.${item.name}`) }}</span>
          </el-menu-item>
        </template>-->

  
          <!-- 一级菜单 -->
          <!-- <el-submenu 
            :index="item.id + ''" 
            v-for="item in menulist" 
            :key="item.id">
      
            <template slot="title">
          
              <i :class="['iconfont',item.icon]"></i>
              
              <span>{{item.authName}}</span>
            </template>
           
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/' + subItem.path)">
              <template slot="title">
             
                <i class="el-icon-menu"></i>
                
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu> -->


        <!-- <router-link to="/index">
            <el-menu-item index="1-1"> <i class="el-icon-location"></i>首页vuexTodo</el-menu-item>
        </router-link> -->

        <!-- <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>权限管理
          </template>
         
           <router-link to="/rolepage">
              <el-menu-item index="2-1">page权限</el-menu-item>
            </router-link>
             <router-link to="/rolebtn">
              <el-menu-item index="2-2">btn权限</el-menu-item>
             </router-link>
          
        </el-submenu> -->
          <!-- <el-menu-item index="/person"> <i class="el-icon-location"></i>个人管理</el-menu-item>
          <el-menu-item index="/tip"> <i class="el-icon-location"></i>提示页面</el-menu-item> -->
      </el-menu>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["routers"])
  },
  data() {
    return {
      key: ""
    };
  },
  created() {},
  mounted() {
    // 在index路由定义的一些元信息 放在meta信息
    // console.log(this.$route)
    let newKey = localStorage.getItem("key");
    // console.log(newKey, "newkey");
    this.key = newKey;
    // console.log(this.key, "this.key");
    // vuex
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    select(key, keyPath) {
      // console.log(key, keyPath);
      localStorage.setItem("key", key);
      let newKey = localStorage.getItem("key");
      console.log(newKey, "newkey");
      this.key = newKey;
      console.log(this.key, "this.key");
    }
  }
};
</script>
<style scoped>
.left {
  width: 200px;
  height: 100%;
}
</style>
