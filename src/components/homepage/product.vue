<template>
  <div class="product_layout">
    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>

    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>

    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>

    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>

    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>

    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>

    <div class="per_product">
      <div class="per_mini_product"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.product_layout {
  display: flex;
  flex-wrap: wrap;
}

.per_product {
  width: 33.3%;
  height: 320px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
}
.per_mini_product {
  height: 300px;
  width: 400px;
  background-color: rgb(255, 255, 255);
}
</style>
