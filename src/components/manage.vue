<template>
  <div>
    <div class="layout">
      <div class="menu_style">
         <div class="menu_border"> 
          <div class='show_account'>{{Manage.ShowAccountName}}</div>
          <el-dropdown
            placement="bottom"
            trigger="click"
            class="navigation"
            @command="navigateMenu"
          >
             <img class="icon_style" src="../../static/image/icon/myaccount.png" />
            <el-dropdown-menu slot="dropdown" class="dropdown_layout">
              <el-dropdown-item command="onHelpCenter" class="dropdown_style"><img class="dropdown_icon" src="../../static/image/icon/help.png" />帮助中心</el-dropdown-item>
              <el-dropdown-item command="onShoppingCart"  class="dropdown_style"><img class="dropdown_icon" src="../../static/image/icon/shopping.png" />购物车</el-dropdown-item>
              <el-dropdown-item command="onAccounts"  class="dropdown_style"><img class="dropdown_icon" src="../../static/image/icon/account.png" />我的账户</el-dropdown-item>
              <el-dropdown-item command="onSignout"  class="dropdown_style"><img class="dropdown_icon" src="../../static/image/icon/exit.png" />退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="menu_classify_layout">
          <div class="menu_classify">
            <div class="per_menu" @click="onIntroduce">货架商品</div>
            <!-- <div class="per_menu" @click="onCollection">我的收藏</div> -->
            <div class="per_menu" @click="onOrder">我的订单</div>
          </div>
        </div>
        <div class="menu_border" >
         {{IP}}
        </div>
      </div>
    </div>
    
    <router-view />
    <div class="manage_bottom_layout">
      <div class="per_mini_menu">
        <div class="main_title">帮助中心</div>
        <div class="mini_title" @click="onAccountManage">账户管理</div>
        <!-- <div class="mini_title">购物指南</div> -->
        <div class="mini_title" @click="onOrderOperation">订单操作</div>
      </div>

      <div class="per_mini_menu">
        <div class="main_title">服务支持</div>
        <div class="mini_title" @click="onAfterSale">售后服务</div>
        <div class="mini_title" @click="onReturnePurchase">七天无理由退货</div>
      </div>

      <div class="per_mini_menu">
        <div class="main_title">关于本网站</div>
        <!-- <div class="mini_title" @click="onOriginalIntention">网站建设初衷</div> -->
        <div class="mini_title" @click="onContactMe">联系我</div>
        <!-- <div class="mini_title" @click="onLeaveMessage">留言板</div> -->
        <!-- <div class="mini_title" @click="onSpaceEngine">我的SpaceEngine</div> -->
      </div>
    </div>

    <div class="bottom_layout">
      <div class="line_style"></div>
      <div class="bottom_remark">
        <a class="a_style" target="view_window" href="http://www.beian.miit.gov.cn/">苏ICP备19063606号</a>
        <img class="icon_remark_style" src="../../static/image/icon/beian.png" alt />
        <a
          class="a_style"
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32108102010390"
        >苏公网安备 32108102010390号</a>
      </div>
    </div>
    <div class='background_image'>
     
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      Show: false,
      IP:'',
      Manage:{
        ShowAccountName:''
      },
      CommodityCategory: [
        {
          Name: "标签1"
        },
        {
          Name: "标签2"
        },
        {
          Name: "标签3"
        }
      ]
    };
  },
  beforeCreate() {
    var dWidth = document.documentElement.clientWidth;
    //屏幕的长
    if (dWidth > 500) dWidth = 500;
    var baseFontSize = (dWidth * 100) / 750;
    document.documentElement.style.fontSize = baseFontSize + "px";
    // if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
    // } else {
    // }
  },

  created() {
    var that = this;
      that.Manage.ShowAccountName = '未登录'
      $v.service.call({
      action: "user/get_information.do",
      type: "POST",
      data: {},
      callback: function(data) {
        console.log('data1',data)
       if(data.status == 0){
          that.Manage.ShowAccountName = data.username
        }else{
          that.Manage.ShowAccountName = '未登录'
        }
      }
    });
    
    
    var dWidth = document.documentElement.clientWidth;
    var shezhi = this.CommodityCategory.length * 3;
    if (dWidth > 500) dWidth = 500;
    var baseFontSize = (dWidth * 100) / 750;
    var jieguo = shezhi * baseFontSize;
    // console.log('222',shezhi)
    // console.log('333',baseFontSize)
    // console.log('444',jieguo)
    // console.log('555',dWidth)
    // console.log('666',document.documentElement.clientWidth)
    if (jieguo > document.documentElement.clientWidth) {
      this.Show = true;
    }
  },

  mounted() {
    window.onresize = () => {
      return (() => {
        var dWidth = document.documentElement.clientWidth;
        if (dWidth > 500) dWidth = 500;
        var baseFontSize = (dWidth * 100) / 750;
        document.documentElement.style.fontSize = baseFontSize + "px";
      })();
    };
  },

  methods: {
    // neto() {
    //   this.$router.push({ name: "homepage" });
    // },
    // onAccountLogin() {
    //   this.$router.push({ name: "login" });
    // },
    navigateMenu(Choosed) {
      if (Choosed == "onAccounts") {
        this.$router.push({ name: "accounthome" });
      }
      if (Choosed == "onShoppingCart") {
        this.$router.push({ name: "shoppingcart" });
      }
      if (Choosed == "onHelpCenter") {
        this.$router.push({ name: "helpcenter" });
      }
       if (Choosed == "onSignout") {
         var that = this
      $v.service.call({
      action: "user/logout.do",
      type: "POST",
      data: {},
      callback: function(data) {
        console.log('退出登录',data)
      }
    });
        // this.$router.push({ name: "helpcenter" });
      }
    },

    onIntroduce() {
      this.$router.push({ name: "introduce" });
    },

    onCollection() {
      this.$router.push({ name: "collection" });
    },

    onOrder() {
      this.$router.push({ name: "order" });
    },

    onAccountManage(){
      this.$router.push({ name: "acountmanage" });
    },

    onOrderOperation(){
      this.$router.push({ name: "orderoperation" });
    },

    onAfterSale() {
      this.$router.push({ name: "aftersale" });
    },

    onReturnePurchase() {
      this.$router.push({ name: "returnedpurchase" });
    },

    onOriginalIntention() {
      this.$router.push({ name: "originalintention" });
    },

    onContactMe() {
      this.$router.push({ name: "contactme" });
    },

    onLeaveMessage() {
      this.$router.push({ name: "leavemessage" });
    },

    onSpaceEngine(){
      this.$router.push({ name: "spaceengine" });
    }
  }
};
</script>

