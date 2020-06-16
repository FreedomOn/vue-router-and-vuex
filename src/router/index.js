import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 不需要权限的路由
let defaultRouter = [{
    path: '/',
    hidden: true,
    component: () => import('@/components/HelloWorld'),
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'HelloWorld',
      component: () => import('@/components/index'),
      redirect: '/home/index',
      children: [{
        path: '/home/index',
        name: 'index',
        component: () => import('@/views/home/index'),
      }, {
        path: '/home/select',
        name: 'select',
        component: () => import('@/views/home/select'),
      }, {
        path: '/home/four',
        name: 'four',
        component: () => import('@/views/home/four'),
      }, ]
    }, {
      path: 'person',
      name: 'person',
      component: () => import('@/views/person/person'),
    }, {
      path: '/tip',
      name: 'tip',
      component: () => import('@/views/tip/tip'),
    }, {
      path: '/news',
      name: 'news',
      component: () => import('@/views/news/news'),
      // 重定向到子页面
      redirect: '/news/img',
      children: [{ //二级路由/以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;
          path: '/news/img',
          name: 'img',
          component: () => import('@/views/children/img')
        },
        { //二级路由
          path: '/news/info',
          name: 'info',
          component: () => import('@/views/children/info')
        },
        { //二级路由
          path: '/news/photo',
          name: 'photo',
          component: () => import('@/views/children/photo'),
          redirect: '/news/photo/name',
          children: [ //三ji路由
            {
              path: '/news/photo/name',
              name: 'name',
              component: () => import('@/views/childrenschildren/name'),
            }, {
              path: '/news/photo/phone',
              name: 'phone',
              component: () => import('@/views/childrenschildren/phone'),
            }
          ]
        },
      ]
    }, ],
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/login'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  }
]
// 需要 addRouters 动态加载的路由 
let addRouter = [{
  path: '/',
  hidden: true,
  component: () => import('@/components/HelloWorld'),
  redirect: '/home',
  children: [{
    path: '/home',
    name: 'HelloWorld',
    component: () => import('@/components/index'),
    children: [{
      path: '/home/two',
      name: 'two',
      component: () => import('@/views/home/two'),
    },]
  }]
}]

export default new Router({
  routes: defaultRouter
})
export {
  defaultRouter,
  addRouter
}
// const router = new Router({
//   // mode: 'history',//开启了history模式，去除了#，
//   routes: [{
//       path: '/',
//       name: 'HelloWorld',
//       meta: {
//         needlogin: true,
//         isAuth: true,
//         content: '这是首页'
//       },
//       // beforeEnter:(to,from,next)=>{
//       //   next('/login');
//       //   console.log('首页独享的路由进入函数')
//       // },
//       component: () => import('@/components/HelloWorld'),
//       redirect: '/home',
//       children: [{
//         path: '/home',
//         name: 'HelloWorld',
//         component: () => import('@/components/index'),
//         redirect: '/home/index',
//         children: [{
//             path: '/home/index',
//             name: 'index',
//             component: () => import('@/views/home/index'),
//           },
//           {
//             path: '/home/select',
//             name: 'select',
//             component: () => import('@/views/home/select'),
//           },
//           {
//             path: '/home/four',
//             name: 'four',
//             component: () => import('@/views/home/four'),
//           }, {
//             path: '/home/two',
//             name: 'two',
//             component: () => import('@/views/home/two'),
//           }, {
//             path: '/home/three',
//             name: 'three',
//             component: () => import('@/views/home/three'),
//           }, {
//             path: '/home/five',
//             name: 'five',
//             component: () => import('@/views/home/five'),
//           },
//         ]
//       },
//       {
//         path: 'person',
//         name: 'person',
//         component: person
//       }, {
//         path: '/tip',
//         name: 'tip',
//         component: () => import('@/views/tip/tip'),
//       }, {
//         path: '/news',
//         name: 'news',
//         component: () => import('@/views/news/news'),
//         // 重定向到子页面
//         redirect: '/news/img',
//         children: [{ //二级路由/以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;
//             path: '/news/img',
//             name: 'img',
//             component: () => import('@/views/children/img')
//           },
//           { //二级路由
//             path: '/news/info',
//             name: 'info',
//             component: () => import('@/views/children/info')
//           },
//           { //二级路由
//             path: '/news/photo',
//             name: 'photo',
//             component: () => import('@/views/children/photo'),
//             redirect: '/news/photo/name',
//             children: [ //三ji路由
//               {
//                 path: '/news/photo/name',
//                 name: 'name',
//                 component: () => import('@/views/childrenschildren/name'),
//               }, {
//                 path: '/news/photo/phone',
//                 name: 'phone',
//                 component: () => import('@/views/childrenschildren/phone'),
//               }
//             ]
//           },
//         ]
//       }, ]
//     },

//     {
//       path: '/login',
//       name: 'login',
//       component: () => import('@/views/login/login'),
//     }, { //动态路由传参
//       path: '/newview/:id',
//       name: 'newview',
//       // props:true,//通过组件化props传参
//       props: function (route) {
//         console.log(route)
//         return {
//           id: route.params.id,
//           name: route.query.name
//         }
//       },
//       component: () => import('@/components/newView'),
//     },
//     {
//       path: '*',
//       redirect: '/404',
//       component: () => import('@/views/404'),
//     }
//   ]

// })
