<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
html body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
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

