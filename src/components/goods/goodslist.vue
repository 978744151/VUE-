<template>
  <div class="container goods-list">
        <div class="goods-item" v-for="(item,index) in goodslist" :key="index" @click="$router.push('/home/goodsinfo/' + item.id)">
            <img :src="item.img_url" alt="">
            <h4>{{item.title}}</h4>
            <div class="info">
                <p class="price">
                    <span class="nowPrice">￥{{item.sell_price}}</span>
                    <span>
                        <del>￥{{item.market_price}}</del>
                    </span>
                </p>
                <p class="sale">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger"  plain size="large" @click="loadMore"  v-if="isShowMoreBtn">加载更多</mt-button>        
  </div>
</template>

<script>
import axios from "axios"
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            pageindex : 1,
            goodslist:[],
            isShowMoreBtn:true
        }
    },
     created(){
      this.getlist()
    
    },
    methods:{
        loadMore(){
            this.pageindex++
            this.getlist()
        },
           getlist(){
               axios({
            url:"http://vue.studyit.io/api/getgoods?pageindex="+this.pageindex
        }).then(res=>{
            if(res.data.status==0){
              console.log(res.data);
              if(res.data.message.length>0){
                  this.goodslist = this.goodslist.concat(res.data.message)
              }else{
                  this.isShowMoreBtn = false;
                  Toast('没有数据了')
              }
            }
        })
        }
    },
   
}
</script>

<style>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 3px;
}

.goods-list .goods-item{
    width: 48%;
    border: 1px solid #ccc;
    margin: 1%;
    box-shadow: 0 0 7px #aaa;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.goods-list .goods-item img{
    width: 100%;
    border: 0;
}

.goods-list .goods-item .info {
    background-color: #eee;
}

.goods-list .goods-item h4 {
    font-size: 14px;
}

.goods-list .goods-item .info p{
    margin: 0;
    margin-top: 10px;
    font-size: 13px;
}

.goods-list .goods-item .info p:nth-child(2) {
    display: flex;
    justify-content: space-between;
}

.goods-list .goods-item .info p:nth-child(1) .nowPrice {
    color: red;
    font-size: 15px;
    margin-right: 8px;
}
</style>
