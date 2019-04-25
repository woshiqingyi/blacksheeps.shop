<template>
  <div class="layout-style">
    <div class="layout">
       <input class='input-style' v-model="message" placeholder="请输入你的账号">
    </div>
    <div class="layout">
       <input class='input-style' v-model="message" placeholder="请输入你的密码 ">
    </div>
    <div class="button-style">
      <div v-on:click='onSubmitInfo'>提交信息</div>
    </div>
  </div>  
 
 
</template>

<script>
export default {
  data: function () {
    return {
      message:''
    }
  },
    beforeCreate () {
    var dWidth = document.documentElement.clientWidth
    if (dWidth > 500) dWidth = 500
    var baseFontSize = dWidth * 100 / 750
    document.documentElement.style.fontSize = baseFontSize + 'px'
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
    } else {
    }
  },

  created () {
    var dWidth = document.documentElement.clientWidth 
    var shezhi = this.CommodityCategory.length * 3 
    if (dWidth > 500) dWidth = 500
    var baseFontSize = dWidth * 100 / 750
    var jieguo = shezhi * baseFontSize
    console.log('222',shezhi)
    console.log('333',baseFontSize)
    console.log('444',jieguo)
    console.log('555',dWidth)
    console.log('666',document.documentElement.clientWidth)
    if (jieguo > document.documentElement.clientWidth) {
      this.show = true
    }
  },

  methods:{
   onSubmitInfo(){
     console.log('1111')
   }
  },

  mounted () {
    window.onresize = () => {
      return (() => {
        var dWidth = document.documentElement.clientWidth
        if (dWidth > 500) dWidth = 500
        var baseFontSize = dWidth * 100 / 750
        document.documentElement.style.fontSize = baseFontSize + 'px'
      })()
    }
  },

}
</script>

<style scoped>

.layout-style{
  margin-top: 0.5rem
}

.button-style{
  height: 0.7rem;
  width: 5.5rem;
  margin-top: 0.4rem;
  background-color: rgba(3, 80, 223, 0.918);
  display: flex;
  justify-content: center;
  border-radius: 5px;
  color:white;
  font-size: 0.27rem; 
}

.layout{
    margin-top: 0.3rem;
    height: 0.8rem;
    width:6rem;
    background-color: white;
    border: 1px rgba(3, 80, 223, 0.918) solid;
    border-radius: 10px;
    display: flex;
    align-items: center;
}
div{
  margin: auto;
}

.input-style{
   font-size: 0.24rem;
   margin-left: 0.2rem;
   width: 100%
   
}
</style>
