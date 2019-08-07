<template>
  <div class="wrap">
     <div class="head">
     <p class="active">未开始</p>
     <p>已打卡</p>
     <p>已放弃</p>
     <p>全部</p>
    </div>
    <div class="main">
       <div class="list">
          <div class="list-top">
            <h3>百度</h3><span>已打卡</span>
          </div>
          <div class="list-con">
            <p>北京市海淀区上地路八维大学</p>
          </div>
          <div class="list-bottom">
             <p>面试时间: <span>2019-08-07 0:07</span></p>
             <span>未提醒</span>
          </div>
       </div>
        <div class="list">
          <div class="list-top">
            <h3>百度</h3><span>已打卡</span>
          </div>
          <div class="list-con">
            <p>北京市海淀区上地路八维大学</p>
          </div>
          <div class="list-bottom">
             <p>面试时间: <span>2019-08-07 0:07</span></p>
             <span>未提醒</span>
          </div>
       </div>
        <div class="list">
          <div class="list-top">
            <h3>百度</h3><span>已打卡</span>
          </div>
          <div class="list-con">
            <p>北京市海淀区上地路八维大学</p>
          </div>
          <div class="list-bottom">
             <p>面试时间: <span>2019-08-07 0:07</span></p>
             <span>未提醒</span>
          </div>
       </div>
        <div class="list">
          <div class="list-top">
            <h3>百度</h3><span>已打卡</span>
          </div>
          <div class="list-con">
            <p>北京市海淀区上地路八维大学</p>
          </div>
          <div class="list-bottom">
             <p>面试时间: <span>2019-08-07 0:07</span></p>
             <span>未提醒</span>
          </div>
          
       </div>
         <div class="list">
          <div class="list-top">
            <h3>百度</h3><span>已打卡</span>
          </div>
          <div class="list-con">
            <p>北京市海淀区上地路八维大学</p>
          </div>
          <div class="list-bottom">
             <p>面试时间: <span>2019-08-07 0:07</span></p>
             <span>未提醒</span>
          </div>
          
       </div>
         <div class="list">
          <div class="list-top">
            <h3>百度</h3><span>已打卡</span>
          </div>
          <div class="list-con">
            <p>北京市海淀区上地路八维大学</p>
          </div>
          <div class="list-bottom">
             <p>面试时间: <span>2019-08-07 0:07</span></p>
             <span>未提醒</span>
          </div>
          
       </div>

    </div>
   
  
  </div>
</template>

<script>

export default {
  data() {
    return {
        
    };
  },
  components: {},
  methods: {

  },
  created() {}
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.main{
  width: 100%;
  flex: 1;
  background: #eeeeee;
  overflow-y: auto;
}
.head{
  width: 100%;
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 28rpx;
  border: 1px solid #cccccc;
}
.list{
  width: 100%;
  height: 240rpx;
  background: #ffffff;
  margin-top: 16rpx;
  display: flex;
  flex-direction: column;

}
.list-top{
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20rpx;
  box-sizing: border-box;
}
.list-top h3{
  font-weight: 800;
}
.list-top span{
  width: 100rpx;
  height: 40rpx;
  font-size: 24rpx;
  color: blue;
  text-align: center;
  line-height: 40rpx;
  background: skyblue;
}
.list-con{
  width: 100%;
  flex: 1;
  font-size: 28rpx;
  color: #cccccc;
  padding: 0 0 0 20rpx;
   box-sizing: border-box;
  display: flex;
  align-items: center;
}
.list-bottom{
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20rpx;
  box-sizing: border-box;
  color: #666666;
}
.list-bottom>span{
  width: 100rpx;
  height: 40rpx;
  font-size: 24rpx;
  color: blue;
  text-align: center;
  line-height: 40rpx;
  background: skyblue;
}
.active{
  color: blue;
}

</style>
