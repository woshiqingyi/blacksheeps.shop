<template>
  <div class="collection">
    <div class="collection_layout">
      <div class="c_main_title">我的收藏库</div>
      <div class="collection_mini_title">可将你的宝贝添加在收藏库，方便查看</div>
      <div class="line_style"></div>
      <div class="collection_content">
        <div class="per_collection_"></div>

        <div class="per_collection_"></div>

        <div class="per_collection_"></div>

        <div class="per_collection_"></div>

        <div class="per_collection_"></div>

       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.collection {
  display: flex;
  justify-content: center;
  align-items: center;
}

.collection_layout {
  margin-top: 40px;
  width: 1000px;
  height: 1000px;
  /*  border: 1px lightgray solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
}



.collection_mini_title {
  margin-top: 20px;
  font-size: 15px;
  letter-spacing: 2px;
}

.line_style {
  margin-top: 15px;
  border-top: 1px rgb(219, 219, 219) solid;
  width: 500px;
}

.collection_content {
  margin-top: 20px;
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
}

.per_collection_ {
  width: 25%;
  height: 250px;
  background-color: rgb(238, 238, 238);

}
</style>
