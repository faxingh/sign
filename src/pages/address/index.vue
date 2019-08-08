<template>
   <div class="address">
    <div class='textAddress'>
       <span>北京</span>
       <input placeholder='面试地址'/>  
    </div>
   </div>
</template>

<script>
// Use Vuex
// import store from './store'

export default {
  
};
</script>

<style scoped>
.textAddress{
  margin-top:20rpx;
  width:100%;
  height:100rpx;
  border:2rpx solid #eee;
  display:flex;
  align-items:center;
}
.textAddress span{
  width:200rpx;
  text-align:center;
}
.textAddress input{
  border-left:4rpx solid #eee;
  padding-left:20rpx;
  box-sizing:border-box;
}
</style>
