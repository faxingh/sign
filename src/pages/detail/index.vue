<template>
   <div class="nestWrap">
      <div class="company">
        <p><em>面试地址:</em><input value="北京市朝阳区国家体育场南路1号"/></p>
        <p><em>面试时间:</em><input value='2019-07-19 18:00'/></p>
        <p><em>联系方式:</em><input value="1593434343"/></p>
        <p><em>是否提醒:</em><input value="未提醒"/></p>
        <p><em>面试状态:</em><input value="未开始"/></p>
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
 .nestWrap{
   width: 100%;
   height: 100%;
   background: #fff;
   display: flex;
   flex-direction: column;
   border-top: 2rpx solid #eeee;

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
 .btns{
   width: 100%;
   display: flex;
   padding: 0 20rpx;
   box-sizing: border-box;
   margin-top: 40rpx;
 }
 .btns span{
   width: 50%;
   height: 90rpx;
   border:2rpx solid #ccc;
   margin-left: 20rpx;
   text-align: center;
   line-height: 90rpx;
   color: #fff;
 }
 .btns span:first-child{
   background: #197DBF;
 }
 .btns span:nth-of-type(2){
   background: #DC4E42
 }
</style>
