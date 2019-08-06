<template>
  <div class="wrap">
    <div class="header">
      <!-- <div>
       <img src="/static/images/users.png" alt class="image" />
      <p>159*****7149</p>
      </div> -->
      <div class="img">
      <span>
    <img src="/static/images/users.png" alt class="image" />
      </span>
      <p class="phone">159****7149</p>
    </div>
    </div>
    <div class="main">
      <div class="list">
        <div class="list-left">
          <span>⊙</span>
          <p>我的面试</p>
        </div>
        <i>></i>
      </div>
      <div class="list">
        <div class="list-left">
          <span>⊙</span>
          <p>客服中心</p>
        </div>
        <i>></i>
      </div>
    </div>
  </div>
</template>

<script>
import "../../utils/fonts/iconfont.css";
export default {
  data() {
    return {};
  },

  components: {},

  methods: {},
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
.header {
  width: 100%;
  height: 280rpx;
  background: #eeeeee;
  display: flex;
  align-items: center;
}
.img {
  width: 100%;
  height: 300rpx;
  background: rgb(240, 243, 245);
}
.img > span {
  display: block;
  width: 120rpx;
  height: 120rpx;
  background: white;
  border-radius: 50%;
  margin-top: 50rpx;
  margin-left: 42%;
}
.image {
  width: 90rpx;
  height: 90rpx;
  margin-top: 15rpx;
  margin-left: 15rpx;
}
.phone {
  margin-top: 4%;
  width: 100%;
  text-align: center;
}
.main {
  width: 100%;
  flex: 1;
}
.list {
  width: 100%;
  height: 120rpx;
  border-bottom: 2px solid #eee;
  display: flex;
  justify-content: space-between;
  padding: 0 20rpx;
  box-sizing: border-box;
  align-items: center;
}
.list i{
  color: #666666;
}
.list-left {
  display: flex;
  line-height: 120rpx;
}
.list-left p {
  margin-left: 20rpx;
}
.list-left span {
  font-size: 50rpx;
  color: blue;
}
</style>
