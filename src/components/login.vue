
<template>
  <div class="login_layout" :class="{height:Height}">
    <div class="login_style">
      <div class="account_style">登陆我的账号</div>
      <input class="input_style" placeholder="请输入你的账号" v-model="Account.UserName" type="text">
      <input class="input_style" placeholder="请输入你的密码" v-model="Account.Password" type="password" >
      <button class='c_button' :style="LoginStyle" @click="loginAccount">登陆</button>
      <el-button class='register_button' @click="onRegister" type="text">无账号？立即去注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      Account:{ 
        UserName:'',
        Password:'',
      },
      LoginStyle:'',
      Height:'',
    }
  },
  created(){
    var Width = document.documentElement.clientWidth;
    var Height = document.documentElement.clientHeight;
    
  },
  methods:{
    loginAccount(){
      var that = this
      $v.service.call({
      action: "login",
      type: "POST",
      data: {
        username:that.Account.UserName,
        password:that.Account.Password,
      },
      callback: function(data) {
        console.log(data)
        if (data.success) that.$message.success(data.msg)  
        && that.$router.push({name: 'introduce'});
        else that.$message.error(data.msg)
      }
    });
   },

   
    onRegister(){
      this.$router.push('register')
    }
  },

  // watch:{
  //   Account:{
  //      handler(Values) {
  //        if(Values.UserName && ValuesPassword){

  //        }
  //      },
  //     deep:true
  //   }
  // }
};
</script>

<style scoped>
.login_layout {
  margin-top: 7%;
  display: flex;
  justify-content: center;
}
/* .layout{
  width: 100%;
  height: 40px;
  background-color: rgb(83, 83, 83);
} */
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
  letter-spacing:2px
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

.c_button{
  margin-top: 25px;
  border-radius: 3px;
  font-weight: 500;
  width: 200px;
  background-color: rgb(241, 241, 241);
  color: white;
  background-color: #3e86ca;
  padding: 7px;
}

.register_button{
  font-size: 12px;
  color: #3e86ca;
}

.per_input {
  width: 300px;
}
/* div {
  margin: auto;
} */


</style>
