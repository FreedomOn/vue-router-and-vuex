import Vue from 'vue'
import Vuex from 'vuex'

import todo from './modules/todo'
import addsub from './modules/addsub'
import routerData from './modules/routerData'
import role from './modules/roles'
import Cookies from 'js-cookie' //引进cookie
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    // token  // 刷新页面或者在新标签页打开，从cookie获取初始token
    token: Cookies.get('token')
  },
  // 只有mutations定义的函数才有权利去修改state中的数据
  mutations: {
    // 设置token  // 引用‘js-cookie’模块，存储 token 到cookie
    setToken(state, token) {
      state.token = token
      // 从现在开始 3小时后token过期
      Cookies.set('token', token, {
        expires: 1 / 24
      });
    }
  },
  actions: {
    // 异步执行
    setToken({commit}, token) {
      return new Promise((resolve, reject) => {
        commit('setToken', token)
        resolve()
      })
    }
  },
  getters: {
    // addsub
    count: state => state.addsub.count,
    // todo
    list: state => state.todo.list,
    inputValue: state => state.todo.inputValue,
    nextId: state => state.todo.nextId,
    viewkey: state => state.todo.viewkey,
    // token
    token: state => state.token,
    // role
    info: state => state.role.info,
    // routerdata
    routers: state => state.routerData.routers,
    addRouters: state => state.routerData.addRouters,
  },
  modules: {
    todo,
    addsub,
    routerData,
    role
  },
})

export default store
