<template>
  <div class="collection">
    <div class="collection_layout">
      <div class="c_main_title">我的收藏库</div>
      <div class="collection_mini_title">可将你的宝贝添加在收藏库，方便查看</div>
      <div class="line_style"></div>
      <div class="collection_content">

        <div class="per_collection">
          <div class="per_collection_mini">
            <img class="image_style" src="../../static/image/icon/honglou.jpg" alt>
            <div class="per_collection_content">
                <div class="per_collection_title">红楼梦</div>
                <div class="per_collection_price">RMB 100</div>
            </div>
          </div>
        </div>

         <div class="per_collection">
          <div class="per_collection_mini">
            <img class="image_style" src="../../static/image/icon/honglou.jpg" alt>
            <div class="per_collection_content">
                <div class="per_collection_title">红楼梦</div>
                <div class="per_collection_price">RMB 100</div>
            </div>
          </div>
        </div>

         <div class="per_collection">
          <div class="per_collection_mini">
            <img class="image_style" src="../../static/image/icon/honglou.jpg" alt>
            <div class="per_collection_content">
                <div class="per_collection_title">红楼梦</div>
                <div class="per_collection_price">RMB 100</div>
            </div>
          </div>
        </div>

         <div class="per_collection">
          <div class="per_collection_mini">
            <img class="image_style" src="../../static/image/icon/honglou.jpg" alt>
            <div class="per_collection_content">
                <div class="per_collection_title">红楼梦</div>
                <div class="per_collection_price">RMB 100</div>
            </div>
          </div>
        </div>

         <div class="per_collection">
          <div class="per_collection_mini">
            <img class="image_style" src="../../static/image/icon/honglou.jpg" alt>
            <div class="per_collection_content">
                <div class="per_collection_title">红楼梦</div>
                <div class="per_collection_price">RMB 100</div>
            </div>
          </div>
        </div>

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
  background-color: whitesmoke;
  margin-top: 20px;
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
}

.per_collection {
  width: 25%;
  height: 250px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
}

.per_collection_mini {
  width: 85%;
  height: 85%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
}

.image_style {
  height: 180px;
  width: 180px;
}

.per_collection_content{
  display: flex;
  justify-content: space-around;
}

.per_collection_title{
  font-size: 16px;
  font-weight: 600;
}

.per_collection_price{
  margin-left: 13px;
  font-size: 16px;
  font-weight: 600;
  color: #3e86ca;
}

</style>
