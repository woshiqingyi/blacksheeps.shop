<template>
  <div class="product_details_layout">
    <div class="product_details">
      <div class="product_title">商品详情</div>
      <div class="change_button_layout" @click='chageImage'>
        <div  class="change_button" type="text" >缩 放</div>
        <img class="icon_style" src="../../../static/image/icon/da.png" alt="">
      </div>
      <div class="product_layout">
        <div class="per_product_image" :style="ImageStyle">
          <img class="product_image_details" :style="ProductImage" src="../../../static/image/icon/product.png" alt>
        </div>
        <div class="per_product_image" :style="ImageStyle">
          <img class="product_image_details" :style="ProductImage" src="../../../static/image/icon/product.png" alt>
        </div>
        <div class="per_product_image" :style="ImageStyle">
          <img class="product_image_details" :style="ProductImage" src="../../../static/image/icon/product.png" alt="">
        </div>
        <div class="per_product_image" :style="ImageStyle">
          <img class="product_image_details" :style="ProductImage" src="../../../static/image/icon/product.png" alt="">
        </div>
      </div>
      <div class="product_remark">（实拍样张）</div>
      <div class="product_introduce">（此书18年入手，九成新，原定价格为50RMB）</div>

      <div class="line_style"></div>

      <div class="pay_layout">
        <div class="amount_layout">
          <span class="amount_style">价格：</span>
          <span class="price_style">1000</span>
        </div>

      <!--   <transition name="fade">
           <div class="per_product_image" v-show="Show">
              <span class="price_style">1000</span>
            </div>
        </transition>

        <button @click="click">点击</button> -->
           

        <div class="button_layout">
          <el-button type="mini" class="button_style1" @click="addShoppingCart" style="margin-right:15px;">添入购物车</el-button>
          <el-button type="mini" class="button_style2" @click="payGoods">直接购买</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      Show:false,
      ImageStyle:'width:100%',
      ProductImage:'width: 100%;height: 100%;border-radius: 15px;'
    }
  },
  methods:{
    click(){
      this.Show = !this.Show
    },

    payGoods(){
      this.$router.push({name:'orderpayment'})
    },

    addShoppingCart(){
      this.$router.push({name:'shoppingcart'})
    },

    chageImage(){
      if(this.ImageStyle == 'width:100%'){
        this.ImageStyle = 'width:50%'
        this.ProductImage = 'width: 250px;height: 250px;border-radius: 15px;'
      }else{
        this.ImageStyle = 'width:100%'
        this.ProductImage = 'width: 100%;height: 100%;border-radius: 15px;'
      }
      
    }
      
  }
};
</script>
<style scoped>
.product_details_layout {
  display: flex;
  justify-content: center;
}

.product_details {
  margin-top: 60px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product_title {
  font-size: 23px;
  font-weight: 600;
}

.product_remark {
  margin-top: 20px;
  font-size: 15px;
  font-weight: 600;
  color: gray;
}

.product_introduce {
  margin-top: 20px;
  font-size: 17px;
  color: gray;
}

.product_layout {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.per_product_image {
  margin-top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.change_button_layout{
  margin-top: 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.change_button{
  color: gray;
  font-weight: 600;
}

.icon_style{
  margin-left: 5px;
  height: 12px;
  width: 12px;
}

.product_image_details {
  width: 250px;
  height: 250px;
  border-radius: 15px;
}

.line_style{
  margin-top: 25px;
  width:100%;
  border-top: 1px rgb(214, 214, 214) solid;
}

.pay_layout {
  display: flex;
  flex-direction:column;
  align-items:flex-end;
  margin-top: 20px;
  width: 88%;
}

.amount_layout{
  display: flex;
  font-weight: 600;
  margin-right: 7px;
}

.amount_style{
  font-size: 17px;
}

.price_style{
  color: #3e86ca;
  font-size: 19px;
}

.button_layout {
  margin-top: 15px;
  margin-bottom: 30px;
  display: flex;
}

.button_style2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 120px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
}

.button_style1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 120px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  background-color: white;
  color: #3e86ca;
  /* border: 1px #3e86ca solid; */
}

.fade-enter{
  opacity: 0;
}

.fade-enter-active{
  transition: opacity 1.5s;
}

.fade-leave-to{
  opacity: 0;
}

.fade-leave-active{
  transition: opacity 1.5s;
}

</style>
