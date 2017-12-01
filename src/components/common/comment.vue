<template>
  <div>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <hr>
    <textarea name="" id="" cols="30" rows="10" v-model="postContent"></textarea>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in commentList" :key="index">
					<a href="javascript:;">
							<img class="mui-media-object mui-pull-right" :src="'../../images/menu' + Math.floor(Math.random(0,6) + 1) + '.png'">
						<div class="mui-media-body">
							
              <span>第{{index+1}}楼   用户： {{item.user_name}} ：发表时间：{{item.add_time | dataformatter("YYYY-MM-DD HH:mm:ss")}} </span>
							<p class="mui-ellipsis">{{item.content}}</p>
						</div>
					</a>
				</li>
			</ul>
           <mt-button type="danger"  plain size="large" @click="loadMore"  v-if="isShowMoreBtn">加载更多</mt-button>
  </div>
</template>

<script>
import dataformatter from "../filter/dataformatter.js"
import axios from "axios";
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      commentList: [],
      pageIndex: 1,
      //元素的显示与隐藏
      isShowMoreBtn: true,
      //评论组件
      postContent: ""
    };
  },
  methods: {
    getData() {
      axios({
        url:
          "http://vue.studyit.io/api/getcomments/" +
          this.id +
          "?pageindex=" +
          this.pageIndex
      }).then(res => {
        console.log(res.data);
        if (res.data.status == 0) {
          if(res.data.message.length>0){
            //对评论组件的数组进行拼接
            this.commentList = this.commentList.concat(res.data.message);
          }else{
            this.isShowMoreBtn = false;
            Toast('没人啦')
          }
        }
      });
    },
    loadMore() {
      this.pageIndex++;
      this.getData();
    },
    postComment(){
      if(this.postContent.trim()){

        axios({
          url: "http://vue.studyit.io/api/postcomment/" + this.id,
          method:"post",
          data:"content="+this.postContent
     
        }).then(res =>{
          if(res.data.status == false ){
           this.commentList.unshift({
              user_name: "匿名用户",
              add_time: new Date(),
              content: this.postContent
            })
          this.postContent = "";
          }
        })
      }
    }
  },

  created() {
    this.getData()
  },
   filters:{
    dataformatter
    },
  props: ["id"]
};
</script>

<style>
textarea {
  height: 150px;
  margin-bottom: 0;
}
.mui-media-body {
  font-size: 14px;
}
</style>
