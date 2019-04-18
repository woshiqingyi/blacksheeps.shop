<template>
  <div class="layout">
   <div class="woshiqingyi">
     <div class="">福</div>
     <div class="">泉州</div>
     <div class="">厦门市中心</div>
     <div class="" v-if="show">Watch</div>
     <div class="" >Music</div>
   </div>
  </div>
</template>
<script>

export default {
  data: function () {
    return {
      selected: '',
      optList: ['青龙', '白虎', '朱雀', '玄武'],
      message: '',
      dWidth: '',
      baseFontSize: ''
    }
  },
  beforeCreate () {
    var dWidth = document.documentElement.clientWidth
    if (dWidth > 750) dWidth = 750
    var baseFontSize = dWidth * 100 / 750
    var woshi =  document.documentElement.style.fontSize = baseFontSize + 'px'
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
      this.show = false
      console.log('1')
    } else {
      this.show = true
      console.log('2')
    }
  },

  mounted () {
    window.onresize = () => {
      return (() => {
        var dWidth = document.documentElement.clientWidth
        if (dWidth > 750) dWidth = 750
        var baseFontSize = dWidth * 100 / 750
        document.documentElement.style.fontSize = baseFontSize + 'px'
      })()
    }
  },

  methods: {
    getValue () {
      console.log('您选择了', this.selected)
    }
  }
}
</script>

<style>

.nishi{
  color: white;
}
.woshiqingyi{
  color:white;
  font-size: 0.3rem
}

.layout{
  margin:0px;
  background-color: black;
 }
  body{
      margin:0px;
   }
 </style>
