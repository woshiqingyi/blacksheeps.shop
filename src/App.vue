<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    var Width = document.documentElement.clientWidth;
    console.log("Width", Width);
    if (Width > 1300) Width = 1300;
    var baseFontSize = (Width * 100) / 750;
    console.log("baseFontSize", baseFontSize);
    document.documentElement.style.fontSize = baseFontSize + "px";
  },
  name: "App"
};
</script>

<style>
.c_main_title {
  font-weight: 600;
  font-size: 20px;
}

.c_button{
  display: flex;
  justify-content: center;
  width: 90px;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
  letter-spacing: 1px;
  padding: 6px;
  border-radius:5px;
}
.c_text_button {
  font-size: 12px;
  color: #3e86ca;
}
.c_other_title {
  font-weight: 600;
  font-size: 18px;
}
.c_other_content {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 15px;
  letter-spacing: 1px;
  width: 700px;
  line-height: 24px;
  color: gray
}
.c_other_layout{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
