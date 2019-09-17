<template>
  <div class="bind_account">
    <div class="per_info">
      <span class="per_title">邮箱</span>
      <input class="per_content" v-model="Email" >
    </div>

     <div class="per_info">
      <span class="per_title">号码</span>
      <input class="per_content" value="18861828564" placeholder="请输入昵称">
    </div>

     <div class="per_info">
      <span class="per_title">密码</span>
      <input class="per_content" value='已设置' placeholder="请输入昵称">
    </div>
    
    <div class="line_style"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Email: "1355224991@qq.com"
    };
  }
};
</script>

<style scoped>
.bind_account {
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
  color:rgb(109, 109, 109);
}


.line_style{
    margin-top: 20px;
    border-top: 1px #9cb0c4 solid;
}
</style>
