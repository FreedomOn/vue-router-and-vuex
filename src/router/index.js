import Vue from 'vue'
import Router from 'vue-router'
import layout from '../components/layout/layout'

Vue.use(Router)
// 不需要权限的路由
export const defaultRouter = [{
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    redirect: '/404',
    component: () => import('@/views/404'),
  },
  {
    path: '/',
    component: layout,
    redirect: '/index',
    name: 'index',
    hidden: true,
    children: [{
      path: 'index',
      component: () => import('@/views/home/index'),
    }]
  },
  {
    path: '/',
    component: layout,
    name: 'role',
    hidden: true,
    children: [{
      path: 'pagerole',
      component: () => import('@/views/roletype/page'),
    }, {
      path: 'btnrole',
      component: () => import('@/views/roletype/btn'),
    }]
  }
]
// 需要添加的路由
export const addRouter = [{
    path: '/',
    component: layout,
    redirect: '/index',
    name: 'index',
    hidden: true,
    children: [{
      path: 'index',
      component: () => import('@/views/home/index'),
    }]
  }, {
    path: '/',
    component: layout,
    name: 'two',
    hidden: true,//添加權限 superAdmin用户才会显示本页面
    meta: {
      role: ['superAdmin']
    },
    children: [{
      path: 'two',
      component: () => import('@/views/home/two'),
    }]
  }, {
    path: '/',
    component: layout,
    name: 'three',
    hidden: true,
    meta: {
      role: ['superAdmin','admin']
    },
    children: [{
      path: 'three',
      component: () => import('@/views/home/three'),
    }]
  },
  {
    path: '/',
    component: layout,
    name: 'five',
    hidden: true,
    meta: {
      role: ['superAdmin']
    },
    children: [{
      path: 'five',
      component: () => import('@/views/home/five'),
    }]
  }, {
    path: '*',
    redirect: '/404',
    hidden: true,
    component: () => import('@/views/404'),
    children: []
  },
]
console.log(defaultRouter, 'routers')

export default new Router({
  routes: defaultRouter
})
