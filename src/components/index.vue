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
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <router-link to="/home/index" exact>
              <el-menu-item index="1-1">首页vuexTodo</el-menu-item>
            </router-link>
            <router-link to="/home/select">
              <el-menu-item index="1-2">选项2</el-menu-item>
            </router-link>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <router-link to="/home/four">
                <el-menu-item index="1-4-1">选项4.1</el-menu-item>
              </router-link>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
        <router-link to="/home/two">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </router-link>
        <router-link to="/home/three">
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </router-link>
        <router-link to="/home/five">
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航五</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </div>
    <div class="right">
      <router-view></router-view>
      <!-- <Add/> -->
    </div>
  </div>
</template>
<script>
// import Add from "@/views/vuex/add.vue";
// import Subtra from "@/views/vuex/subtra.vue";
export default {
  // components: {
  //   Add,
  //   Subtra
  // },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      key: "1-1"
    };
  },
  created() {
   
  },
  mounted() {
    // 在index路由定义的一些元信息 放在meta信息
    // console.log(this.$route)
     let newKey = localStorage.getItem("key");
    console.log(newKey, "newkey");
    this.key = newKey;
    console.log(this.key, "this.key");
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    select(key, keyPath) {
      console.log(key, keyPath);
      // 刷新页面之后又问题哦
      localStorage.setItem("key", key);
      let newKey = localStorage.getItem("key");
      console.log(newKey, "newkey");
      this.key = newKey;
      console.log(this.key, "this.key");
    },
  }
};
</script>
<style scoped>
.content {
  width: 100%;
  height: 525px;
}
.left {
  width: 30%;
  height: 100%;
  float: left;
  background: #545c64;
}
.right {
  width: 70%;
  height: 100%;
  float: left;
  background: bisque;
}
</style>
