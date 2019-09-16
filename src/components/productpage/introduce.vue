<template>
  <div class="introduce_layout">
    <div class="introduce_style">
      <div class="introduce_top">
        <div class="c_main_title">简介</div>
        <div class="introduce_content" >网站售卖一些二手商品，涉及范围是家具、书籍、生活用品</div>
        <div class="introduce_content">低价出售</div>
        <div class="introduce_content">售卖的商品全是私人物品</div>
        <div class="line_style"></div>
      </div>
      <div class="introduce_goods_title">货架上所有商品</div>
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
  /* border: 1px gray solid;
  height: 700px; */
  width: 1300px;
  margin-top: 20px;
}

.introduce_top{
  margin-top: 15px;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
}

.introduce_goods {
  overflow:hidden;
  overflow-y: scroll;
  height: 500px;
  margin-top: 30px;
  width: 100%;
  background-color: whitesmoke;
  /* border: 1px rgb(212, 212, 212) solid; */
}

</style>
