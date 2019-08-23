<template>
  <div class="product_details_layout">
    <div class="product_details">
      <div class="product_title">商品详情</div>
      
      <div class="product_layout">
        <div class="per_product_image">
          <img class="product_image_details" src="../../../static/image/icon/product.png" alt="">
        </div>
        <div class="per_product_image">
          <img class="product_image_details" src="../../../static/image/icon/product.png" alt="">
        </div>
        <!-- <div class="per_product_image">
          <img class="product_image_details" src="../../../static/image/icon/product.png" alt="">
        </div>
        <div class="per_product_image">
          <img class="product_image_details" src="../../../static/image/icon/product.png" alt="">
        </div> -->
      </div>
      <div class="product_remark">（实拍样张）</div>
      <div class="product_introduce">（此书18年入手，九成新，原定价格为50RMB）</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.product_details_layout {
  display: flex;
  justify-content: center;
}

.product_details {
  margin-top: 60px;
  width: 700px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
    
.product_title {
  font-size: 25px;
  font-weight: 600;
}

.product_remark{
  margin-top: 20px;
  font-size: 15px;
  font-weight: 600;
  color: gray;
}

.product_introduce{
  margin-top: 20px;
  font-size: 17px;
  color: gray;
}

.product_layout{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.per_product_image{
  margin-top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.product_image_details{
  width: 250px;
  height: 250px;;
  border-radius: 15px;
}
</style>
