import Vue from 'vue'
import Router from 'vue-router'
import layout from '../components/layout/layout'

// 不是必须加载的组件使用懒加载
import two from '@/views/home/two'


Vue.use(Router)
// 不需要权限的路由
let defaultRouter = [{
  path: '/',
  redirect: '/index',
  hidden: true,
  children: []
}, {
  path: '/index',
  iconCls: 'fa fa-dashboard', 
  component: layout,
  alone: true,
  children: [{
    path: '/index',
    iconCls: 'fa fa-dashboard', 
    name: 'index',
    component: () => import('@/views/home/index'),
    children: []
  }]
},{
  path: '/index',
  iconCls: 'fa fa-dashboard', 
  alone: true,
  children: [{
    path: '/person',
    iconCls: 'fa fa-dashboard', 
    name: 'person',
    component: () => import('@/views/person/person'),
    children: []
  }]
},{
  path: '/index',
  iconCls: 'fa fa-dashboard', 
  component: layout,
  alone: true,
  children: [{
    path: '/tip',
    iconCls: 'fa fa-dashboard', // 图标样式class
    name: 'tip',
    component: () => import('@/views/tip/tip'),
    children: []
  }]
},{
  path: '/index',
  iconCls: 'fa fa-dashboard', // 图标样式class
  component: layout,
  alone: true,
  children: [{
    path: '/rolepage',
    iconCls: 'fa fa-dashboard',
    name: 'rolepage',
    component: () => import('@/views/roletype/page'),
    children: []
  },]
},{
  path: '/login',
  component: () => import('@/views/login/login'),
  name: '',
  hidden: true,
}, {
  path: '*',
  name: '404',
  redirect: '/404',
  component: () => import('@/views/404'),
  hidden: true,
}]

// 需要 addRouter 动态加载的路由 
let addRouter = [{
  path: '/',
  component: layout,
  iconCls: 'fa fa-dashboard',
  alone: true,
  children: [{
    path: '/two',
    iconCls: 'fa fa-dashboard', // 图标样式class
    name: 'two',
    meta: {
      role: ['superAdmin']
    },
    component: two,
  }]
}, {
  path: '/',
  component: layout,
  alone: true,
  children: [{
    path: '/three',
    iconCls: 'fa fa-dashboard', // 图标样式class
    name: 'three',
    meta: {
      role: ['superAdmin', 'admin']
    },
    component: () => import('@/views/home/three'),
  }]
}, {
  path: '/',
  component: layout,
  alone: true,
  children: [{
    path: '/five',
    iconCls: 'fa fa-dashboard', // 图标样式class
    name: 'five',
    meta: {
      role: ['superAdmin']
    },
    component: () => import('@/views/home/five'),
  }]
}, {
  path: '*',
  redirect: '/404',
  hidden: true,
  children: []
}, ]

// 需要 addRouter 动态加载的路由 
// let addRouter = [{
//   path: '/',
//   hidden: true,
//   component: () => import('@/components/HelloWorld'),
//   redirect: '/home',
//   children: [{
//     path: '/home',
//     name: 'HelloWorld',
//     component: () => import('@/components/index'),
//     children: [{ //上传超级管理员
//         path: '/home/two',
//         name: 'two',
//         // 设置有权限加载的页面
//         meta: {
//           role: ['superAdmin']
//         },
//         component: () => import('@/views/home/two'),
//       }, { //编辑器  超级管理员  管理员
//         path: '/home/three',
//         name: 'three',
//         // 设置有权限加载的页面
//         meta: {
//           role: ['superAdmin', 'admin']
//         },
//         component: () => import('@/views/home/three'),
//       }, { //系统设置超级管理员
//         path: '/home/five',
//         name: 'five',
//         // 设置有权限加载的页面
//         meta: {
//           role: ['superAdmin']
//         },
//         component: () => import('@/views/home/five'),
//       },
//       {
//         path: '/page',
//         name: 'page',
//         component: () => import('@/views/roletype/page'),
//       },
//       {
//         path: '/btn',
//         name: 'btn',
//         component: () => import('@/views/roletype/btn'),
//       },
//     ]
//   }]
// }]

export default new Router({
  routes: defaultRouter
})
export {
  defaultRouter,
  addRouter
}
