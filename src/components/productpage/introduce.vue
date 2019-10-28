<template>
  <div class="introduce_layout">
    <div class="introduce_style">
      <div class="introduce_top">
        <div class="c_main_title" style="margin-top: 35px;">简介</div>
        <div class="introduce_content" >网站售卖一些二手商品，涉及范围是家具、书籍、生活用品</div>
        <div class="introduce_content">低价出售</div>
        <div class="introduce_content" style="margin-bottom:10px;">售卖的商品全是私人物品</div>
      </div>
      <!-- <div class="line_style"></div> -->
      <div class="introduce_goods_title">货架上所有商品</div>
      <div class="introduce_goods_mini_title">（生活用品类）</div>
      <div class="introduce_goods">
         <product></product>
      </div>
    </div>
    
  </div>
</template>

<script>
import product from "@/components/productpage/product";
export default {
   components: { product },
};
</script>

<style scoped>
.introduce_layout {
  display: flex;
  justify-content: center;
}

.introduce_style {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.introduce_top{
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(240, 240, 240);
  border-bottom: 1px rgb(182, 208, 238) solid;
  /* border-bottom: 1px rgb(230, 230, 230) solid; */
  /* background-color: rgb(248, 244, 240); */
  /* background-color: rgb(241, 240, 236); */
}

.introduce_content{
  margin-top: 20px;
  font-size: 15px;
  letter-spacing: 2px;
}

.line_style{
  margin-top: 15px;
  border-top: 1px rgb(219, 219, 219) solid;
  width: 300px;
}

.introduce_goods_title{
  margin-top: 25px;
  margin-bottom: 30px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
}

.introduce_goods_mini_title{
  margin-bottom: 15px;
  font-size: 17px;
  font-weight: 600;
  display: flex;
  justify-content:center;
  color: #1468b6;

}

.introduce_goods {
  /* overflow:hidden;
  overflow-y: scroll;
  height: 500px; */
  width: 85%;
  max-width: 1300px;
  background-color: whitesmoke;
  /* border: 1px rgb(212, 212, 212) solid; */
}

</style>
