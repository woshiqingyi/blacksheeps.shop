<template>
  <div class="receive_address">
    <div class="receive_address_layout">
      <div class="per_receive_address">
        <div class="per_receive_address_content">
          <div>
            <span>郑晓锋</span>
            <span>18861828564</span>
          </div>
          <div class="per_address_details">
            <span>福建省 泉州市 晋江市 陈埭镇 江滨南路泉商投资大厦2002</span>
          </div>
        </div>
        <div class="button_layout">
          <el-button class="operation_button" @click="modifyReceiveAddress" type="mini">修改</el-button>
          <el-button class="operation_button" style="margin-left:0px" type="mini">删除</el-button>
        </div>
      </div>

      <div class="per_receive_address">
        <div class="per_receive_address_content">
          <div>
            <span>郑晓锋</span>
            <span>18861828564</span>
          </div>
          <div class="per_address_details">
            <span>福建省 泉州市 晋江市 陈埭镇 江滨南路泉商投资大厦2002</span>
          </div>
        </div>
        <div class="button_layout">
          <el-button class="operation_button" @click="modifyReceiveAddress" type="mini">修改</el-button>
          <el-button class="operation_button" style="margin-left:0px" type="mini">删除</el-button>
        </div>
      </div>

      <el-button class="add_address_button" type="mini">新增收货地址</el-button>
    </div>

    <el-dialog title="提示" :visible.sync="DialogModifyAddress" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="operation_button" type="mini" @click="DialogModifyAddress = false">取 消</el-button>
        <el-button class="operation_button" type="mini" @click="DialogModifyAddress = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DialogModifyAddress: false
    };
  },
  methods: {
    modifyReceiveAddress() {
      this.DialogModifyAddress = true;
    }
  }
};
</script>

<style scoped>
.receive_address {
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
}

.receive_address_layout{
  margin-top: 15px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.per_receive_address {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  height: 60px;
  padding: 15px;
  font-size: 16px;
  border-bottom: 1px rgb(187, 187, 187) solid;
}

.per_receive_address_content {
  width: 450px;
  color: rgb(109, 109, 109);
}

.per_address_details {
  margin-top: 13px;
}

.operation_button {
  width: 60px;
  margin-top: 5px;
  font-size: 13px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
}

.button_layout {
  display: flex;
  flex-direction: column;
}

.add_address_button {
  margin-right: 70px;
  width: 150px;
  margin-top: 30px;
  font-size: 15px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
}
</style>
