<template>
 <div>
  <div class="product_layout">
    <div class="per_product" >
      <div class="per_mini_product" id="1" :style="id1 == ChoosedID?Style1:Style2" @mouseenter="showMouse" @mouseleave="hiddenMouse" @click="getProductDetails">
        <img class="image_style" src="../../../static/image/icon/honglou.jpg" alt="">
        <div class="per_product_content">
          <div class="per_product_title">{{data1}}</div>
          <div class="per_product_price">RMB
            <span class="per_price_number">1000</span> 
          </div>
        </div>
      </div>
    </div>

    <div class="per_product" >
      <div class="per_mini_product" id="2" :style="id2 == ChoosedID?Style1:Style2" @mouseenter="showMouse" @mouseleave="hiddenMouse" @click="getProductDetails">
        <img class="image_style" src="../../../static/image/icon/honglou.jpg" alt="">
        <div class="per_product_content">
          <div class="per_product_title">{{data1}}</div>
          <div class="per_product_price">RMB
            <span class="per_price_number">1000</span> 
          </div>
        </div>
      </div>
    </div>

    <div class="per_product" >
      <div class="per_mini_product" id="3" :style="id3 == ChoosedID?Style1:Style2" @mouseenter="showMouse" @mouseleave="hiddenMouse" @click="getProductDetails">
        <img class="image_style" src="../../../static/image/icon/honglou.jpg" alt="">
        <div class="per_product_content">
          <div class="per_product_title">{{data1}}</div>
          <div class="per_product_price">RMB
            <span class="per_price_number">1000</span> 
          </div>
        </div>
      </div>
    </div>

    



  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
     data1:'红楼梦',
     ChoosedID:'',
     id1:'1',
     id2:'2',
     id3:'3',
     Style1:'box-shadow:0 0 12px 3px rgb(219, 219, 219),2px 2px 12px 3px rgb(223, 223, 223);transition:all 0.2s linear;transform: translate3d(0,-0.5%,0);',
     Style2:'transition:all 0.2s linear;transform: translate3d(0,0,0);'
    }
  },

  created() {
    // var Width = document.documentElement.clientWidth;
    // if (Width > 500) Width = 500;
    // var baseFontSize = (Width * 100) / 750;
    // document.documentElement.style.fontSize = baseFontSize + "px";

    var Width = document.documentElement.clientWidth;
    
  
    
  },

  methods:{
    getProductDetails(){
      this.$router.push({name:'productdetails'})
    },

    showMouse(e){
      console.log('e',e.target.id)
      this.ChoosedID = e.target.id
    },

    hiddenMouse(){
     this.ChoosedID = ''
    }
  }
};
</script>
<style scoped>

.product_layout {
  display: flex;
  flex-wrap: wrap;
  background-color: white;
}

.per_product {
  width: 33.3%;
  height: 320px;
  /* height: 320px; */
  /* border-top: 1px rgb(182, 208, 238) solid;
  border-bottom: 1px rgb(182, 208, 238) solid; */
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.per_mini_product {
  /* height: 300px;
  width: 400px; */
  height: 95%;
  width: 95%;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
 
}
 /* box-shadow:0 0 12px 3px rgb(219, 219, 219),2px 2px 12px 3px rgb(223, 223, 223); */

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
  font-size: 15.5px;
 
}

.per_product_price{
  margin-left: 10px;
  font-size: 15.5px;
}

.per_price_number{
  color: rgba(160, 23, 23, 0.89);
}

</style>
