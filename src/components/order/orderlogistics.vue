<template>
  <div class="order_logistics_layout">
    <div class="order_logistics">
      <div class="order_logistics_title_layout">
        <div class="order_logistics_title">包裹信息</div>
      </div>
      <div class="order_logistics_steps">
        <el-steps :active="1" style="width:700px;">
          <el-step title="拍下商品" icon="el-icon-upload"></el-step>
          <el-step title="卖家发货" icon="el-icon-upload"></el-step>
          <el-step title="派送中" icon="el-icon-picture"></el-step>
          <el-step title="已签收" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
      <div class="order_logistics_steps_layout">
        <div class="order_logistics_steps_content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    
    }
  }
};
</script>

<style scoped>
.order_logistics_layout {
  display: flex;
  justify-content: center;
}

.order_logistics {
  margin-top: 70px;
  width: 1000px;
  height: 500px;
  border: 1px rgb(238, 238, 238) solid;
}

.order_logistics_title_layout {
  width: 100%;
  height: 50px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  font-size: 16px;
}

.order_logistics_title {
  margin-left: 15px;
}

.order_logistics_steps {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.order_logistics_steps_layout {
  display: flex;
  justify-content: center;
}

.order_logistics_steps_content {
  margin-top: 20px;
  width: 80%;
  height: 100px;
  background-color: whitesmoke;
  border-radius: 4px;
}
</style>
