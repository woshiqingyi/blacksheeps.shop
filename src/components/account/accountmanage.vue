<template>
  <div class="account_manage_layout">
    <div class="c_main_title">账户信息</div>
    <div class="account_manage_mini_title">编辑修改你的信息</div>
    <div class="account_manage">
      <div class="left_menu">
        <button
          class="per_menu"
          v-for="item in Menu"
          :key="item.ID"
          :id="item.ID"
          @click="clickMenu"
          :style="item.ID == ChooseID?ClickMenu:'' "
        >{{item.Name}}</button>
      </div>
      <div class="right_menu">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Menu: [
        {
          Name: "个人信息",
          ID: "0"
        },
        {
          Name: "账号绑定",
          ID: "1"
        },
        {
          Name: "收货地址",
          ID: "2"
        }
      ],
      ChooseID: "0",
      ClickMenu: "background-color: #8aadce;color:white"
    };
  },
  methods: {
    clickMenu(e) {
      this.ChooseID = e.target.id;
      if (e.target.id == "0") {
        this.$router.push({ name: "accountinfo" });
      } else if (e.target.id == "1") {
        this.$router.push({ name: "bindaccount" });
      } else if (e.target.id == "2") {
        this.$router.push({ name: "receiveaddress" });
      }
    }
  }
};
</script>

<style scoped>
.account_manage_layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
}

.account_manage_mini_title{
  margin-top: 20px;
  font-size: 15px;
  letter-spacing: 2px;
}

.account_manage {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 800px;
  height: 350px;
}

.left_menu {
  background-color: rgb(238, 238, 238);
  width: 85px;
  height: 100%;
}

.right_menu {
  width:708px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 4px;
  
}

.per_menu {
  width: 100%;
  height: 70px;
  background-color: rgb(238, 238, 238);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: rgb(92, 92, 92);
  border: 1px white solid;
}
</style>
