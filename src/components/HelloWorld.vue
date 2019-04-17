<template>
  <div class="layout">
   <div class="woshiqingyi">
     <div class="">福建</div>
     <div class="">泉州</div>
     <div class="">厦门市中心</div>
     <div class="" v-if="show">Watch</div>
     <div class="" >Music</div>
     <select v-model="selected" @change='getValue'>
       <option>--请选择--</option>
       <option v-for="item in optList" v-bind:key='item'>{{item}}</option>
     </select>
     <input v-model="message" placeholder="edit me">
     <div>{{message}}</div>
   </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      selected: '',
      optList: ['青龙', '白虎', '朱雀', '玄武'],
      message: ''
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
  height: 0.8rem;
  color:white;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
