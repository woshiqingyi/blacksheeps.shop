<template>
  <div>
    <div class="layout">
      <div class="menu_style">
        <div class="icon_layout">
          <el-dropdown
            placement="bottom"
            trigger="click"
            class="navigation"
            @command="navigateMenu"
          >
            <img class="icon_style" src="../../static/image/icon/myaccount.png">
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="onHelpCenter">帮助中心</el-dropdown-item>
              <el-dropdown-item command="onShoppingCart">购物车</el-dropdown-item>
              <el-dropdown-item command="onAccounts">我的账户</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="menu_classify_layout">
          <div class="menu_classify">
            <!-- <el-button class="" type="text">商品分类</el-button>
            <el-button class="" type="text">我的收藏</el-button>
            <el-button class="" type="text">我的订单</el-button>-->
            <div class="per_menu" @click="onIntroduce">商品分类</div>
            <div class="per_menu" @click="onCollection">我的收藏</div>
            <div class="per_menu" @click="onOrder">我的订单</div>
          </div>
        </div>
        <div class="icon_style"></div>
      </div>
    </div>
    <router-view/>
    <div class="manage_bottom_layout">
      
      <div class="per_mini_menu">
        <div class="main_title">帮助中心</div>
        <div class="mini_title">账户管理</div>
        <div class="mini_title">购物指南</div>
        <div class="mini_title">订单操作</div>
      </div>

      <div class="per_mini_menu">
        <div class="main_title">服务支持</div>
        <div class="mini_title" @click="onAfterSale">售后服务</div>
        <div class="mini_title" @click='onReturnePurchase'>七天无理由退货</div>
      </div>

      <div class="per_mini_menu">
        <div class="main_title">关于本网站</div>
        <div class="mini_title" @click="onOriginalIntention">网站建设初衷</div>
        <div class="mini_title" @click="onContactMe">联系我</div>
        <div class="mini_title" @click="onLeaveMessage">留言板</div>
      </div>

    </div>
    <!-- 帮助中心
      1.账户管理
      2.购物指南
      3.订单操作
      服务支持
      1.售后服务
      2.七天无理由退货
      关于本网站
      1.了解网站的建设的初衷
      2.联系我
    3.balcksheeps的价值观-->
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      Show: false,
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

    onAfterSale(){
       this.$router.push({name:'aftersale'})
    },

    onReturnePurchase(){
       this.$router.push({name:'returnedpurchase'})
    },

    onOriginalIntention(){
      this.$router.push({name:'originalintention'})
    },

    onContactMe(){
      this.$router.push({name:'contactme'})
    },

    onLeaveMessage(){
      this.$router.push({name:'leavemessage'})
    }


  }
};
</script>

<style scoped>
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
}

.account_style {
  color: white;
  font-size: 0.25rem;
}
.icon_layout {
  background-color: white;
  border-radius: 50%;
}
.icon_style {
  height: 0.4rem;
  width: 0.4rem;
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
  margin-bottom: 70px;
}

.per_mini_menu {
  margin-top: 20px;
  width: 250px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main_title{
  margin-top: 12px;
}

.mini_title{
  margin-top: 14px;
  color: gray;
  font-size: 13px;
  cursor: pointer;
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