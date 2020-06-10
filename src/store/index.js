import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import request from '@/views/utils/request'
Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
        count:0,
        // 所有的任务列表
        list:[],
        // 文本框的内容
        inputValue:'',
        // 下一个id
        nextId:5,
        // 默认展示的数据
        viewkey:'all'
    },
    // 只有mutations定义的函数才有权利去修改state中的数据
    mutations:{
        // mutations中不允许写异步的代码
        add(state){
            // setTimeout(()=>{
            //     state.count++
            // },1000)
            state.count++
        },
        // 可以触发mutations的时候传递参数
        addN(state,step){
            state.count+=step
        },
        sub(state){
            state.count--
        },
        subN(state,step){
            state.count-=step
        },
        // 为list进行赋值
        initList(state,list){
            state.list = list;
        },
        // 为store中的inputvalue赋值
        setInputValue(state,val){
            state.inputValue = val
        },
        // 添加列表
        addItem(state){
            const obj = {
                id:state.nextId,
                title:state.inputValue.trim(),
                done:false
            }
            state.list.push(obj);
            state.nextId ++;
            state.inputValue = '';
        },
        // 删除列表
        removeItem(state,id){
            state.list.forEach((item,index)=>{
                if(item.id === id){
                    state.list.splice(index,1)
                }
            })
        },
        // 改变复选框状态
        changeStatus(state,paylaod){
            state.list.forEach((item,index)=>{
                if(item.id === paylaod.id){
                    state.list[index].done = paylaod.status
                }
            })
        },
        // 清除已完成
        clear(state){
            state.list = state.list.filter(item=>item.done === false)
        },
        // 修改视图的关键字
        changeViewKey(state,key){
            state.viewkey = key
        },
    },
    actions:{
        // 在actions中 不能直接修改state中的数据
        // 必须通过context.commit 触发某一个mutations才行
        addAsync(context){
            // context一般不写
            setTimeout(()=>{
                context.commit('add')  
            },1000)
        },
        // actions中传递参数
        addNAsync(context,step){
            setTimeout(()=>{
            context.commit('addN',step)
            },1000)
        },
        subAsync({commit}){
            setTimeout(()=>{
                commit('sub')  
            },1000)
        },
        subNAsync({commit},step){
            setTimeout(()=>{
                commit('subN',step)  
            },1000)
        },
        // todo案例  请求json数据
        getList({commit}){
            axios.get("../../../static/list.json").then(({data})=>{
                commit('initList',data) 
                console.log(data)
            })
        }
    },
    getters:{
        showNum(state){
            return '当前最新数量是【'+state.count+'】'
        },
        // 获取剩余的条数
        unDoneLen(state){
            // filter返回的是一个新数组
            // return state.list.filter(item=>item.done===false).length
            let arr =  state.list.filter(item=>
                item.done === false
            )
            // console.log(arr,'arr')
            return arr.length
        },
         // 按需切换
        changeListView(state){
            if(state.viewkey === 'all'){
                return state.list
            }else if(state.viewkey === 'undone'){
                return state.list.filter(item=>!item.done)
            }else if(state.viewkey === 'done'){
                return state.list.filter(item=>item.done)
            }
            return state.list
        }
    }
})

export default store
