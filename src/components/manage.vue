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
              <el-dropdown-item command="onShoppingCart">购物车</el-dropdown-item>
              <el-dropdown-item command="exitLogin">我的账户</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <router-view/>
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
    navigateMenu(Choosed){
      if(Choosed == 'exitLogin'){
        this.$router.push({name:'login'})
      }
      if(Choosed == 'onShoppingCart'){
        this.$router.push({name:'shoppingcart'})
      }
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
  height: 0.8rem;
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
  height: 0.5rem;
  width: 0.5rem;
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