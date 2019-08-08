<template>
  <div class="testWrap">
    <h2>面试信息</h2>
    <div class="company">
      <p>
        <em>公司名称</em>
        <input placeholder="请输入公司名称" v-model="username" />
      </p>
      <p>
        <em>公司电话</em>
        <input placeholder="请输入面试联系人电话" v-model="tel" />
      </p>
      <p class="times">
        <span>
          <em>面试时间</em>
          <picker
            mode="multiSelector"
            :range="dateRange"
            :value="info.date"
            @change="dateChange"
            @columnchange="columnChange"
          >
            <span class="date">{{dateShow}}</span>
          </picker>
        </span>
        <icon @click="showTimeTip" class="tip" type="warn" color="#197DBF" size="24"></icon>
      </p>
      <p>
        <em>面试地址</em>
        <input placeholder="请选择面试地址" @click="goAddress" v-model="address" disable />
      </p>
      <h2>备注信息</h2>
      <textarea placeholder="备注信息(可选，100字以内)" v-model="description" rows="5" cols="50"></textarea>
    </div>
    <input type="submit" class="btn" value="确认" @click="handleSubmit " />
  </div>
</template>

<script>
// Use Vuex
// import store from './store'
import { mapState, mapActions } from "vuex";
const moment = require("moment"); //时间插件
const range = [
  [0,1,2,3,4,5,6,7,8,9],
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  ['00分','10分','20分','30分','40分','50分']
];
export default {
  data() {
    return {
      username: "",
      tel: "",
      time: "",
      address: "",
      description: "",
      info: {
        date: [0, 0, 0]
      }
    };
  },
  computed: {
    ...mapState({
      getList: state => state.addText.getList
    }),
    // 处理面试日期
    dateRange() {
      let dateRange = [...range];
      // 如果时间是今天，过滤掉现在之前的小时
      if (!this.info.date[0]) {
        dateRange[1] = dateRange[1].filter(item => {
          return item > moment().hour();
        });
      } else {
        dateRange[1] = range[1];
      }
      // 格式化小时
      dateRange[1] = dateRange[1].map(item => {
        return item + "点";
      });
      // 计算当前日期之后的十天
      dateRange[0] = dateRange[0].map(item => {
        return (
          moment()
            .add(item, "days")
            .date() + "号"
        );
      });
      return dateRange;
    },
    // 显示的日期
    dateShow() {
      return moment()
        .add(
          moment().hour() == 23 ? this.info.date[0] - 1 : this.info.date[0],
          "d"
        )
        .add(this.info.date[1] + 1, "h")
        .minute(this.info.date[2] * 10)
        .format("YYYY-MM-DD HH:mm");
    }
  },
  methods: {
    goAddress: () => {
      const url = "../address/main";
      mpvue.navigateTo({ url });
    },
    ...mapActions({
      add: "addText/listData"
    }),
    handleSubmit() {
      console.log(this.username, this.tel);
    },
    // 监听多列选择器每列变化
    columnChange(e) {
      let { column, value } = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },
    showTimeTip() {
      wx.showToast({
        title: "在面试前一个小时我们会通知你哦", //提示的内容,
        icon: "none" //图标,
      });
    }
  },
  created() {
    if (moment().hour() == 23) {
      this.info.date = [1, 0, 0];
    }
  },
  onLoad(options) {
    if (options.address) {
      this.address = options.address;
      console.log(this.address);
    }
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
.times {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20rpx;
  box-sizing: border-box;
}
.times span {
  display: flex;
}
.times span em {
  margin-right: 20rpx;
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
