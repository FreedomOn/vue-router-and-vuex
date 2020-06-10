<template>
  <div class="content">
    <!-- 嵌套路由 -->
      <div class="left">
          <router-link to='/news/img'  exact> img</router-link>
          <router-link to='/news/info'> info</router-link>
          <router-link to='/news/photo'> photo</router-link>
      </div>
      <div class="right">
          <router-view></router-view>
      </div>
    </div>
</template>
<style  scoped>
.router-link-active {
  color: aqua!important;
 
}
.content{
    width: 100%;
    position: relative;
    }
.left{
    position: absolute;
    width: 20%;
    background: pink;
    height: 300px;
    text-align: center;
}
.left a {
    text-decoration: none;
    display: block;
    padding: 30px;
}
.right{
    position: absolute;
    width: 80%;
    left: 20%;
    height: 300px;
    background: orange;
}
</style>