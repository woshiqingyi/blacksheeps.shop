<template>  
    <div class="layout">
      <div class="per-commodity"></div>
      <div class="per-commodity"></div>
      <div class="per-commodity"></div>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      // bannerImg: require('../image/clothes.png')
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

<style scoped>
 
  .layout{
    display: flex;
    flex-wrap: wrap;
    padding:5%;
  }
  /* 换行，当元素大于父元素后，就自动换行 */
  .per-commodity{
    height: 700px;
    width: 35%; 
    background-color: whitesmoke;
   
    
  }
  .layout1{
    display:flex;
    justify-content: center;
  }
  div{
   
  }
 </style>
