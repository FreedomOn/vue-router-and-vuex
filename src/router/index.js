import Vue from 'vue'
import Router from 'vue-router'
import person from '@/views/person/person'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta:{
        needlogin:true,
        isAuth:true,
        content:'这是首页'
      },
      // beforeEnter:(to,from,next)=>{
      //   next('/login');
      //   console.log('首页独享的路由进入函数')
      // },
      component: () => import('@/components/HelloWorld'), 
      redirect:'/home',
      children:[
        {
          path: '/home',
          name: 'HelloWorld',
          component: () => import('@/components/index'), 
        }, {
          path: 'person',
          name: 'person',
          component: person
        }, {
          path: '/tip',
          name: 'tip',
          component: () => import('@/views/tip/tip'), 
        } ,{
          path: '/news',
          name: 'news',
          component: () => import('@/views/news/news'), 
          // 重定向到子页面
          redirect:'/news/img',
          children:[
            { //二级路由/以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;
              path:'/news/img',
              name:'img',
              component: () => import('@/views/children/img')
            },
            { //二级路由
              path:'/news/info',
              name:'info',
              component: () => import('@/views/children/info')
            },
            { //二级路由
              path:'/news/photo',
              name:'photo',
              component: () => import('@/views/children/photo'),
              redirect:'/news/photo/name',
              children:[//三ji路由
                {
                  path:'/news/photo/name',
                  name:'name',
                  component: () => import('@/views/childrenschildren/name'),
                }, {
                  path:'/news/photo/phone',
                  name:'phone',
                  component: () => import('@/views/childrenschildren/phone'),
                }
              ]
            },
          ]
        },
      ]
    },
   
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login'), 
    }, {//动态路由传参
      path: '/newview/:id',
      name: 'newview',
      // props:true,//通过组件化props传参
      props:function(route){
        console.log(route)
        return{
          id:route.params.id,
          name:route.query.name
        }
      },
      component: () => import('@/components/newView'), 
    },
    {
      path:'*',
      component: () => import('@/views/404'), 
    }
  ]
})
