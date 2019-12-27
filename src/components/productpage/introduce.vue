<template>
  <div class="introduce_layout">
    <div class="introduce_style">
      <div class="introduce_goods_title">
        <!-- <div class="title_style">货架商品分类</div> -->
        <!-- <img class="icon_style" @click="DialogClassification = true" src="../../../static/image/icon/Goods.png" alt /> -->
        <div class="goods_layout">
          <div class="logo_style">
            <div>blacksheeps</div>
          </div>
          <div class="per_goods" v-for="item in GoodsMenuItems" :key="item.ID" @click="clickMenu" :id="item.ID" :style="ChooseID == item.ID?Style:''">
            <img class="icon_style" :src="item.Image" alt />
            <div class="goods_details">{{item.Name}}</div>
          </div>
           <div class="search_style">
            <img class="icon_search_style" src="../../../static/image/icon/search.png" alt />
          </div>
        </div>
      </div>

       <div class="introduce_top">
        <div class="c_main_title" style="margin-top: 30px;">简介</div>
        <div class="introduce_content">网站售卖一些闲置商品，涉及范围是家具、书籍、生活用品</div>
        <div class="introduce_content">价格合理</div>
        <div class="introduce_content" style="margin-bottom:10px;">售卖的商品所得的利润用于社会发展</div>
        <img class="icon_more" @click="DialogMoreIntroduce = true" src="../../../static/image/icon/more.png" alt/>
      </div>

      <div class="product_line_style"></div>
      <!-- <div class="introduce_goods_mini_title">生活用品类</div> -->
      <div class="introduce_goods">
        <product></product>
      </div>
      <el-dialog :center="true" top="22vh" :visible.sync="DialogMoreIntroduce" width="700px">
        <div class="introduce_more_content">网站售卖一些二手商品，涉及范围是家具、书籍、生活用品，全部都是低价出售，售卖的商品全是私人物品，无利润。</div>
      </el-dialog>
      <!-- <el-dialog title="" :center='true' top='22vh' :visible.sync="DialogClassification" width="500px" >
      </el-dialog>-->
      <!-- <transition name='fade' enter-active-class="fade-enter-active" leave-active-class="fade-leave-active">
        <div v-show="Is">hello</div>
      </transition>
      <button @click="click">点击1111</button>-->
    </div>
  </div>
</template>

<script>
import product from "@/components/productpage/product";
export default {
  components: { product },
  data() {
    return {
      Style: "color: rgb(15, 102, 184);",
      // Style: "border-bottom: 1px rgb(209, 49, 49) solid;",
      DialogMoreIntroduce: false,
      DialogClassification: false,
      ChooseID: "",
      GoodsMenuItems: [
        { Name: "书籍", ID: "1", Image: "../../../static/image/icon/book.png" },
        { Name: "礼品", ID: "2", Image: "../../../static/image/icon/techan.png" },
        { Name: "海货", ID: "3", Image: "../../../static/image/icon/haixian.png" },
        { Name: "其他", ID: "4", Image: "../../../static/image/icon/other.png" }
      ],
    };
  },

  methods: {
    click() {
      this.Is = !this.Is;
    },

    clickMenu(e) {
      this.ChooseID = e.currentTarget.id;
    }
  }
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

.introduce_top {
  margin-top:10px;
  width: 100%;
  /* height: 215px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(247, 247, 247);
  /* border-bottom: 1px rgb(131, 46, 46) solid; */
  /* border-bottom: 1px rgb(230, 230, 230) solid; */
  /* background-color: rgb(248, 244, 240); */
  /* background-color: rgb(241, 240, 236); */
}

.introduce_content {
  margin-top: 20px;
  font-size: 15px;
  letter-spacing: 2px;
}

/* .product_line_style {
  margin-top: 10px;
  margin-bottom: 15px;
  border-top: 1px rgb(219, 219, 219) solid;
  width: 500px;
} */

/* .line_style {
  margin-top: 15px;
  border-top: 1px rgb(219, 219, 219) solid;
  width: 300px;
} */
.introduce_goods_title {
  /* margin-top: 10px; */
  /* border-top: 1px rgb(165, 165, 165) solid; */
  height: 85px;
  width: 100%;
  /* margin-bottom: 20px; */
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   background-color: rgb(247, 247, 247);
  /* border-bottom: 1px rgb(212, 212, 212) solid; */
  /* border-radius: 5px; */
  /* border: 1px rgb(107, 153, 196) solid; */
}

.goods_layout {
  margin-top: 15px;
  display: flex;
  width: 750px;
  display: flex;
  justify-content: space-around;
  /* background-color: whitesmoke; */
  padding: 8px;
}

.per_goods {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  cursor: pointer;
  /* border-bottom: 1px rgb(165, 165, 165) solid; */
}

.logo_style {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  font-size: 13px;
  color: rgb(15, 102, 184);
}

.search_style {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  cursor: pointer;
}

.icon_search_style {
  width: 20px;
  height: 20px;
}

.goods_details {
  font-size: 13px;
  font-weight: 500;
  margin-top: 7px;
}

.introduce_more_content {
  height: 200px;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 30px;
  color: gray;
}

.icon_style {
  height: 27px;
}

.introduce_goods_mini_title {
  /* margin-bottom: 15px; */
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  letter-spacing: 2px;
  background-color: #6c9fce;
  color: white;
}

.title_style {
  color: rgb(2, 66, 138);
}

.introduce_goods {
  /* overflow:hidden;
  overflow-y: scroll;
  height: 500px; */
  margin-top: 40px;
  width: 85%;
  max-width: 1300px;
  background-color: whitesmoke;
  /* border: 1px rgb(212, 212, 212) solid; */
}

.icon_more {
  width: 34px;
  margin-bottom: 10px;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1.5s;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 1.5s;
}
</style>
