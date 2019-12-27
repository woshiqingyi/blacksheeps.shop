<template>
  <div class="original_intention">
    <div class="c_other_layout">
      <div class="c_other_title">售后服务</div>
      <div class="c_other_content">所有商品如遇到质量问题，点击下方<span class="remark_style" @click="contactController">联系我</span>，进行退货</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    contactController(){
      this.$router.push({name:'contactme'});
    }
  }
};
</script>
<style scoped>
.remark_style{
  color: rgb(15, 102, 184);
  cursor: pointer;
  font-weight: 600;
}
</style>