<template>
  <div class="account_manage_layout">
    <div class="account_manage_title">账户信息</div>
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
      ChooseID: "",
      ClickMenu: "background-color: #3e86ca;color:white"
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
}

.account_manage_title {
  margin-top: 70px;
  font-size: 20px;
  font-weight: 600;
}

.account_manage {
  display: flex;
  margin-top: 20px;
  background-color: rgb(245, 245, 245);
  width: 1000px;
  height: 500px;
  border-radius: 6px;
}

.left_menu {
  background-color: rgb(238, 238, 238);
  width: 90px;
  height: 100%;
}

.right_menu {
}

.per_menu {
  width: 100%;
  height: 80px;
  background-color: rgb(238, 238, 238);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: rgb(92, 92, 92);
  border: 1px #ffffff solid;
  border-radius: 6px;
}
</style>
