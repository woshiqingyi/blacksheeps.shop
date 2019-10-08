<template>
  <div class="account_info">
    <div class="per_info">
      <span class="per_title">昵称</span>
      <input class="per_content" v-model="Name" :style="InputStyle" :disabled='DisabledInput' placeholder="请输入昵称">
    </div>

    <div class="per_info">
      <span class="per_title">性别</span>
      <input class="per_content" v-model="Sex" :style="InputStyle" :disabled='DisabledInput' placeholder="请输入性别">
    </div>

    <div class="per_info">
      <span class="per_title">城市</span>
      <input class="per_content" v-model="City" :style="InputStyle" :disabled='DisabledInput' placeholder="请输入城市">
    </div>

    <div class="line_style"></div>

    <div class="button_layout">
      <el-button type="mini" @click="editInfo" class="button_style">编辑</el-button>
      <el-button type="mini" v-if="PreserveButton" @click="preserveInfo" class="button_style">保存</el-button>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
        Name:'我是清逸',
        Sex:'男',
        City:'福州',
        InputStyle:'',
        DisabledInput:true,
        PreserveButton:false
    };
  },
  methods:{
      editInfo(){
          this.InputStyle = 'background-color:white',
          this.DisabledInput = false,
          this.PreserveButton = true
      },
      preserveInfo(){

      }
  }
};
</script>

<style scoped>
.account_info {
  height: 75%;
  width: 75%;
}

.per_info {
  margin-top: 10px;
  margin-left: 20px;
  height: 55px;
  display: flex;
  align-items: center;
  border-radius: 4px;
}

.per_title {
  margin-left: 15px;
  font-size: 16px;
  font-weight: 600;
}

.per_content {
  margin-left: 80px;
  font-size: 16px;
  background-color: whitesmoke;
  color: rgb(109, 109, 109);
}

.line_style{
    margin-top: 20px;
    border-top: 1px #9cb0c4 solid;
}

.button_layout {
    margin-top: 30px;
    margin-right: 65px;
    display: flex;
    justify-content: center;
}

.button_style {
  width: 100px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
}
</style>
