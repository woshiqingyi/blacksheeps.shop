<template>
  <div class="account_home">
    <div class="c_main_title">账户信息</div>
    <div class="account_home_mini_title">编辑修改你的信息</div>
    <div class="line_style"></div>

    <div class="per_account_layout">
      <div class="per_account_title">个人信息</div>
      <div class="per_account_content">
          <div class="per_info">昵称：郑晓峰</div>
          <div class="per_info">性别：男</div>
          <div class="per_info">城市：泉州</div>
          <el-button type="text">编辑</el-button>
      </div>
    </div>

    <div class="per_account_layout">
      <div class="per_account_title">账号绑定</div>
      <div class="per_account_content">
          <div class="per_info">邮箱：1355224991@qq.com</div>
          <div class="per_info">号码：18861828564</div>
          <div class="per_info">密码：**********</div>
          <el-button type="text">编辑</el-button>
      </div>
    </div>

    <div class="per_account_layout">
      <div class="per_account_title">收货地址</div>
      <div class="per_account_content">
          <div class="per_info">姓名：1355224991@qq.com</div>
          <div class="per_info">联系号码：18861828564</div>
          <div class="per_info" style="line-height:25px;margin-top:7px;">联系地址：福建省 泉州市 晋江市 陈埭镇 江滨南路泉商投资大厦2002</div>
          <el-button type="text">编辑</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
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

.per_account_content {
  width: 70%;
  font-size: 16px;
  letter-spacing: 2px;
}

.per_info{
    margin-top: 10px;
  
}
</style>