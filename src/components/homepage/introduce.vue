<template>
  <div class="introduce_layout">
    <div class="introduce_style">
      <div class="introduce_top"></div>
      <div class="introduce_goods">
         <product></product>
      </div>
    </div>
  </div>
</template>

<script>
import product from "@/components/homepage/product";
export default {
   components: { product },
};
</script>

<style scoped>
.introduce_layout {
  display: flex;
  justify-content: center;
}

.introduce_style {
  /* border: 1px gray solid;
  height: 700px; */
  width: 1300px;
  margin-top: 20px;
}

.introduce_top{
  width: 100%;
  height: 150px;
  background-color: whitesmoke;
}
.introduce_goods {
  margin-top: 20px;
  width: 100%;
  background-color: whitesmoke;
  /* border: 1px rgb(212, 212, 212) solid; */
}
</style>
