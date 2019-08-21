<template>
 <div>
  <div class="product_layout">

    <div class="per_product">
      <div class="per_mini_product" @click="getProductDetails">
        <img class="image_style" src="../../../static/image/icon/honglou.jpg" alt="">
        <div class="per_product_content">
          <div class="per_product_title">红楼梦</div>
          <div class="per_product_price">RMB 1000</div>
        </div>
      </div>
    </div>

    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>

    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>

    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>

    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>

    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>

    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>

  </div>


  </div>
</template>

<script>
export default {
  data(){
    return{
     
    }
  },
  methods:{
    getProductDetails(){
      this.$router.push({name:'productdetails'})
    }
  }
};
</script>
<style scoped>

.product_layout {
  display: flex;
  flex-wrap: wrap;
}

.per_product {
  width: 33.3%;
  height: 320px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
}

.per_mini_product {
  height: 300px;
  width: 400px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
}

.image_style{
  height: 230px;
  width:230px;
}

.per_product_content{
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

}

.per_product_title{
  font-size: 16px;
  font-weight: 600;
}

.per_product_price{
  margin-left: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #3e86ca;
}

</style>
