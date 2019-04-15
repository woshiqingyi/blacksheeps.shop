<template>
  <div class="layout">
   <div class="woshiqingyi">
     <div class="" v-if="show">iph</div>
     <div class="" v-if="show">ipa</div>
     <div class="" v-if="show">Mac</div>
     <div class="" v-if="show">Watch</div>
     <div class="" >Music</div>
   </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
    }
  },
  beforeCreate () {
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
      this.show = true
    } else {
      this.show = false
    }
  },
  methods: {
  }
}
</script>
<style>
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
