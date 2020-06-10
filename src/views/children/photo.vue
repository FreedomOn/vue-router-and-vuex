<template>
    <div>
       <div class="nav">
           <router-link to='/news/photo/name'>姓名</router-link>
           <router-link to='/news/photo/phone'>手机号</router-link>
       </div>
       <div class="view">
           <router-view></router-view>
       </div>
    </div>
</template>
<style scoped>
.router-link-active {
  color: aqua !important;;
 
}
.nav{
    display: flex;
    width: 100%;
    height: 50px;
    background: chartreuse;
    line-height: 50px;
}
.nav a{
    width: 50%;
    justify-content: space-around;
    text-decoration: none;
    text-align:center ;
    
}
</style>