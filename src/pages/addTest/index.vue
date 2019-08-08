<template>
   <div class="testWrap">
      <h2>面试信息</h2>
      <div class="company">
        
        <p><em>公司名称</em><input value="请输入公司名称" v-model="username" disable/></p>
        <p><em>公司电话</em><input value="请输入面试联系人电话" v-model="tel" disable/></p>
        <p><em>面试时间</em><input value='2019-07-19 18:00' disable/></p>
        <p><em>面试地址</em><input value="请选择面试地址" @click='goAddress' disable/></p>
        <h2>备注信息</h2>
        <textarea value="备注信息(可选，100字以内)"  rows="5" cols="50"></textarea>
         
      </div>
        <input type='submit' class="btn" value="确认" @click="handleSubmit ">
   
      
    
   </div>
</template>

<script>
// Use Vuex
// import store from './store'
import { mapState, mapActions } from "vuex";
export default {
  data: {
    username: "",
    tel: "",
    time: "",
    address: ""
  },

  computed: {
    ...mapState({
      getList: state => state.addText.getList
    })
  },
  methods: {
    goAddress:()=>{
      const url = '../address/main'
       mpvue.navigateTo({url})
    },
    ...mapActions({
      add: "addText/listData"
    }),
    handleSubmit() {
      console.log(this.username, this.tel);
    }
    // goDetail:()=>{
    //     const url = '../detail/main'
    //      mpvue.navigateTo({url})
    //  },
  },
  created() {
    
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-size: 26rpx;
}
.testWrap {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
}
h2 {
  padding-left: 20rpx;
  height: 80rpx;
  line-height: 80rpx;
  background: #eee;
}
.company {
  width: 100%;
  background: #fff;
}
p {
  display: flex;
  border-bottom: 2rpx solid #eee;
  height: 80rpx;
  display: flex;
  align-items: center;
  padding-left: 20rpx;
}
p em {
  font-size: 28rpx;
}
input {
  padding-left: 20rpx;
  font-size: 28rpx;
}
textarea {
  width: 95%;
  border: 2rpx solid #ccc;
  margin: 40rpx auto;
  padding: 20rpx;
  box-sizing: border-box;
}

.btn {
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
