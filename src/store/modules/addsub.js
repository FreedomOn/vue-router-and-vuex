export default{
    state:{
        count:0,
    },
    mutations:{
        // mutations中不允许写异步的代码
        add(state){
            console.log(222)
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
    },
    getters:{
        showNum(state){
            return '当前最新数量是【'+state.count+'】'
        },
    }
}

