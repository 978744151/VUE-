
<template>
    <div class="container">
        <div class="news-header">
            <h4>{{info.title}}</h4>
            <span>发表时间 {{info.add_time}}</span>
            <span class="mui-pull-right">点击了：{{info.click}}次</span>
            <hr>
        </div>
        <slot name="imgs"></slot>
        <div class="news-content mui-ellipsis-2" v-html="info.content" >

        </div>
    </div>
</template>
<script>
// detail组件
    export default {
// props  子元素获取属性
      props:["info"],
       filters:{
    
  }
  }
</script>
<style>

</style>
