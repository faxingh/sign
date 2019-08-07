<template>
  <div class="wrap">
    <div class="main">
         <map name=""></map>
    </div>
    <div class="foot">
      <p @click="goaddTest">添加面试</p>
    </div>
    <div class="img" @click="goWode">
         <img src="/static/images/users.png" alt class="image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    goaddTest:()=>{
      const url = '../addTest/main'
       mpvue.navigateTo({url})
   },
   goWode:()=>{
      const url = '../wode/main'
       mpvue.navigateTo({url})
   }

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
}
.main map{
  width: 100%;
  height: 100%;
}
.img{
  position: fixed;
  bottom: 150rpx;
  right: 50rpx;
  width: 100rpx;
  height: 100rpx;
  background: #000000;
  border-radius: 50%;
  overflow: hidden;
}
.img img{
  width: 100%;
  height: 100%;
}
.foot{
  width: 100%;
  height: 120rpx;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36rpx;
  color: aliceblue;
}
</style>
