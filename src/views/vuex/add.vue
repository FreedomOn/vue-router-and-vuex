<template>
    <div>
        <h3>当前最新的count值为：{{$store.state.count}}</h3>
        <h3>{{$store.getters.showNum}}</h3>
        <el-button @click="add">+1</el-button>
        <el-button @click="addn">+N</el-button>
        <el-button @click="add1">异步+1</el-button>
        <el-button @click="add2">action传参+N</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        add(){
            // 使用mutations中的方法
            this.$store.commit('add')
        },
         addn(){
            // commit的作用就是调用某个mution函数
            // 触发mution  传参形式
            this.$store.commit('addN',3)
        },
        add1(){
            console.log(11)
            console.log(this.$store)
            // dispatch 函数 专门触发actions
            this.$store.dispatch('addAsync')
        },
        add2(){
             this.$store.dispatch('addNAsync',5)
            
        }
    }
}
</script>