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
Vue.use(ElementUI, {
  locale
})
Vue.use(Vuex)
Vue.prototype.axios = axios
/* eslint-disable no-new */




router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = to.name
  }
  console.log(store.getters.token, 'token')
  // console.log(to, 'to')
  // console.log(from, 'from')
  let role = sessionStorage.getItem('role')
  //	开启进度条
  NProgress.start()
  if (role) {
    console.log('登陆过了')
    if (to.path === '/login') {
      next({path: '/'})
    } else {
        // 查看是否有当前用户角色，如果没有则获取角色信息
        if (!store.getters.info.role) {
          getAddRouters()
          // console.log('zouzheli')
          next('/')
        }else{
          // console.log('haishi')
          next()
        }
    }
  } else {
    console.log('没有登录')
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }

  }
});



async function getAddRouters() {
  // 省略 axios 请求代码 通过 token 向后台请求用户权限等信息，这里用假数据赋值
  await store.dispatch('getInfo', {
    role: "superAdmin",
    permissions: "超级管理员"
  })
  // 通过权限筛选新路由表
  await store.dispatch('newRoutes', store.getters.info.role)
  // console.log(store.getters.addRouters,'main.js')
  await router.addRoutes(store.getters.addRouters) // 动态加载新路由表
  
}


router.afterEach(() => {
  //	关闭进度条
  NProgress.done()
})
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
