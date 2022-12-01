
<template>
  <div class="login_layout" :class="{height:Height}">
    <div class="login_style">
      <div class="account_style">登陆我的账号</div>
      <input class="input_style" placeholder="请输入你的账号" v-model="Account.UserName" type="text">
      <input class="input_style" placeholder="请输入你的密码" v-model="Account.Password" type="password" >
      <button class='c_button' :style="LoginStyle" @click="loginAccount">登陆</button>
      <el-button class='register_button' @click="onRegister" type="text">无账号？立即去注册</el-button>
         <div class="other_login">
         <div>其他登录方式</div>
       

          <a href="javascript:;" onclick="return window.open('https://graph.qq.com/oauth2.0/authorize?client_id=101959583&amp;response_type=token&amp;scope=all&amp;redirect_uri=https://www.blacksheeps.cn/#/introduce', 'oauth2Login_10136' ,'height=525,width=585, toolbar=no, menubar=no, scrollbars=no, status=no, location=yes, resizable=yes');"><img class="icon" src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_4.png" alt="QQ登录" border="0"></a>
  
        <!--
        <img class="icon"  src="../../static/image/icon/qq2.png" alt="">
        <img class="icon" src="../../static/image/icon/weixin2.png" alt="">
        <-->
      </div>
    </div>
  </div>
</template>


<script type="text/javascript"  charset="utf-8"
    src="http://connect.qq.com/qc_jssdk.js"
    data-appid="101958511"
    data-redirecturi="https://www.blacksheeps.cn/login"
>

$(function () {
    QC.Login({
        btnId:'login_btn_modal',
        showModal:fasle,
        size:'A_L'
    })
})


</script>




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

.icon{

  height: 20px;
}

.other_login{
  width: 230px;
  
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size:12px;
  color: gray;

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
