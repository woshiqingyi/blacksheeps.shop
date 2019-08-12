<template>
    <div>shoppingcart</div>
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
}
</script>

<style>

</style>
