<template>
  <div class="login_layout">
    <div class="login_style">
      <div class="account_style">登陆我的账号</div>
      <input class="input_style" placeholder="请输入你的账号" type="text">
      <input class="input_style" placeholder="请输入你的账号" type="text">
      <el-button class='button_style'>登陆</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
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
  color: rgb(102, 102, 102);
}

.input_style {
  margin-top: 10px;
  padding: 10px;
  border: 1px rgb(238, 236, 236) solid;
  border-radius: 7px;
  width: 60%;
  font-size: 14px;
  height: 27px;
}

.button_style{
  margin-top: 25px;
  width: 200px;
  background-color: rgb(241, 241, 241)
}

.per_input {
  width: 300px;
}

/* div {
  margin: auto;
} */

</style>
