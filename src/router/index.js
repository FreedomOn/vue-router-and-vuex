import Vue from 'vue'
import Router from 'vue-router'
// layout边框
import layout from '../components/layout/layout'
// 
import commerView from '../views/commerview'
// 重复点击会报错
// 可以在router的配置文件中（router -> index.js）加上下面这句话，
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
// 不需要权限的路由
export const defaultRouter = [
  { path: '/',
    redirect: '/index',
    hidden: true,
    children: []
  },{
    path: '/',
    component: layout,
    redirect: '/index',
    alone: true,  //true代表只有一级菜单  不加代表可以有好几级菜单
    name: '首页',
    children: [{
      path: 'index',
      name: '首页',
      component: () => import('@/views/home/index'),
      children: []
    }]
  },{
    path: '/login',
    component: () => import('@/views/login/login'),
    name:'',
    children: [],
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    children: [],
    component: () => import('@/views/404'),
  },
  {
    path: '/',
    component: layout,
    icon: 'table',
    name: '权限管理',
    children: [{
      path: '/pagerole',
      name: '页面权限',
      icon: 'table',
      component: () => import('@/views/roletype/page'),
      children: []
    }, {
      path: '/btnrole',
      name: '按钮权限',
      icon: 'table',
      component: () => import('@/views/roletype/btn'),
      children: []
    }]
  }
]
// 需要添加的路由
export const addRouter = [{
    path: '/two',
    component: layout,
    alone: true,  //true代表只有一级菜单  不加代表可以有好几级菜单
    name: '文件上传',
    meta: {
      role: ['superAdmin']
    },
    children: [{
      path: '/two',
      name:'文件上传',
      children: [],
      component: () => import('@/views/home/select'),
    }]
  },
  {
    path: '/three',
    component: layout,
    alone: true,  //true代表只有一级菜单  不加代表可以有好几级菜单
    name: '编辑器',
    meta: {
      role: ['superAdmin','admin']
    },
    children: [{
      path: '/three',
      name: '编辑器',
      component: () => import('@/views/home/three'),
      children: [],
    }]
  },
  {
    path: '/five',
    component: layout,
    alone: true,  //true代表只有一级菜单  不加代表可以有好几级菜单
    name: '系统设置',
    meta: {
      role: ['superAdmin']
    },
    children: [{
      path: '/five',
      name: '系统设置',
      component: () => import('@/views/home/five'),
      children: [],
    }]
  },  {
    path: '/person',
    component: layout,
    // alone: true,  //true代表只有一级菜单  不加代表可以有好几级菜单
    name: '个人页面',
    children: [{
      path: '/person',
      name: '个人页面',
      component: () => import('@/views/home/four'),
      children: []
    },{
      path: '/personanal',
      name: '个人信息',
      component: commerView,//无限极容器
      children: [
        {
          path: '/sanji',
          name: '三级菜单11',
          component: () => import('@/views/news/news'),
          children: []
        },
        {
          path: '/sanjier',
          name: '三级菜单22',
          component: () => import('@/views/person/person'),
          children: []
        }
      ],
    }]
  }, 
  {
    path: '*',
    hidden: true,
    component: () => import('@/views/404'),
    children: []
  },
]
// console.log(defaultRouter, 'routers')

export default new Router({
  routes: defaultRouter
})
