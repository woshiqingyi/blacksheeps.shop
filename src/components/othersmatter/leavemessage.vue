<template>
  <div class="original_intention">
    <div class="c_other_layout">
      <div class="c_other_title">留言板</div>
      <div class="write_leave_message_layout">
        <div class="write_leave_message">请留下你的最想说的话</div>
        <img
          class="icon_style"
          @click="DialogLeaveMessage = true"
          src="../../../static/image/icon/write.png"
          alt
        />
      </div>
      <div class="line_style"></div>
    </div>
    <div class="leave_message_layout">
      <div class="per_leave_message">
        <div class="per_leave_message_content">汽笛的一声鸣响，思念的春草已长满我的心头</div>
        <div class="per_leave_message_remark">—— 郑晓峰 2019.1.1</div>
        <!--    <div class="border_line"></div> -->
      </div>
      <div class="per_leave_message">
        <div class="per_leave_message_content">人生在世草木一春，来如风雨，去似灰尘</div>
        <div class="per_leave_message_remark">—— 我是清逸 2019.1.1</div>
      </div>
      <div class="per_leave_message">
        <div class="per_leave_message_content">万有的缘法都是偶然的泊寄罢了</div>
        <div class="per_leave_message_remark">—— 断魂 2019.1.1</div>
      </div>
      <div class="per_leave_message">
        <div class="per_leave_message_content">万有的缘法都是偶然的泊寄罢了</div>
        <div class="per_leave_message_remark">—— 断魂 2019.1.1</div>
      </div>
      <div class="per_leave_message">
        <div class="per_leave_message_content">万有的缘法都是偶然的泊寄罢了</div>
        <div class="per_leave_message_remark">—— 断魂 2019.1.1</div>
      </div>
    </div>
    <el-dialog
      title="请写下你想说的话"
      :center="true"
      top="22vh"
      :visible.sync="DialogLeaveMessage"
      width="500px"
    >
      <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
      <div class="button_layout">
        <el-button type="text" class="button_style" @click='DialogLeaveMessage = false'>关闭</el-button>
        <el-button type="text" class="button_style" @click='DialogLeaveMessage = false'>确认</el-button>
      </div>
    </el-dialog>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      DialogLeaveMessage: false,
      textarea:''
    };
  }
};
</script>
<style scoped>
.original_intention {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.write_leave_message_layout {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 24px;
  color: gray;
}

.write_leave_message {
}

.icon_style {
  height: 25px;
}

.line_style {
  margin-top: 15px;
  border-top: 1px rgb(219, 219, 219) solid;
  width: 500px;
}

.leave_message_layout {
  margin-top: 20px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
}

.per_leave_message {
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /*  background-color: whitesmoke;  */
}

.per_leave_message_content {
  width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.per_leave_message_remark {
  font-size: 13px;
  width: 550px;
  margin-top: 19px;
  display: flex;
  justify-content: flex-end;
}

.button_layout{
  display: flex;
  justify-content:flex-end;
}

.button_style {
  display: flex;
  justify-content: center;
  width: 80px;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  background-color: #3e86ca;
  color: white;
  letter-spacing: 1px;
  padding: 7px;
}

/* .border_line{
  margin-top: 15px;
  border-top: 1px rgb(231, 231, 231) solid;
  width: 450px;
  
} */
</style>