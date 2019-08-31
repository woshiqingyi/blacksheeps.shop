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
          >{{item.Name}} {{item.Address}} {{item.Tel}}</button>
        </div>
      </div>
      <div class="payment_title">支付方式</div>
      <div class="payment_layout">
        <button
          class="per_payment"
          v-for="item in PayItems"
          :key="item.ID"
          :id="item.ID"
          :style="PayID == item.ID?BorderStyle:''"
          @click="choosePay"
        >
          <img :id="item.ID" @click="choosePay" :src="item.Image" />
        </button>
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
      console.log('e',e.target.id)
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
}
</style>
