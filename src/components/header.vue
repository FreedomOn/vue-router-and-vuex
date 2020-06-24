<template>
  <div class="hello">
    <div id="nav">
      <!-- 展开关闭侧边栏 -->
      <span class="hideAside" @click="collapse">
        <i :class="openclose"></i>
      </span>
      <!-- 全屏 -->
      <span class="fullScreen" @click="fullScreen">
        <el-tooltip class="item" effect="dark" :content="tip" placement="bottom">
          <svg-icon :icon-class="Fullscreen" />
        </el-tooltip>
      </span>
      <!-- 登录者名字 -->
      <span class="name">{{info.permissions}}</span>
      <el-button type="primary" size="small" @click="out" class="btn">退出</el-button>
      <!-- 图片 -->
      <span class="icon"><img :src="avatar"/></span>
    </div>
     <tabNav></tabNav>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { mapGetters } from "vuex";
import tabNav from './layout/tav'
export default {
  computed: {
    ...mapGetters(["openclose","info"])
  },
  components:{
    tabNav
  },
  data() {
    return {
      isfullScreen: true,
      Fullscreen:"quan",
      tip:'全屏展示',
      avatar:'../../../static/img/user.jpg'
    };
  },
  methods: {
    // 展开关闭
    collapse() {
      console.log(11);
      this.$store.dispatch("setSlider");
    },
    // 全屏展示
    fullScreen() {
      if (this.isfullScreen) {
        this.Fullscreen = "outquan",
        this.tip = '退出全屏'
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
        this.isfullScreen = false;
      } else {
         this.Fullscreen = "quan"
         this.tip = '全屏展示'
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        this.isfullScreen = true;
      }
    },
    out: function() {
      console.log("退出");
      // sessionStorage.removeItem("islogin");
      localStorage.removeItem("key");
      sessionStorage.clear();
      Cookies.remove("token");
      location.reload();
      this.$router.push(
        { path: "/login" },
        this.$message.success("退出成功了")
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style    scoped>
#nav {
  height: 45px;
  background: azure;
  position: relative;
}
.btn {
  position: absolute;
  right: 80px;
  top: 5px;
}
.hideAside {
  position: absolute;
   left: 20px;
  font-size: 28px;
  color: lightgreen;
  cursor: pointer;
}
.fullScreen{
  position: absolute;
  right: 240px;
  top: 0px;
  /* background: red; */
  font-size: 20px;
  cursor: pointer;
  top: 5px;
}
.name{
  position: absolute;
    right: 150px;
    top: 10px;
}
.icon{
  position: absolute;
  right: 20px;
  top: 2px;
}
img{
    width: 40px;
    height: 35px;
  }
</style>
