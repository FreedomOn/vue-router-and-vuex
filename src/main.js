// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import store from './store'
import '@/icons' // icon
//引入nprogress进度条
import NProgress from 'nprogress'
//引入nprogress进度条的样式
import 'nprogress/nprogress.css'
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



router.beforeEach((to, from, next) => {
  console.log(store.getters.token,'token')
  //	开启进度条
  NProgress.start()
  //	获取是否有token
  let isLogin = sessionStorage.getItem('islogin');
  // 如果已经就是要去login了，就不需要拦截了
  if (to.path === '/login' || isLogin) {
    next()
  } else {
    next('/login')
  }

});

// router.beforeEach((to, from, next) => {
//   console.log('w走了吗')
//   console.log(store.getters.info.role,'aaa')
//    //	开启进度条
//    NProgress.start()
//   //  是否存在token
//   if (store.getters.token) { 
//     // 触发store中得事件 设置token过期时间
//     store.dispatch('setToken', store.getters.token)
//     if (to.path === '/login') {
//       next()
//     } else {
//       if (!store.getters.info.role) { // 查看是否有当前用户角色，如果没有则获取角色信息
//         !async function getAddRouters () {
//             // 省略 axios 请求代码 通过 token 向后台请求用户权限等信息，这里用假数据赋值
//           await store.dispatch('getInfo',  {
//             role: "superAdmin",
//             permissions: "超级管理员"
//           })
//            // 通过权限筛选新路由表
//           await store.dispatch('newRoutes', store.getters.info.role)
//           console.log(store.getters.addRouters)
//           await router.addRoutes(store.getters.addRouters) // 动态加载新路由表
//           next({path: '/index'})
//         }()
//       } else {
//         next()
//       }
//     }
//   } else {
//     if (to.path === '/login') {
//       next()
//     }
//     next({path: '/login'})
//   }
// })

router.afterEach(() => {
  //	关闭进度条
  NProgress.done()
})
