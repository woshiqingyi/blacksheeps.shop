<template>
  <div class="login_layout" :class="{height:Height}">
    <div class="login_style">
      <div class="account_style">登陆我的账号</div>
      <input class="input_style" placeholder="请输入你的账号" v-model="Account.UserName" type="text">
      <input class="input_style" placeholder="请输入你的密码" v-model="Account.Password" type="password" >
      <el-button class='button_style' :style="LoginStyle" @click="onAccount">登陆</el-button>
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
    var Height = document.documentElement.clientHeight
    // $.ajax({
    //   disabledLoading: true,
    //   type: "GET",
    //   traditional: false,
    //   url: "http(s)://api02.aliyun.venuscn.com/area/all",
    //   dataType: "JSON",
    //   data: {
    //     __Token__: '',
    //     Data: { level: "1", page: "1", size: "50" }
    //   },
    //   crossDomain: true,
    //   success: function(data) {
    //     console.log("data", data);
    //   },
    // });

  },
  methods:{
    onAccount(){
      this.$message.warning('请输入账号跟密码')
    },
    onRegister(){
      this.$router.push('register')
    }
  },

  watch:{
    Account:{
       handler(Values) {
         if(Values.UserName && ValuesPassword){

         }
       },
      deep:true
    }
  }
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

.button_style{
  margin-top: 25px;
  width: 200px;
  background-color: rgb(241, 241, 241);
  color: white;
  background-color: #3e86ca;
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
