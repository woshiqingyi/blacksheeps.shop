<template>
    <div class="layout">
        <input class='input-style' v-model="message" placeholder="edi">
    </div>
   
    
</template>

<script>
export default {
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
.layout{
    margin-top: 0.5rem;
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
  
   font-size: 0.3rem;
   margin-left: 0.2rem;
   width: 100%
   
}
</style>
