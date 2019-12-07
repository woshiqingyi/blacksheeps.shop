<template>
  <div class="order_payment">
    <div class="order_payment_layout">
      <div class="c_main_title">为你将要购买的商品进行付款</div>
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
            <span :id="item.ID"  class="image_style">
              <img :id="item.ID" :src="Tick" v-show="ChooseID == item.ID ? true: false">
            </span>
          </button>
          <button class="c_button" style="padding:4px;font-size:13px;height:30px;width:100px;" @click="addAddress">新增地址</button>
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
      <div class="delivery_title">我的送货清单</div>
   
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

            </div>
            <div class="per_goods_content_amount">金额：
              <span style="color: red">  100</span>
              </div>
          </div>
        </div>
      </div>

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
            </div>
            <div class="per_goods_content_amount">金额：
              <span style="color: red">  100</span>
              </div>
          </div>
        </div>
      </div>

      <div class="pay_details">
        <div class="pay_details_layout">
          <div class="per_pay_details">
            <div class="per_pay_details_title">总商品金额：</div>
            <div class="per_pay_details_content">100</div>
          </div>
          <div class="per_pay_details">
            <div class="per_pay_details_title">运费：</div>
            <div class="per_pay_details_content">100</div>
          </div>
        </div>
      </div>

      <div class="last_line_style"/>
      <div class="pay_amount">
        <div class="pay_amount_layout">
          <div class="pay_amount_title">应付总金额：</div>
          <div class="pay_amount_content">1000</div>
        </div>
        <div class="pay_amount_layout">
          <div class="pay_amount_address">寄送至： 福建省 泉州市 晋江市 陈埭镇 江滨南路泉商投资大厦2002汇创网融 收货人 郑晓峰 18861828564</div>
        </div>
        <div class="pay_amount_layout">
           <button class="c_button">支付</button>
        </div>
      </div>
    </div>

    <el-dialog title="提示" :visible.sync="DialogAddress" width="450px" center>
      <span>需要注意的是内容是默认不居中的</span>
      <div class="button_layout">
        <button class="c_button" style='margin-right:10px;'  @click="DialogAddress = false">取 消</button>
        <button class="c_button"  @click="DialogAddress = false">确 定</button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
export default {
  data() {
    return {
      DialogAddress:false,
      BorderStyle: "border:1px #3e86ca solid",
      ChooseID: "0",
      PayID: "0",
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
      console.log('e',e.target.id)
      this.ChooseID = e.target.id;
    },
    choosePay(e) {
      console.log("e", e.target.id);
      this.PayID = e.target.id;
    },
    addAddress(){
      this.DialogAddress = true;
    }
  }
};
</script>

<style scoped>
.c_button{
  padding:6px;
}

.button_layout{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

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
  width: 1100px;
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
  border:1px rgb(214, 214, 214) solid;
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
  width: 200px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right:1px rgb(219, 219, 219) solid;
  /* border-left: 1px rgb(219, 219, 219) solid;
  border-bottom: 1px rgb(219, 219, 219) solid; */
}

.logistics_details {
  margin-top: 10px;
  margin-left: 20px;
  font-size: 14px;
}

.per_delivery_goods {
  width: 540px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
}

.per_goods_image {
  height: 110px;
  width: 110px;
}

.per_goods_content {
  margin-left: 10px;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 85px;
}

.per_goods_content_deatils_title{
  font-size: 17px;
  font-weight: 600;
  color: rgb(46, 46, 46);
}

.per_goods_content_deatils{
  color: rgb(80, 80, 80);
  font-size: 15px;
}

.per_goods_content_amount{
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:15px;
  font-weight:600;
  height: 85px;
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

.pay_details {
  width:600px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.pay_details_layout {
  margin-top: 10px;
}

.per_pay_details {
  font-size: 14px;
  color: rgb(107, 107, 107);
  margin-top: 7px;
  display: flex;
  letter-spacing: 1px;
}

.per_pay_details_title {
  width: 100px;
  display: flex;
  justify-content: flex-end;
}

.per_pay_details_content {
  width: 40px;
}

.last_line_style {
  margin-top: 25px;
  border-top: 1px rgb(230, 230, 230) solid;
  width: 750px;
}

.pay_amount{
  margin-top: 20px;
  width: 720px;
  display: flex;
  flex-direction: column;
  align-items:flex-end;
  padding: 15px;
  border: 1px lightgray solid;

}

.pay_amount_layout{
  margin-right: 60px;
  margin-top: 10px;
  display: flex;
}

.pay_amount_address{
  font-size: 13px;
}

.pay_amount_title{
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
}

.pay_amount_content{
  color: red;
  width: 40px;
  font-weight: 600;
}

.button_style {
  display: flex;
  justify-content: center;
  width: 90px;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
  letter-spacing: 1px;
  padding: 9px;
}

.add_address_button{
  width: 60px;
  margin-top: 5px;
  font-size: 13px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
}

.address_button_style{
  display: flex;
  justify-content: center;
  width: 90px;
  font-size: 13px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
  letter-spacing: 1px;
  padding: 8px;
}
</style>
