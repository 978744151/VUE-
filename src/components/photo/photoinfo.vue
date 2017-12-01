<template>
    <div class="container">
        <detail :info = "commit">
            <div slot="imgs" class="images">
                <img class="preview-img" :src="item.src" alt=""  v-for="(item,index) in images" :key="index" @click="$preview.open(index, images)" >
            </div>
        </detail>
          <div class="news-comment">
          <!-- 组件 -->
          <comment :id="$route.params.id"></comment>
      </div>
    </div>    
</template>

<script>
import Vue from "vue"
import VuePreview from "vue-preview"
// 需要use进行使用
Vue.use(VuePreview)
import comment from "../common/comment.vue"
import detail  from "../common/detail.vue"
import axios from "axios"
export default {
    data(){
        return {
            // 渲染接受的数据
           commit:{},
           images:[]
        }
    },
    created(){
        axios({
            url:"http://vue.studyit.io/api/getimageInfo/" + this.$route.params.id
        }).then(res=>{
            if(res.data.status ==0){
                console.log(res.data);
                this.commit = res.data.message[0];
            }
        })
        axios({
            url:"http://vue.studyit.io/api/getthumimages/"+ this.$route.params.id
        }).then(res=>{
            if(res.data.status ==0 ){
                this.images = res.data.message.map(v=>{
                    // vue-proview方法 对每个元素进行函数运行
                    v.h = 400;
                    v.w = 600;
                    return v
                })
            }
        })
    },

    components:{
        comment,
        detail
    }
}

</script>

<style>
.news-header,.news-content,.news-comment{
    padding: 5px;
}
.news-content{
    text-indent: 2em;
    font-size: 14px;
}
.images img{
    width: 20%;
    margin:0 1px
}
.pswp__bg{
    opacity: 0.8!important;
}
</style>
