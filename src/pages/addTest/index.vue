<template>
   <div class="testWrap">
      <h2>面试信息</h2>
      <div class="company">
        <p><em>公司名称</em><input value="请输入公司名称"/></p>
        <p><em>公司电话</em><input value="请输入面试联系人电话"/></p>
        <p><em>面试时间</em><input value='2019-07-19 18:00'/></p>
        <p><em>面试地址</em><input value="请选择面试地址"/></p>
      </div>
      <h2>备注信息</h2>
      <div class="textarea">
          <textarea value="备注信息(可选，100字以内)"  rows="5" cols="50"></textarea>
          <span>确认</span>
      </div>
      
    
   </div>
</template>

<script>
// Use Vuex
// import store from './store'

export default {
  methods: {
  
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
  font-size: 26rpx;
}
 .testWrap{
   width: 100%;
   height: 100%;
   background: #eee;
   display: flex;
   flex-direction: column;

 }
 h2{
   padding-left: 20rpx;
   height:80rpx;
   line-height: 80rpx;
 }
 .company{
   width: 100%;
   background: #fff;
 }
 p{
   display: flex;
   border-bottom: 2rpx solid #eee;
   height:80rpx;
   display: flex;
   align-items: center;
   padding-left: 20rpx;
 }
 p em{
   font-size: 28rpx;
 }
 input{
   padding-left: 20rpx;
    font-size: 28rpx;
 }
 .textarea{
   width: 100%;
   flex:1;
   background: #fff; 
   padding-top: 40rpx;
 }
 .textarea textarea{
   width: 90%;
   border:2rpx solid #ccc;
   padding: 10rpx;
   box-sizing: border-box;
   margin:0 auto;
 }
 .textarea span{
   margin-top: 40rpx;
   display: inline-block;
   width: 100%;
   height: 100rpx;
   text-align: center;
   line-height: 100rpx;
   background: #666;
   color: #fff;
 }
</style>
