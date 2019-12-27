<template>
  <div class="order_layout">
    <div class="order_style">
      <div class="c_main_title">我的订单状态</div>
      <!-- <div class="per_order">
        <div class="per_order_title">
          <div class="per_order_title_date">2018-10-10</div>
          <div class="per_order_title_order">订单号：15548752485115</div>
        </div>
        <div class="per_order_content">
          <img class="icon_style" src="../../../static/image/icon/honglou.jpg">
          <div class="per_order_content_productdetails">
            <div class="per_productdetails">红楼梦书籍</div>
            <div class="per_productdetails">RMB 100
            </div>
            <div class="per_productdetails">数量
              <span class="per_number"> x 1</span>
            </div>
          </div>
          <div class="per_order_content_price">
            <div class="per_order_content_price_details">RMB 100</div>
            <div class="per_order_content_price_details">（含运费）</div> 
          </div>
          <div class="per_order_content_remark">
            <div class="per_order_content_remark_status">交易成功</div>
            <button  class="c_button" @click="onOrderDetails">订单详情</button>
            <button  class="c_button" style="margin-left:0px;" @click="onLogistics" >查看物流</button>
          </div>
        </div>
      </div>
      <div class="per_order">
        <div class="per_order_title">
          <div class="per_order_title_date">2018-10-10</div>
          <div class="per_order_title_order">订单号：15548752485115</div>
        </div>
        <div class="per_order_content">
          <img class="icon_style" src="../../../static/image/icon/honglou.jpg">
          <div class="per_order_content_productdetails">
            <div class="per_productdetails">红楼梦书籍</div>
            <div class="per_productdetails">RMB 100</div>
            <div class="per_productdetails">数量
              <span class="per_number"> x 1</span>
            </div>
          </div>
          <div class="per_order_content_price">
            <div class="per_order_content_price_details">RMB 100</div>
            <div class="per_order_content_price_details">（含运费）</div>
          </div>
          <div class="per_order_content_remark">
            <div class="per_order_content_remark_status">交易成功</div>
            <button class="c_button" @click="onOrderDetails">订单详情</button>
            <button class="c_button" style="margin-left:0px;" @click="onLogistics" >查看物流</button>
          </div>
        </div>
      </div> -->
      <div class="order_remark">暂无创建订单信息，立即<span class="buy_order_style" @click="buyGoods">购买商品</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    onLogistics(){
      this.$router.push({name:'orderlogistics'})
    },

    onOrderDetails(){
       this.$router.push({name:'productdetails'})
    },

    buyGoods(){
      this.$router.push({name:'introduce'})
    }
  }
};
</script>

<style scoped>
.c_button{
  border-radius: 4px;
}

.per_number{
  color: rgba(160, 23, 23, 0.89);
  font-weight: 600;
}

.order_layout {
  display: flex;
  justify-content: center;
}

.order_style {
  margin-top: 70px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.per_order {
  margin-top: 50px;
  width: 900px;
  height: 280px;
  border-bottom: 1px #bed0e2 solid;
 /*  border:1px #90b8df solid; */
}

.per_order_title {
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 15px;
  border-bottom: 1px #bed0e2 solid;
  /* background-color: whitesmoke; */
}

.per_order_title_date {
  margin-left: 20px;
  font-weight: 600;
}

.per_order_title_order {
  margin-left: 30px;
}

.per_order_content {
  margin-top: 20px;
  height: 180px;
  display: flex;
  justify-content: space-between;
  /* font-weight: 600; */
  
}

.icon_style {
  margin-left: 5px;
  height: 170px;
  width: 170px;
}

.per_order_content_productdetails {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 16px;
  margin-top: 20px;
  letter-spacing: 1px;
}

.per_productdetails {
  margin-top: 15px;
}

.per_productdetails_price{
  color: rgba(160, 23, 23, 0.89);
  font-weight: 600
}

.per_order_content_price {
  height: 100%;
  width: 150px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.per_order_content_price_details {
  margin-top: 15px;
}

.per_order_content_remark {
  width: 200px;
  font-size: 16px;
  margin-top: 20px;
}

.per_order_content_remark_status {
  margin-top: 15px;
  width: 80px;
  display: flex;
  justify-content: center;
  font-weight: 600;
}

.per_order_content_remark_details {
  display: flex;
  justify-content: center;
  width: 90px;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
  letter-spacing: 1px;
  padding: 6px;
  border-radius:5px;
}

.per_order_content_remark_logistic {
  display: flex;
  justify-content: center;
  width: 85px;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
}

.order_remark{
  margin-top: 45px;
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;
}

.buy_order_style{
  color: #3e86ca;
}
</style>
