<template>
  <div class="container">
    <mt-swipe :auto="4000" >
        <mt-swipe-item v-for="(item,index) in swipePic" :key="index">
           <img :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <span><img src="../../images/menu1.png" alt=""></span>
		                    <div class="mui-media-body">新闻咨询</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span><img src="../../images/menu2.png" alt=""></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span><img src="../../images/menu3.png" alt=""></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span><img src="../../images/menu4.png" alt=""></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span><img src="../../images/menu5.png" alt=""></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span><img src="../../images/menu6.png" alt=""></span>
		                    <div class="mui-media-body">练习我们</div></a></li>
		        </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
             swipePic: []
        }
    },
    created(){
        axios({
            url:"http://vue.studyit.io/api/getlunbo",
            method:'get'
        }).then(res => {
            console.log(res.data)
            if(res.data.status == 0){
                this.swipePic = res.data.message
            }

        })
    }
}
</script>

<style>
.mint-swipe{
    height: 240px;
}
.mint-swipe-item img{
        width: 100%;
        height: 100%;
}
.mui-grid-9 span img{
    width: 50%;
    border-radius: 50%;
}
    
</style>
