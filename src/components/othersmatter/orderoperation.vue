<template>
  <div class="help_center">
    <div class="help_center_layout">
      <div class="c_main_title">订单操作</div>
      <div class="line_style"></div>
      <div class="help_center_content">
        <div class="per_help">
          <div class="per_help_title">发票问题</div>
          <div class="per_help_content">
              网站正在持续完善中，暂不支持开发票
          </div>
        </div>
        <div class="per_help">
          <div class="per_help_title">修改和取消订单</div>
          <div class="per_help_content">
            对于支付的订单，想取消或修改的，可直接联系客服。
          </div>
        </div>
         <div class="per_help">
          <div class="per_help_title">查询订单信息</div>
          <div class="per_help_content">
            可直接点击<span class="route_style" @click="onRouter">这里</span>即可查询订单信息
          </div>
        </div>
           <!-- <div class="per_help_content">
            我的安全设置里面点击密保设置或直接点击<span class="route_style" @click="onRouter(2)">这里</span>来重置密保
          </div> -->
        <!-- <div class="per_help">
          <div class="per_help_title">忘记密码</div>
          <div class="per_help_content">直接点击<span class="route_style" @click="onRouter(2)">这里</span></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onRouter(Value) {
      if (Value == 1) {
        this.$router.push({ name: "register" });
      } else if (Value == 2) {
        this.$router.push({ name: "register" });
      }
    }

    // onRegister() {
    //   this.$router.push({ name: "register" });
    // }
  }
};
</script>

<style scoped>
.help_center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.help_center_layout {
  margin-top: 70px;
  width: 1000px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.line_style {
  margin-top: 20px;
  border-top: 1px rgb(235, 235, 235) solid;
  width: 450px;
}

.help_center_content {
  margin-top: 10px;
}

.per_help {
  margin-top: 15px;
  font-size: 16px;
  width: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.per_help_title {
  color: #3e86ca;
  letter-spacing: 1px;
}

.per_help_content {
  margin-top: 15px;
  font-size: 14px;
  letter-spacing: 1px;
}

.route_style {
  font-weight: 600;
  cursor: pointer;
  margin-left: 2px;
  margin-right: 2px;
}
</style>