<style scoped>

.background_image{
  background-color: rgb(255, 255, 255);
  height: 100px;
  width: 100px;
  background-repeat:no-repeat;
 /* background-attachment:fixed; */
/* background-position:center; */
  
}
 
      

.category {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.8rem;
  font-size: 0.25rem;
  
}

.per-category {
  width: 3rem;
  height: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.layout {
  width: 100%;
  height: 0.67rem;
  background-color: rgb(83, 83, 83);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  
}

.menu_style {
  display: flex;
  flex-direction: row-reverse;
  width: 1100px;
  align-items: center;
  
  
 /*  background-color: aqua; */
}

.menu_border{
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  font-size: 14px;
  letter-spacing: 2px;
}

.show_account{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  color: white;
  font-size: 12px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content:center;
}

.account_style {
  color: white;
  font-size: 0.25rem;
}
.icon_layout {
 /*  background-color: white;
  border-radius: 50%; */
}
.icon_style {
  height: 0.4rem;
  width: 0.4rem;
  background-color: white;
  border-radius: 50%;
}

.menu_classify_layout {
  width: 100%;
  height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu_classify {
  width: 60%;
  height: 0.8rem;
  font-size: 14.5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
}

.per_menu {
  height: 100%;
  display: flex;
  align-items: center;
}

.manage_bottom_layout {
  margin-top: 100px;
  width: 100%;
  border-top: 1px rgb(230, 230, 230) solid;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.per_mini_menu {
  margin-top: 20px;
  width: 250px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.a_style {
  color: gray;
}

.main_title {
  margin-top: 12px;
}

.mini_title {
  margin-top: 14px;
  color: gray;
  font-size: 13px;
  cursor: pointer;
}

.line_style {
  text-align: center;
  display: flex;
  justify-content: center;
  width: 720px;
  border-top: 1px rgb(230, 230, 230) solid;
}

.bottom_layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bottom_remark {
  margin-top: 30px;
  width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  margin-bottom: 70px;
}

.icon_remark_style {
  width: 18px;
  height: 18px;
  margin-left: 8px;
  margin-right: 3px;
}

.dropdown_icon{
  width: 16px;
  height: 16px;
  margin-right: 25px;
}

.dropdown_layout{
  margin-top: 22px;
}

.dropdown_style{
  margin-top:5px;
  width:145px;
  font-size: 13px;
  color: rgb(15, 102, 184);
  
}
</style>

<!-- <ul class="category" >
<li class="per-category" >
<span class="iconfont">&#xe60a;</span>
</li>
<li class="per-category"  v-for="item in CommodityCategory" :key="item.id">{{item.Name}}</li>
<li class="per-category" v-on:click='onAccountLogin'>
<span class="iconfont" >&#xe663;</span>
</li>
<li class="per-category" >
<span class="iconfont" >&#xe648;</span>
</li>
</ul> -->