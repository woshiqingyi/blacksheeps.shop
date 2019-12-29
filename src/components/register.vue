<template>
  <div class="login_layout">
    <div class="login_style">
      <div class="account_style">创建你的账户</div>
      <input class="input_style" v-model="RegisterAccount.Account" placeholder="请输入你的账号" type="text">
      <input class="input_style" v-model="RegisterAccount.Password" placeholder="请输入你的账号" type="password">
      <button class='c_button' @click="registerAccount">完成</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      RegisterAccount:{
        Account:"",
        Password:""
      }
    }
  },
  methods:{
    registerAccount(){
      var that = this
      $v.service.call({
      action: "user/register.do",
      type: "POST",
      data: {
        username:that.RegisterAccount.Account,
        password:that.RegisterAccount.Password,
      },
      callback: function(data) {
        if(data.status == 0){
          that.$message.success('注册成功，请登录你的账号')
          that.$router.push({name:'login'})
        }else{
          that.$message.error(data.msg)
        }
      }
    });
      /* var that = this
      $.ajax({
      disabledLoading: true,
      type: "Post",
      traditional: false,
      url: "http://tomcat.blacksheeps.com/user/register.do",
      dataType: "json",
      async:false,
      data: {
        username:that.RegisterAccount.Account,
        password:that.RegisterAccount.Password,
      },
      crossDomain: true,
      success: function(data) {
        if(data.status == 0){
          that.$message.success('注册成功，请登录你的账号')
          that.$router.push({name:'login'})
        }else{
          that.$message.error(data.msg)
        }
      },
    }); */
    }
  }
};
</script>

<style scoped>
.c_button{
  margin-top: 25px;
  width: 200px;
  background-color: #3e86ca;
  color: white;
  padding: 7px;
  border-radius: 3px;
  font-weight: 500;
}

.login_layout {
  margin-top: 7%;
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

.per_input {
  width: 300px;
}
/* div {
  margin: auto;
} */
</style>
