// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import store from './store'
// 导入ant-design-vue组件库
import ant from 'ant-design-vue'
// 导入组件库的样式表
import 'ant-design-vue/dist/antd.css';
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' 
import axios from 'axios'
Vue.config.productionTip = false;
Vue.use(ant)
Vue.use(ElementUI, { locale })
Vue.use (Vuex)
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// router.beforeEach((to,from,next)=>{
//   console.log('beforeEach-----------')
//   console.log(to)
//   let isLogin = sessionStorage.getItem('islogin');
//   if(to.path === '/login' || isLogin){
//     next()
//   }else{
//     next('/login')
//   }
  
// })
