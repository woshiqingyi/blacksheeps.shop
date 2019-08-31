<template>
  <div class="order_payment">
    <div class="order_payment_layout">
      <div class="order_payment_title">为你将要购买的商品进行付款</div>
      <div class="order_payment_remark">所有的商品在活动期间有一定的优惠</div>
      <div class="line_style"></div>
      <div class="receive_address">
        <div class="receive_address_title">请选择你的收货地址</div>
        <div class="receive_address_lists">
          <button
            class="per_receive_address_lists"
            @click="chooseAddress"
            v-for="item in AddressItems"
            :key="item.ID"
            :id="item.ID"
            :style="ChooseID == item.ID ? ClickStyle:''"
          >
            {{item.Name}} {{item.Address}} {{item.Tel}}
            <span class="image_style">
              <img :src="Tick" v-show="ChooseID == item.ID ? true: false">
            </span>
          </button>
        </div>
      </div>
      <div class="payment_title">支付方式</div>
      <div class="line_style"></div>
      <div class="payment_layout">
        <button
          class="per_payment"
          v-for="item in PayItems"
          :key="item.ID"
          :id="item.ID"
          :style="PayID == item.ID?BorderStyle:''"
          @click="choosePay"
        >
          <img :id="item.ID" @click="choosePay" :src="item.Image">
        </button>
      </div>
      <div class="delivery_title">送货清单</div>
      <div class="delivery_layout">
        <div class="per_delivery">
          <div class="per_delivery_logistics">
            <div class="logistics_details_title">配送方式（默认）</div>
            <div class="logistics_details_style">
              顺丰快递
              <img class="logistics_image" :src="Tick">
            </div>
            <div class="logistics_details">预计2019.8.31送达</div>
          </div>
          <div class="per_delivery_goods">
            <img class="per_goods_image" :src="Book">
            <div class="per_goods_content">
              <div class="per_goods_content_deatils_title">红楼梦</div>
              <div class="per_goods_content_deatils">RMB 15</div>
              <div class="per_goods_content_deatils">数量 1</div>
              <div class="per_goods_content_deatils">总金额 100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BorderStyle: "border:1px #3e86ca solid",
      ChooseID: "0",
      PayID: "1",
      ClickStyle: "color:#3e86ca",
      Book: "../../../static/image/icon/honglou.jpg",
      Tick: "../../../static/image/icon/tick.png",
      PayItems: [
        {
          ID: 0,
          Image: "../../../static/image/icon/weixin.png"
        },
        {
          ID: 1,
          Image: "../../../static/image/icon/zhifubao.png"
        }
      ],
      AddressItems: [
        {
          ID: "0",
          Name: "郑晓峰",
          Address: "福建省 晋江市 券商环球广场 2001 益企盈",
          Tel: "18861828564"
        },
        {
          ID: "1",
          Name: "郑晓峰",
          Address: "福建省 晋江市 券商环球广场 2001 益企盈",
          Tel: "18861828564"
        }
      ]
    };
  },
  methods: {
    chooseAddress(e) {
      this.ChooseID = e.target.id;
    },
    choosePay(e) {
      console.log("e", e.target.id);
      this.PayID = e.target.id;
    }
  }
};
</script>

<style scoped>
.order_payment {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.order_payment_layout {
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: whitesmoke; */
  width: 1100px;
  height: 800px;
}

.order_payment_title {
  font-size: 20px;
  font-weight: 600;
}

.order_payment_remark {
  margin-top: 20px;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 500;
}

.image_style {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
}

.line_style {
  margin-top: 30px;
  border-top: 1px rgb(230, 230, 230) solid;
  width: 500px;
}

.receive_address {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.receive_address_title {
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 600;
}

.payment_title {
  margin-top: 20px;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 600;
}

.payment_layout {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 300px;
}

.per_payment {
  border: 1px rgb(230, 230, 230) solid;
  border-radius: 7px;
  padding: 10px;
  background-color: white;
}

.delivery_title {
  margin-top: 40px;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 600;
}

.delivery_layout {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.per_delivery {
  display: flex;
  height: 138px;
}

.logistics_details_title {
  font-size: 15px;
  font-weight: 600;
  margin-left: 20px;
}

.logistics_details_style {
  margin-top: 10px;
  margin-left: 20px;
  color: #3e86ca;
  display: flex;
  align-items: center;
}

.logistics_image {
  margin-left: 10px;
}

.per_delivery_logistics {
  width: 240px;
  background-color: whitesmoke;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logistics_details {
  margin-top: 10px;
  margin-left: 20px;
  font-size: 14px;
}

.per_delivery_goods {
  width: 500px;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.per_goods_image {
  height: 110px;
  width: 110px;
}

.per_goods_content {
  margin-left: 10px;
}

.per_goods_content_deatils_title{
  font-size: 17px;
  font-weight: 600;
  color: rgb(46, 46, 46);
}

.per_goods_content_deatils{
  color: rgb(80, 80, 80);
  margin-top: 7px;
  font-size: 15px;
}

.receive_address_lists {
  margin-top: 20px;
  width: 700px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.per_receive_address_lists {
  background-color: whitesmoke;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 7px;
  font-size: 15px;
  color: gray;
  display: flex;
  align-items: center;
}
</style>
