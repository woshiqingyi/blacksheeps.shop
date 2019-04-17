<template>
  <div class="layout">
   <div class="woshiqingyi">
     <div class="" v-if="show">ip</div>
     <div class="" v-if="show">ipa</div>
     <div class="" v-if="show">Mac</div>
     <div class="" v-if="show">Watch</div>
     <div class="" >Music</div>
     <select v-model="selected" @change='getValue'>
       <option>--请选择--</option>
       <option v-for="item in optList" v-bind:key='item'>{{item}}</option>
     </select>
   </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      selected: '',
      optList: ['青龙', '白虎', '朱雀', '玄武']
    }
  },
  beforeCreate () {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
      this.show = false
      console.log('1')
    } else {
      this.show = true
      console.log('2')
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
  height: 50px;
  color:white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 200px;
  margin-right: 200px;
}

.layout{
  margin:0px;
  background-color: black;
 }
  body{
      margin:0px;
   }
 </style>
