<template>
  <div class="shoppingcart_layout">
    <div class="per_product">
      <img class="icon_style" src="../../../static/image/icon/honglou.jpg">


      <div class="product_details">
        <div class="product_title">红楼梦书籍</div>
        <div class="product_content">RMB 15</div>
        <div class="product_content">数量 1</div>
        <div class="product_content">总金额 100</div>
        <div class="line_style"></div>
        <div class="operation_style">移除购物车</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shoppingcart_layout {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
}

.per_product {
  width: 800px;
  display: flex;
}

.icon_style {
  width: 260px;
  height: 260px;
  
  border-radius: 7px;
  padding: 8px;
}

.product_details{
  margin-top: 20px;
  margin-left: 20px;
  font-size: 15px;
  color: gray;
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 260px;;
  
}

.product_title{
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: rgb(46, 46, 46);
}

.product_content{
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
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
  color: rgb(3, 92, 194)
}




</style>
