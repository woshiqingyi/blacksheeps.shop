<template>
  <div class="product_details_layout">
    <div class="product_details">
      <div class="product_title">商品详情</div>
      <img class="product_image_details" src="../../../static/image/icon/product.png" alt="">
      <!-- <img class="image_style" src="../../../static/image/icon/honglou.jpg" alt=""> -->
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
  margin-top: 70px;
  width: 1000px;
  height: 2000px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
}
    
.product_title {
  margin-top: 20px;
  font-size: 25px;
  font-weight: 600;
}

.product_image_details{
  margin-top: 45px;
  width: 300px;
  height: 300px;;
  border-radius: 15px;
}
</style>
