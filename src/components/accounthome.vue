<template>
  <div class="account_home">
    <div class="c_main_title">账户信息</div>
    <div class="account_home_mini_title">编辑修改你的信息</div>
    <div class="line_style"></div>

    <div class="per_account_layout">
      <div class="per_account_title">个人信息</div>
      <div class="per_account_content">
        <div class="per_info">用户名：{{PersonInfo.UserInfo.username}}</div>
        <!--   <div class="per_info">性别：男</div>
        <div class="per_info">城市：泉州</div>-->
        <div class="per_info">密码：**********</div>
        <div class="per_info">邮箱：{{PersonInfo.UserInfo.email}}</div>
        <el-button type="text" @click="PersonInfo.dialogAccountInfo = true">编辑</el-button>
        
      </div>
    </div>

    <!--  <div class="per_account_layout">
      <div class="per_account_title">账号绑定</div>
      <div class="per_account_content">
        <div class="per_info">邮箱：1355224991@qq.com</div>
        <div class="per_info">号码：18861828564</div>
        <div class="per_info">密码：**********</div>
        <el-button type="text" @click="PersonInfo.dialogBindAccount = true">编辑</el-button>
      </div>
    </div>-->

    <div class="per_account_layout">
      <div class="per_account_title">收货地址</div>
      <div class="per_account_content_layout">
        <div>
          <el-button  type="text" @click="addReceiver">新增</el-button>
        </div>
        <div
          class="per_account_content_address"
          v-for="item in PersonInfo.Shippinglist"
          :key="item.id"
        >
          <div class="per_info">姓名：{{ item.receiverName }}</div>
          <div class="per_info">联系号码：{{ item.receiverPhone }}</div>
          <div class="per_info" style="line-height:25px;margin-top:7px;">
            联系地址：{{ item.receiverProvince }} {{ item.receiverCity }}
            {{ item.receiverDistrict }} {{ item.receiverAddress }}
          </div>
          <div class="per_info">邮政编码：{{ item.receiverZip }}</div>
          <el-button type="text" @click="editReceiver(item)">编辑</el-button>
          <el-button type="text" @click="deleteReceiver(item.id)">删除</el-button>
          <div>
           <!--  {{index}} -->
           <!--  <el-button v-if="index == PersonInfo.Shippinglist.length-1" type="text" @click="deleteReceiver(item.id)">新增</el-button> -->
          </div>
        </div>
      </div>
    </div>

   
    <!--  <div class="per_account_layout">
      <div class="per_account_title">收货地址</div>
      <div v-for="item in PersonInfo.Shippinglist" :key="item.id">
        <div class="per_account_content">
          <div class="per_info">姓名：{{item.receiverName}}</div>
          <div class="per_info">联系号码：{{item.receiverPhone}}</div>
          <div
            class="per_info"
            style="line-height:25px;margin-top:7px;"
          >联系地址：{{item.receiverProvince}} {{item.receiverCity}} {{item.receiverDistrict}} {{item.receiverAddress}}</div>
          <el-button type="text" @click="PersonInfo.dialogReceiveAddress = true">编辑</el-button>
        </div>
      </div>
    </div>-->

    <el-dialog
      title="编辑个人信息"
      :center="true"
      top="22vh"
      :visible.sync="PersonInfo.dialogAccountInfo"
      width="550px"
    >
      <div class="per_input_layout" style="margin-top:0px;">
        <div class="per_input_title">昵称</div>
        <el-input
          type="text"
          v-model="PersonInfo.nickname"
          placeholder="请输入昵称"
          style="width:370px;"
        ></el-input>
      </div>
      <div class="per_input_layout">
        <div class="per_input_title">性别</div>
        <el-select v-model="PersonInfo.gender" placeholder="请选择性别" style="width:145px;">
          <el-option
            v-for="item in GenderItems"
            :key="item.Code"
            :value="item.Code"
            :label="item.Name"
          ></el-option>
        </el-select>
        <div class="per_input_title">城市</div>
        <el-select v-model="PersonInfo.city" placeholder="请选择性别" style="width:145px;">
          <el-option
            v-for="item in ProvinceItems"
            :key="item.Code"
            :value="item.Code"
            :label="item.Name"
          ></el-option>
        </el-select>
      </div>
      <div class="button_layout">
        <button
          type="text"
          class="c_button"
          style="margin-right:10px;"
          @click="PersonInfo.dialogAccountInfo = false"
        >关闭</button>
        <button type="text" class="c_button" @click="PersonInfo.dialogAccountInfo = false">确认</button>
      </div>
    </el-dialog>

    <el-dialog
      title="编辑账户绑定"
      :center="true"
      top="22vh"
      :visible.sync="PersonInfo.dialogBindAccount"
      width="550px"
    >
      <div class="per_input_layout">
        <div class="per_input_title" style="margin-top:0px;">邮箱</div>
        <el-input
          type="text"
          v-model="PersonInfo.nickname"
          placeholder="请输入昵称"
          style="width:370px;"
        ></el-input>
      </div>
      <div class="per_input_layout">
        <div class="per_input_title">手机号码</div>
        <el-input
          type="text"
          v-model="PersonInfo.nickname"
          placeholder="请输入昵称"
          style="width:370px;"
        ></el-input>
      </div>
      <div class="per_input_layout">
        <div class="per_input_title">密码</div>
        <el-input
          type="text"
          v-model="PersonInfo.nickname"
          placeholder="请输入昵称"
          style="width:370px;"
        ></el-input>
      </div>
      <div class="button_layout">
        <button
          type="text"
          class="c_button"
          @click="PersonInfo.dialogBindAccount = false"
          style="margin-right:10px;"
        >关闭</button>
        <button type="text" class="c_button" @click="PersonInfo.dialogBindAccount = false">确认</button>
      </div>
    </el-dialog>

    <el-dialog
      :center="true"
      top="22vh"
      title="编辑收货地址"
      :visible.sync="PersonInfo.dialogReceiveAddress"
      width="550px"
    >
      <!--   ReceiveAddress: {
        id: "",
        receiverName: "",
        receiverPhone: "",
        receiverProvince: "",
        receiverCity: "",
        receiverDistrict: "",
        receiverAddress: "",
        receiverZip: ""
      }-->

      <div class="per_input_layout" style="margin-top:0px;">
        <div class="per_input_title">姓名</div>
        <el-input
          type="text"
          v-model="PersonInfo.ReceiveAddress.receiverName"
          placeholder="请输入姓名"
          style="width:370px;"
        ></el-input>
      </div>
      <div class="per_input_layout">
        <div class="per_input_title">联系号码</div>
        <el-input
          type="text"
          v-model="PersonInfo.ReceiveAddress.receiverPhone"
          placeholder="请输入联系号码"
          style="width:370px;"
        ></el-input>
      </div>

      <div class="per_input_layout">
        <div class="per_input_title">所在省份</div>
        <el-input
          type="text"
          v-model="PersonInfo.ReceiveAddress.receiverProvince"
          placeholder="请输入所在省份"
          style="width:370px;"
        ></el-input>
      </div>

      <div class="per_input_layout">
        <div class="per_input_title">所在城市</div>
        <el-input
          type="text"
          v-model="PersonInfo.ReceiveAddress.receiverCity"
          placeholder="请输入所在区"
          style="width:370px;"
        ></el-input>
      </div>

      <div class="per_input_layout">
        <div class="per_input_title">所在区</div>
        <el-input
          type="text"
          v-model="PersonInfo.ReceiveAddress.receiverDistrict"
          placeholder="请输入联系地址"
          style="width:370px;"
        ></el-input>
      </div>

      <div class="per_input_layout">
        <div class="per_input_title">详细地址</div>
        <el-input
          type="text"
          v-model="PersonInfo.ReceiveAddress.receiverAddress"
          placeholder="请输入联系地址"
          style="width:370px;"
        ></el-input>
      </div>

      <div class="per_input_layout">
        <div class="per_input_title">邮政编码</div>
        <el-input
          type="text"
          v-model="PersonInfo.ReceiveAddress.receiverZip"
          placeholder="请输入联系地址"
          style="width:370px;"
        ></el-input>
      </div>

      <div class="button_layout">
        <button
          type="text"
          class="c_button"
          @click="PersonInfo.dialogReceiveAddress = false"
          style="margin-right:10px;"
        >关闭</button>
        <button type="text" class="c_button" @click="confirmReceiveAddress">确认</button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      GenderItems: this.$.GenderItems,
      ProvinceItems: this.$.ProvinceItems,
      PersonInfo: {
        dialogAccountInfo: false,
        dialogBindAccount: false,
        dialogReceiveAddress: false,
        nickname: "",
        gender: "",
        city: "",
        ReceiverID: "",
        Shippinglist: [],

        UserInfo: {},
        ReceiveAddress: {
          id: "",
          receiverAddress: "",
          receiverCity: "",
          receiverDistrict: "",
          receiverName: "",
          receiverPhone: "",
          receiverProvince: "",
          receiverZip: ""
        }
      }
    };
  },
  created() {
    /*  console.log(this.$.Fun(100))
    console.log(this.$.ProvinceItems) */
    this.updateUser();
    this.updateShippingList();
  },

  methods: {
    updateUser() {
      var that = this;
      $v.service.call({
        action: "get_user",
        type: "POST",
        data: {
          id: ""
        },
        callback: function(data) {
          console.log("用户信息", data);
          that.PersonInfo.UserInfo = data.data;
          /*  if (data.Success) {
        
         } else {
      that.$message.error(data.Message);
        } */
        }
      });
    },

    updateShippingList() {
      var that = this;
      $v.service.call({
        action: "get_shipping_list",
        type: "POST",
        data: {
          id: ""
        },
        callback: function(data) {
          if (data.success) {
            that.PersonInfo.Shippinglist = data.data;
          }
        }
      });
    },

    addReceiver(){
      this.PersonInfo.dialogReceiveAddress = true
      for(var key in this.PersonInfo.ReceiveAddress){
        this.PersonInfo.ReceiveAddress[key] = ''
      }
    },


    editReceiver(info) {
      this.PersonInfo.ReceiverID = info.id;
      this.PersonInfo.dialogReceiveAddress = true;
      for (var key in info) {
        this.PersonInfo.ReceiveAddress[key] = info[key];
      }
      console.log("123", this.PersonInfo.ReceiveAddress);
    },

    deleteReceiver(ID){
      var that = this;
      $v.service.call({
      action: 'delete_shipping_list',
      type: 'POST',
      data: {
        id:ID
      },
      callback: function(data) {
        console.log('data',data)
        if(data.success){
           that.updateShippingList()
           that.$message.success(data.msg);
        }else {
          that.$message.error('删除失败');
        }
       }
      });
    },

    confirmReceiveAddress() {
      var that = this;
      if (that.PersonInfo.ReceiveAddress.id)  var ACTION = 'update_shipping_list'
      else var ACTION = 'add_shipping_list'
      $v.service.call({
        action: ACTION,
        type: "POST",
        data: {
          id: that.PersonInfo.ReceiveAddress.id,
          receiverAddress: that.PersonInfo.ReceiveAddress.receiverAddress,
          receiverCity: that.PersonInfo.ReceiveAddress.receiverCity,
          receiverDistrict: that.PersonInfo.ReceiveAddress.receiverDistrict,
          receiverName: that.PersonInfo.ReceiveAddress.receiverName,
          receiverPhone: that.PersonInfo.ReceiveAddress.receiverPhone,
          receiverProvince: that.PersonInfo.ReceiveAddress.receiverProvince,
          receiverZip: that.PersonInfo.ReceiveAddress.receiverZip
        },
        callback: function(data) {
          if (data.success) {
            that.$message.success(data.msg);
            that.updateShippingList();
            that.PersonInfo.dialogReceiveAddress = false;
          }
        }
      });
    }
  }
};
</script>
<style scoped>
.c_button {
  padding: 6px;
}
.account_home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
}

.account_home_mini_title {
  margin-top: 20px;
  font-size: 15px;
  letter-spacing: 2px;
}

.line_style {
  margin-top: 15px;
  border-top: 1px rgb(219, 219, 219) solid;
  width: 500px;
}

.per_account_layout {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 650px;
}

.per_account_title {
  margin-top: 10px;
  width: 30%;
  font-size: 17px;
  font-weight: 600;
}

.per_account_content_layout {
  display: flex;
  flex-direction: column;
  width: 70%;
}

.per_account_content_address {
  font-size: 16px;
  letter-spacing: 2px;
}

.per_account_content {
  width: 70%;
  font-size: 16px;
  letter-spacing: 2px;
}

.per_info {
  margin-top: 10px;
}

.per_input_layout {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.per_input_title {
  width: 80px;
  text-align: center;
}

.button_layout {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
  width: 90%;
}

.button_style {
  display: flex;
  justify-content: center;
  width: 80px;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
  letter-spacing: 1px;
  padding: 7px;
}
</style>
