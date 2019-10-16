<template>
  <div class="shoppingcart_layout">
    <div class="per_product_title">
      <div class="c_main_title">购物车的所有的商品</div>
      <div class="per_product_remark">所有订单均可享受免费送货和退货服务</div>
    </div>
   <!--  <div class="line_style"></div> -->
    <div class="per_product">
      <div class="product_left">
        <img class="icon_style" src="../../../static/image/icon/honglou.jpg">
        <div class="product_details">
          <div class="product_title">红楼梦书籍</div>
          <div class="product_content">RMB 15</div>
          <div class="number_style">
            <img
              class="number_icon"
              @click="reduceNumber"
              src="../../../static/image/icon/reduce.png"
            >
            <div>数量 {{number}}</div>
            <img class="number_icon" @click="addNumber" src="../../../static/image/icon/add.png">
          </div>
          <div class="product_content">总金额 100</div>
        </div>
      </div>
      <div class="operation_style">移除购物车</div>
    </div>
    <div class="per_product">
      <div class="product_left">
        <img class="icon_style" src="../../../static/image/icon/honglou.jpg">
        <div class="product_details">
          <div class="product_title">红楼梦书籍</div>
          <div class="product_content">RMB 15</div>
          <div class="number_style">
            <img
              class="number_icon"
              @click="reduceNumber"
              src="../../../static/image/icon/reduce.png"
            >
            <div>数量 {{number}}</div>
            <img class="number_icon" @click="addNumber" src="../../../static/image/icon/add.png">
          </div>
          <div class="product_content">总金额 100</div>
        </div>
      </div>
      <div class="operation_style">移除购物车</div>
    </div>
    <div class="settlement_style">
      <div class="payment_style">
        <div>RMB 1000</div>
        <el-button type="mini" class="button_style">结算</el-button>
      </div>
      <div class="freight_style">（含运费 5RMB）</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 1
    };
  },
  methods: {
    reduceNumber() {
      var number = --this.number;
      if (number <= 1) number = 1;
      this.number = number;
    },

    addNumber() {
      var number = ++this.number;
      this.number = number;
    }
  }
};
</script>

<style scoped>
.shoppingcart_layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.per_product_title {
  width: 830px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.per_product_remark {
  margin-top: 20px;
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: 500
}

.line_style{
  margin-top: 15px;
  border-top: 1px rgb(226, 226, 226) solid;
  width: 500px;
}

.per_product {
  margin-top: 30px;
  width: 800px;
  height: 220px;
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
  /* border-top:1px rgb(226, 226, 226) solid;
  border-bottom:1px rgb(226, 226, 226) solid; */
  border-top: 1px #bed0e2 solid;
  border-bottom: 1px #bed0e2 solid;
}

.product_left {
  display: flex;
}

.icon_style {
  width: 210px;
  height: 210px;
  border-radius: 7px;
  padding: 8px;
}

.product_details {
  margin-top: 25px;
  margin-left: 100px;
  font-size: 15px;
  color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product_title {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: rgb(46, 46, 46);
}

.number_style {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  width: 150px;
}

.product_content {
  margin-top: 25px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}

.number_icon {
  width: 20px;
  height: 20px;
}

.operation_style {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  font-size: 16px;
  font-weight: 600;
  color: #3e86ca;
  margin-right: 10%;
  cursor: pointer;
}

/* .line_style{
  border-top: 1px rgb(196, 196, 196) solid;
  width: 880px;
  margin-top: 20px;
} */

.settlement_style {
  margin-top: 20px;
  width: 830px;
  height: 100px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.freight_style {
  display: flex;
  font-size: 15px;
  font-weight: 600;
  margin-right: 35px;
  color: gray;
}

.payment_style {
  margin-right: 10%;
  font-weight: 600;
  font-size: 20px;
}

.button_style {
  width: 100px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
}
</style>
