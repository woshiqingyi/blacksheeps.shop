<template>
  <div class="login_layout">
    <div class="login_style">
      <div class="account_style">创建你的账户</div>
      <input class="input_style" placeholder="请输入你的账号" type="text">
      <input class="input_style" placeholder="请输入你的账号" type="text">
      <el-button class='button_style'>完成</el-button>
    </div>
  </div>
</template>
<script>
export default {
  
};
</script>

<style scoped>
.login_layout {
  margin-top: 10%;
  display: flex;
  justify-content: center;
}

.login_style {
  background-color: whitesmoke;
  padding: 100px;
  width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.account_style{
  margin-bottom: 8px;
  font-weight: 500;
  color: rgb(20, 20, 20);
}

.input_style {
  margin-top: 10px;
  padding: 10px;
  border: 1px rgb(241, 241, 241) solid;
  border-radius: 7px;
  width: 60%;
  font-size: 14px;
  height: 27px;
}

.button_style{
  margin-top: 25px;
  width: 200px;
  background-color: #3e86ca;
  color: white;
}

.per_input {
  width: 300px;
}
/* div {
  margin: auto;
} */
</style>
