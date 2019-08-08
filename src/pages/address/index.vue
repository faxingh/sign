<template>
   <div class="address">
    <div class='textAddress'>
       <span>北京</span>
       <input placeholder='面试地址' v-model="title" @change="changeTitle"/>  
    </div>
    <div class="main">
      <div class="list" v-for="(item,index) in mapList" :key='index'>
         <div class="list-left"><img src="/static/images/logo.png" alt class="image" /></div>
         <div class="list-right" @click="goBack(item.address)">
           <p>{{item.title}}</p>
           <span>{{item.address}}</span>
         </div>
      </div>

    </div>
     <!-- <p v-for="(item,index) in mapList" :key='index'>1</p> -->
   </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
   data() {
    return {
     title:''
    };
  },
   computed: {
     ...mapState({
      mapList: state=>state.address.mapList,
    })
  },
  methods: {
     ...mapActions({
      location: 'home/getLocation',
      getSuggestion: 'address/getSuggestion'
    }),
    changeTitle(){
      this.getSuggestion(this.title);
    },
    goBack:(address)=>{
      const url = '../addTest/main?address='+address
      mpvue.navigateTo({url})
    },
  },
  mounted () {
    
  },
  created () {
    
  }
};
</script>

<style scoped>
.address{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
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
.main{
  width: 100%;
  flex: 1;
  overflow-x: auto;
}
.list{
   height:140rpx;
   display: flex;
   align-items: center;
   padding: 20rpx;
   box-sizing:border-box;
   border-bottom: 1px solid #eeeeee;
}
.list-left{
  width: 100rpx;
  height: 100rpx;
   margin-left: 40rpx;
}
.list-left img{
  width: 100%;
  height: 100%;
}
.list-right{
  flex: 1;
  margin-left: 20rpx;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.list-right p{
  font-size: 36rpx;
}
.list-right span{
  display:inline-block;
  color: #cccccc;
}
</style>
