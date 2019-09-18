<template>
  <div class="collection">
    <div class="collection_layout">
      <div class="c_main_title">我的收藏库</div>
      <div class="collection_mini_title">可将你的宝贝添加在收藏库，方便查看</div>
      <div class="line_style"></div>
      <div class="collection_content">

        <div class="per_collection">
          <div class="per_collection_mini" id='1' @mouseenter="showDelete" @mouseleave="hiddenDelete">
            <div class="icon_layout" v-show="ID1 == ChoosedID ? true : false" @click="deletePerCollection">
               <img class="icon_detele"   src="../../static/image/icon/delete.png" alt="">
            </div>
            <img class="image_style" src="../../static/image/icon/honglou.jpg" alt>
            <div class="per_collection_content">
              <div class="per_collection_title">红楼梦</div>
              <div class="per_collection_price">RMB 100</div>
            </div>
          </div>
        </div>

         <div class="per_collection">
          <div class="per_collection_mini" id='2' @mouseenter="showDelete" @mouseleave="hiddenDelete">
            <div class="icon_layout" v-show="ID2 == ChoosedID ? true : false" @click="deletePerCollection">
               <img class="icon_detele" src="../../static/image/icon/delete.png" alt="">
            </div>
            <img class="image_style" src="../../static/image/icon/honglou.jpg" alt>
            <div class="per_collection_content">
              <div class="per_collection_title">红楼梦</div>
              <div class="per_collection_price">RMB 100</div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <el-dialog title="提示" :visible.sync="DialogDeleteCollection" width="500px" center>
      <span style="font-size:15px;">确认要移除此商品？</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="button_style" type="mini" @click="DialogDeleteCollection = false">取 消</el-button>
        <el-button class="button_style" type="mini" @click="DialogDeleteCollection = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
export default {
  data() {
    return {
      ID1:'1',
      ID2:'2',
      ChoosedID:'',
      DialogDeleteCollection:false
    };
  },
  created() {},
  methods: {
    showDelete(e) {
      this.ChoosedID = e.target.id
    },

    hiddenDelete(){
      this.ChoosedID = ''
    },

    deletePerCollection(){
      this.DialogDeleteCollection = true
    }
  }
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
  width: 90%;
  height: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position:relative
}

.icon_layout{
  display: flex;
  justify-content:center;
  align-items: center;
  height: 35px;
  width: 35px;
  background-color: rgb(219, 219, 219);
  position:absolute;
  top:0px;
  right:0px;
}

.icon_detele{
  height:20px;
  width:20px;
}

.image_style {
  height: 180px;
  width: 180px;
}

.per_collection_content {
  display: flex;
  justify-content: space-around;
}

.per_collection_title {
  font-size: 16px;
  font-weight: 600;
}

.per_collection_price {
  margin-left: 13px;
  font-size: 16px;
  font-weight: 600;
  color: #3e86ca;
}

.button_style{
  width: 60px;
  margin-top: 5px;
  font-size: 13px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
}
</style>
