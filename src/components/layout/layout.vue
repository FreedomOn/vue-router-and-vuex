<template>
  <div id="loyout">
    <el-container>
      <layoutAside></layoutAside>
      <el-container>
        <layoutHeader></layoutHeader>
        <el-main id="elmain">
          <transition name="main" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
        <el-footer>
          <Bottom></Bottom>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import layoutAside from '../index'   //左侧导航条
  import layoutHeader from '../header' //头部导航
  import Bottom from '../buttom'  //尾部介绍


  export default {
    name: 'dc-home',
    components: {
      layoutHeader,
      Bottom,
      layoutAside
    },
    created () {
      // this.$router.push('/index')
    }
  }
</script>

<style>
  .main-enter, .main-leave-to {
    opacity: 0;
    transform: translateY(30px);

  }
  .main-enter-active {
    transition: all 0.2s;
  }
  .main-leave-active {
    position: absolute;
    transition: all 0.3s;
  }
  .content{
    background: rgb(84, 92, 100);
  }
</style>
<style lang="scss">
  * {
    margin: 0px;
    padding: 0px;
  }

  body {
    background-color: #f2f2f2;
    font-size: 14px;
    color: #333333;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  
  #elmain {
    background-color: #f0f2f5;
  }
.el-container{
  width: 100%;
  height: 100%;
}

</style>
