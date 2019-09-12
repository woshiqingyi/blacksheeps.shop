<template>
  <div class="help_center">
    <div class="help_center_layout">
      <div class="help_center_title">常见问题</div>
      <div class="line_style"></div>
      <div class="help_center_content">
        <div class="per_help">
          <div class="per_help_title">物流的选择</div>
          <div class="per_help_content">（默认物流选择是顺丰）</div>
        </div>
        <div class="per_help">
          <div class="per_help_title">商品如何退货</div>
          <div class="per_help_content">（在我的订单里面，点击退货，并且选择出你的退货理由）</div>
        </div>
        <div class="per_help">
          <div class="per_help_title">物流的选择</div>
          <div class="per_help_content">（默认物流选择是顺丰）</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.help_center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.help_center_layout {
  margin-top: 50px;
  height: 500px;
  width: 1000px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.help_center_title {
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
}

.line_style {
  margin-top: 15px;
  border-top: 1px rgb(235, 235, 235) solid;
  width: 600px;
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
</style>
