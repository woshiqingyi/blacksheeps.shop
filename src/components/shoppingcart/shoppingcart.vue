<template>
  <div class="shoppingcart_layout">
    <div class="per_product">
      <div class="product_left">
        <img class="icon_style" src="../../../static/image/icon/honglou.jpg">
        <div class="product_details">
          <div class="product_title">红楼梦书籍</div>
          <div class="product_content">RMB 15</div>
          
          <div class="number_style">
            <img class="number_icon" @click="reduceNumber"  src="../../../static/image/icon/reduce.png">
            <div >数量 {{number}}</div>
            <img class="number_icon" @click="addNumber" src="../../../static/image/icon/add.png">
          </div>
      
          <div class="product_content">总金额 100</div>
        </div>
      </div>
      <div class="operation_style">移除购物车</div>
    </div>
    <!-- <div class="line_style"></div> -->
    <!-- <div class="operation_style">移除购物车</div> -->

    <!-- <div class="per_product">
      <div class="product_left">
        <img class="icon_style" src="../../../static/image/icon/honglou.jpg">
        <div class="product_details">
          <div class="product_title">红楼梦书籍</div>
          <div class="product_content">RMB 15</div>
          <div class="product_content">数量 1</div>
          <div class="product_content">总金额 100</div>
        </div>
       </div>
      <div class="operation_style">移除购物车</div>
    </div> -->

  </div>
</template>

<script>
export default {
  data(){
    return{
      number:1
    }
  },
  methods:{
    reduceNumber(){
    var number = --this.number
    if (number <= 1) number = 1
    this.number = number
  },

  addNumber(){
    var number = ++this.number
    this.number = number
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
  margin-top: 80px;
}

.per_product {
  margin-top: 30px;
  width: 800px;
  display: flex;
  background-color: whitesmoke;
  padding: 15px;
  justify-content: space-between;
}

.product_left{
  display: flex;
}

.icon_style {
  width: 240px;
  height: 240px;
  border-radius: 7px;
  padding: 8px;
}

.product_details{
  margin-top: 25px;
  margin-left: 100px;
  font-size: 15px;
  color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product_title{
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: rgb(46, 46, 46);
}

.number_style{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  width: 150px;
}

.product_content{
  margin-top: 25px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}

.number_icon{
  width: 20px;
  height: 20px;
}

.line_style{
  border-top:1px lightgray solid;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
}

.operation_style{
  display: flex;
  align-items: center;
  justify-content:center;
  margin-top: 35px;
  font-size: 16px;
  font-weight: 600;
  color: rgb(3, 92, 194);
  margin-right: 10%
}
</style>
