<template>
  <div class="container">
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for= "(item,index) in newlist" :key="index">
                    <router-link :to="'/home/newinfo/' + item.id">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" :src="item.img_url">
                            <div class="mui-media-body">
                                {{item.title}}
                                <p class="mui-ellipsis"> 
                                <span class="mui-pull-left">发表时间：{{item.add_time | dataformatter("YYYY-MM-DD HH:mm:ss")}}</span>
                                <span class="mui-pull-right">点击：{{item.click}}次</span></p>
                            </div>
                        </a>
                    </router-link>
				</li>
			</ul>
  </div>
</template>]

<script>
import dataformatter from "../filter/dataformatter.js"
import axios from "axios"
export default {
    data(){
        return {
            // 传入的值
            newlist:[]
        }
    },
    created(){
        // 进行渲染
        axios({
            url:'http://vue.studyit.io/api/getnewslist',
            method:'get'
        }).then(res=>{
            console.log(res.data)
            if(res.data.status ==0){
                // 渲染
                this.newlist = res.data.message
            }
        })
    },
    filters:{
        // 日期渲染
    dataformatter
    }
}

</script>

<style>

</style>
