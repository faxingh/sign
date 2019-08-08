<template>
  <div class="wrap">
      <div class="head">
          <p :class="{'active':index===num}" v-for="(item,index) in topList" :key='index' @click="tab(index)">{{item.title}}</p>
      </div>
    <div class="main">
       <div class="list" @click="goDetail(item.id)" v-for="(item,index) in viewList" :key='index'>
          <div class="list-top">
             <h3>{{item.company}}</h3><span>已打卡</span>
          </div>
          <div class="list-con">
            <p>北京八维这一块 </p>
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
import {mapState, mapActions} from 'vuex';

export default {
  data() {
    return {
      num:3,
      topList:[
        {
          title:'未开始',
        },
        {
          title:'已打卡',
        },
         {
          title:'已放弃',
        },
         {
          title:'全部',
        },
      ]
    };
  },
  computed: {
     ...mapState({
      viewList: state=>state.interview.viewList,
    })
  },
  methods: {
      ...mapActions({
      sign: 'interview/getLocation'
    }),
  goDetail:(id)=>{
      const url = '../nest/main?id='+id
       mpvue.navigateTo({url})
   },
   tab(index){
     this.num = index;
   }
  },
  created() {
   this.sign()
  }
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
  padding: 20rpx;
  box-sizing: border-box;

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
  font-size: 38rpx;
}
.list-top span{
  width: 100rpx;
  height: 50rpx;
  font-size: 24rpx;
  color: blue;
  text-align: center;
  line-height: 50rpx;
  background: skyblue;
}
.list-con{
  width: 100%;
  flex: 1;
  font-size: 28rpx;
  color: #666666;
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
