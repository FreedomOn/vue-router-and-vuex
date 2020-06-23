<template>
  <div class="content">
    <div class="left">
      <!-- el-menu的属性查看官方文档 -->
      <!-- 
        router: 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 默认false
        unique-opened:  是否只保持一个子菜单的展开  默认false
        collapse-transition ： 是否开启折叠动画  默认 true
        collapse  侧边栏是否展开 默认false  展开 true是合并
      -->
      <el-menu
        :default-active="key"
        class="el-menu-vertical"
        @select="select"
        background-color="#545c64"
        text-color="rgba(255,255,255,.7)"
        active-text-color="#ffd04b"
        :router="true"
        :unique-opened="true"
        :collapse-transition="true"
        :collapse="isCollapse"
      >
        <!-- 遍历根据权限生成的路由表生成菜单列表 -->
        <!-- v-if="!item.hidden" 筛选掉带hidden属性的路由 -->
        <template v-for="(item,index) in $store.getters.routers" v-if="!item.hidden">
          <!-- 检查是否带有alone属性的一级菜单类似“主页”，还有子菜单的个数 -->
          <el-submenu v-if="!item.alone && item.children.length>0" :key="index" :index="index+''">
            <template slot="title">
              <!-- <svg-icon v-if="item.meta&&item.icon" :icon-class="item.icon"></svg-icon> -->
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </template>
            <!-- 子菜单组件 -->
            <menu-tree :menuData="item.children"></menu-tree>
          </el-submenu>
          <!-- 一级菜单 -->
          <!-- 循环一级菜单不带子菜单 -->
          <el-menu-item :index="item.path" :key="index" v-else>
            <i :class="item.icon"></i>
            <!-- <svg-icon v-if="item.icon" :icon-class="item.icon"></svg-icon> -->
            <span slot="title">{{ item.name}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>
<script>
import menuTree from "./childmenu";
import { mapGetters } from "vuex";
export default {
  components: {
    menuTree
  },
  computed: {
    ...mapGetters(["routers", "isCollapse"])
  },
  data() {
    return {
      key: ""
    };
  },
  created() {
    // 在index路由定义的一些元信息 放在meta信息
    let newKey = localStorage.getItem("key");
    console.log(newKey, "create");
    this.key = newKey;
    console.log(this.key, "this create");
  },
  mounted() {
    // console.log(this.routers, "getters.router");
    // console.log(this.$store.getters.routers,'getters')
  },
  methods: {
    select(key, keyPath) {
      // console.log(key, keyPath);
      // localStorage.setItem("key", key);
      // let newKey = localStorage.getItem("key");
      // console.log(newKey, "newkey");
      // this.key = newKey;
      // console.log(this.key, "this.key");
    }
  }
};
</script>
<style lang="scss">
.left {
  height: 100%;
}
// 开启展开关闭动画
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  /* overflow-y: scroll; */
}
// 设置左侧点击背景颜色
#asideNav .el-menu .el-menu-item.is-active {
  background-color: #56a9ff !important;
}
.el-menu-item.is-active {
  background-color: #56a9ff !important;
}
</style>



