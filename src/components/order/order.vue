<template>
  <div class="order_layout">
    <div class="order_style">
      <div class="c_main_title">已购买商品的详情信息</div>
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
            <div class="per_productdetails">数量 x 1</div>
          </div>
          <div class="per_order_content_price">
            <div class="per_order_content_price_details">RMB 100</div>
            <div class="per_order_content_price_details">（含运费）</div>
          </div>
          <div class="per_order_content_remark">
            <div class="per_order_content_remark_status">交易成功</div>
            <el-button type="mini" class="per_order_content_remark_details">订单详情</el-button>
            <el-button type="mini" class="per_order_content_remark_details" style="margin-left:0px;" @click="onLogistics" >查看物流</el-button>
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
            <div class="per_productdetails">数量 x 1</div>
          </div>
          <div class="per_order_content_price">
            <div class="per_order_content_price_details">RMB 100</div>
            <div class="per_order_content_price_details">（含运费）</div>
          </div>
          <div class="per_order_content_remark">
            <div class="per_order_content_remark_status">交易成功</div>
            <el-button type="mini" class="per_order_content_remark_details">订单详情</el-button>
            <el-button type="mini" style="margin-left:0px;" @click="onLogistics" class="per_order_content_remark_details">查看物流</el-button>
          </div>
        </div>
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
    }
  }
};
</script>

<style scoped>
.order_layout {
  display: flex;
  justify-content: center;
}

.order_style {
  margin-top: 70px;
  width: 1000px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.per_order {
  margin-top: 30px;
  width: 900px;
  border: 1px rgb(238, 238, 238) solid;
}

.per_order_title {
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 15px;
  background-color: whitesmoke;
}

.per_order_title_date {
  margin-left: 20px;
  font-weight: 600;
}

.per_order_title_order {
  margin-left: 30px;
}

.per_order_content {
  height: 180px;
  display: flex;
  justify-content: space-between;
  /* font-weight: 600; */
  
}

.icon_style {
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
  padding: 8px;
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
</style>
