<template>
   <div class="container">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item>
                            <img src="../../images/menu1.png">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">asdasd</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">
                        <span>市场价：
                            <del>￥asdads</del>
                        </span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>销售价：
                            <span class="sale_price">￥asdasd</span>
                        </span>
                    </div>
                    <div class="count">
                        <span>购买数量：</span>
                        <number-box :min="0" :max="10"></number-box>
                    </div>
                    <div class="btns">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" >加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：1313</p>
                    <p>库存情况：1313件</p>
                    <p>上架时间：123133</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" plain size="large">图文介绍</mt-button>
                <br>
                <mt-button type="danger" plain size="large">商品评论</mt-button>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.red-ball {
  width: 15px;
  height: 15px;
  background-color: red;
  position: absolute;
  border-radius: 50%;
  top: 400px;
  z-index: 999;
  left: 150px;
}

.container {
  padding-top: 5px;
  position: relative;
}
.mint-swipe {
  height: 180px;
}
.mint-swipe-item {
  text-align: center;
}
.mint-swipe-item img {
  height: 100%;
}

.mui-card-content-inner span {
  line-height: 3;
}

.sale_price {
  color: red;
  font-size: 18px;
}

.mui-card-header,
.mui-card-footer {
  display: block;
}
</style>
