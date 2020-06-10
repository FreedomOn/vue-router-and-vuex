<template>
    <div>
        我是个人页面
        <button @click="aa">跳转到提示页面</button>
    </div>
</template>
<script>
export default {
    methods:{
         aa:function(){
             console.log(this)
             this.$router.push({
                //  跳转到提示页面
                 path:'/tip'
             })
        },
  
    }
}
</script>