<template>  
<div class='layout'>
  <div class='commodity-details-layout'>

    <img class="image-style" :src="bannerImg">
    <div class="introduction-text">
      南极人床上四件套北欧风床单被套被子宿舍三件套单人网红床上用品
    </div>
  </div>
</div>
</template>
<script>
export default {
  data: function () {
    return {
      bannerImg: require('../image/clothes.png')
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

  methods: {
    
  }
}
</script>

<style>
  .layout{
    display: flex;
    justify-content: center;
  }
  .image-style{
    margin-left: 0.3rem;
    height: 3.2rem;
    width: 3.2rem;
  }
  .commodity-details-layout{
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 13rem;
   height: 4rem;
   border-radius:0.3rem;
   border:1px rgb(192, 192, 192) solid;
   margin-top: 0.4rem;
   margin-left: 0.3rem;
   margin-right: 0.3rem
 }
  .introduction-text{
    margin-left: 0.15rem;
    margin-right: 0.15rem;
    height: 3rem;
    letter-spacing:0.015rem;
    line-height:0.4rem;
  }
  div{
  
       
       
 }
 </style>
