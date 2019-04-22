<template>
  <div class="layout">
   <ul class="category" >
     <li class="per-category" >
       <span class="iconfont">&#xe60a;</span>
     </li>
     <li class="per-category"  v-for="item in CommodityCategory" :key="item.id">{{item.Name}}</li>
     <li class="per-category" v-on:click='onAccountLogin'>
       <span class="iconfont" >&#xe663;</span>
     </li>

     <li class="per-category" >
       <span class="iconfont" >&#xe648;</span>
     </li>
   </ul>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      show: false,
      CommodityCategory: [
        {
          Name: '书籍'
        },
        {
          Name: '化妆品'
        },  
        {
          Name: '化妆品'
        },
      ]
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
    neto () {
      console.log('2')
      this.$router.push({name:'home-page'});
    },
    onAccountLogin () {
      console.log('3')
       this.$router.push({name:'login'});
    }
  }
}
</script>

<style scoped>
.category{
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  height: 0.8rem;
  font-size: 0.25rem;
}


.per-category{
  width: 3rem;
  height: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.layout{
  height: 0.8rem;
  background-color: black;
 }
 </style>
