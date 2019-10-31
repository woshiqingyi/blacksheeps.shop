<template>
  <div class="original_intention">
    <div class="c_other_layout">
      <div class="c_other_title">留言板</div>
      <div class="c_other_content">请留下你的最想说的话</div>
      <div class="line_style"></div>
    </div>
    <div class="leave_message_layout">
      <div class="per_leave_message">
        <div class="per_leave_message_content">汽笛的一声鸣响，思念的春草已长满我的心头</div>
        <div class="per_leave_message_remark"> —— 郑晓峰 2019.1.1</div>
     <!--    <div class="border_line"></div> -->
      </div>
      <div class="per_leave_message">
        <div class="per_leave_message_content">人生在世草木一春，来如风雨，去似灰尘</div>
        <div class="per_leave_message_remark"> —— 我是清逸 2019.1.1</div>
      </div>
      <div class="per_leave_message">
        <div class="per_leave_message_content">万有的缘法都是偶然的泊寄罢了</div>
        <div class="per_leave_message_remark"> —— 断魂 2019.1.1</div>
      </div>
      <div class="per_leave_message">
        <div class="per_leave_message_content">万有的缘法都是偶然的泊寄罢了</div>
        <div class="per_leave_message_remark"> —— 断魂 2019.1.1</div>
      </div>
      <div class="per_leave_message">
        <div class="per_leave_message_content">万有的缘法都是偶然的泊寄罢了</div>
        <div class="per_leave_message_remark"> —— 断魂 2019.1.1</div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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

/* .border_line{
  margin-top: 15px;
  border-top: 1px rgb(231, 231, 231) solid;
  width: 450px;
  
} */
</style>