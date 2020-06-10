<template>
  <div class="hello">
      新闻内容页面{{id}}
  </div>
</template>
<script>
export default {
    props:['id','name'],
    mounted(){
        console.log(this)
      
    }
}
</script>