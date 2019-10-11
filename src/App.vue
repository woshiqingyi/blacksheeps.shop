<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created(){
    var Width = document.documentElement.clientWidth;
    console.log('Width',Width)
    if (Width > 1300) Width = 1300;
    var baseFontSize = (Width * 100) / 750;
    console.log('baseFontSize',baseFontSize)
    document.documentElement.style.fontSize = baseFontSize + "px";
  },
  name: 'App'
}
</script>

<style>

.c_main_title{
  font-weight:600;
  font-size: 20px;
}
.c_button{
  color: white;
  background-color: #3e86ca;
}

.c_text_button{
  font-size: 12px;
  color: #3e86ca;
}


</style>
