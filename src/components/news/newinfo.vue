<template>
  <div class="container">
      <div class="news-header" >
          <h4>{{newinfo.title}}</h4>
          <span>发表时间：{{newinfo.add_time}}</span>
          <span class="mui-pull-right">点击了：{{newinfo.click}}次</span>
          <hr>
      </div>
      <div class="news-content" v-html="newinfo.content">
         
      </div>
      <div class="news-comment">
          <!-- 组件 -->
          <comment :id="$route.params.id"></comment>
      </div>
  </div>
</template>

<script>
import dataformatter from "../filter/dataformatter.js"
import axios from "axios"
// 别名组件
import comment from "../common/comment.vue"
export default {
    data(){
        return {
            newinfo:{}
        }
    },
   created(){
    axios({
      url: "http://vue.studyit.io/api/getnew/" + this.$route.params.id
    }).then(res => {
      if(res.data.status == 0){
          this.newinfo = res.data.message[0]
        console.log(res.data)
      }
    })
  },
    filters:{
        dataformatter
    },
    // 注册组件
    components:{
        comment
    }
}
</script>

<style>
.news-header,.news-content,.news-comment{
    padding: 5px;
}
</style>
