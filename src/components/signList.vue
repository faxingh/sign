
<template>
  <div class="main">
    <div class="list" @click="goDetail(item.id)" v-for="(item,index) in viewList" :key="index">
      <div class="list-top">
        <h3>{{item.company}}</h3>
        <span>已打卡</span>
      </div>
      <div class="list-con">
        <p>北京八维这一块</p>
      </div>
      <div class="list-bottom">
        <p>
          面试时间:
          <span>2019-08-07 0:07</span>
        </p>
        <span>未提醒</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["viewList"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    goDetail: id => {
      const url = "../nest/main?id=" + id;
      mpvue.navigateTo({ url });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.main{
  width: 100%;
  flex: 1;
  background: #eeeeee;
  overflow-y: auto;
}
.list {
  width: 100%;
  height: 240rpx;
  background: #ffffff;
  margin-top: 16rpx;
  display: flex;
  flex-direction: column;
  padding: 20rpx;
  box-sizing: border-box;
}
.list-top {
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20rpx;
  box-sizing: border-box;
}
.list-top h3 {
  font-size: 38rpx;
}
.list-top span {
  width: 100rpx;
  height: 50rpx;
  font-size: 24rpx;
  color: #409eff;
  text-align: center;
  line-height: 50rpx;
  background: #ecf5ff;
  padding: 5rpx;
}
.list-con {
  width: 100%;
  flex: 1;
  font-size: 28rpx;
  color: #999;
  padding: 0 0 0 20rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.list-bottom {
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20rpx;
  box-sizing: border-box;
  color: #666666;
}
.list-bottom > span {
  width: 100rpx;
  height: 40rpx;
  font-size: 30rpx;
  color: #409eff;
  text-align: center;
  line-height: 40rpx;
  background: #ecf5ff;
  padding: 12rpx;
}

</style>