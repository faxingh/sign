<template>
    <form @submit="submit" report-submit class="textWrap">
      <h2>面试信息</h2>
      <div class="company">
              <p>
                  <label for=''>公司名称</label>
                  <input placeholder="请输入公司名称" v-model="content.company" focus/>
              </p>
              <p>
                  <label for=''>公司电话</label>
                  <input placeholder="请输入面试联系人电话" v-model="content.phone" focus/>
              </p>
              <p class="times">
                  <label for=''>面试时间</label>
                  <input placeholder='2019-07-19 18:00' disable/>
                  <icon
                    @click="showTip"
                    class="tip"
                    type="warn"
                    color="#197DBF"
                    size="24">
                  </icon>
              </p>
              <p>
                  <label for=''>面试地址</label>
                  <input placeholder="请选择面试地址" @click='goAddress' v-model="content.address" focus/>
              </p>
              <h2>备注信息</h2>
              <textarea placeholder="备注信息(可选，100字以内"  rows="5" cols="50"  v-model="content.description">                    
              </textarea> 
              <button :class="btnEnable?'': 'disable'" form-type="submit" class="btn" @click="handleSubmit ">确认</button>
      </div>
          </form>
</template>

<script>
// Use Vuex
// import store from './store'
import { mapState,mapMutations,mapActions } from "vuex";
import { async } from 'q';
export default {

  computed: {
    ...mapState({
      content: state => state.addText.content
    }),
     handleSubmit() {
        // 判断公司名称是否为空
      if (!this.content.company){
        return false;
      }
      // 判断手机号是否符合规范
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.content.phone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.content.phone)){
        return false;
      }
      // 判断公司地址
      if (!this.content.address.address){
        return false;
      }
      return true;
        
    },
  },
  methods: {
    ...mapActions({
       submitText:'addText/submit'
    }),
    ...mapMutations({
      updateState: 'addText/updateList'
    }),
    //选择地址
    goAddress:()=>{
      const url = '../address/main'
       mpvue.navigateTo({url})
    }, 
    showTip(){
      wx.showToast({
        title: '在面试前一个小时我们会通知你哦', //提示的内容,
        icon: 'none', //图标,
      });
    },
      // 提交添加面试
    async submit(e){
      // 判断是否在提交状态
      if (this.submiting){
        return false;
      }
      // 判断公司名称是否为空
      if (!this.content.company){
        wx.showToast({
          title: '请输入公司名称', //提示的内容,
          icon: 'none', //图标,
        });
        return false;
      }
      // 判断手机号是否符合规范
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.content.phone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.content.phone)){
        wx.showToast({
          title: '请输入面试联系人的手机或座机', //提示的内容,
          icon: 'none', //图标,
        });
        return false;
      }
      // 判断公司地址
      if (!this.content.address.address){
        wx.showToast({
          title: '请选择公司地址', //提示的内容,
          icon: 'none', //图标,
        });
        return false;
      }
    
      // 添加form_id

      this.submiting = true;
      let data = await this.addText(this.content);
      console.log('data...', data);
      this.submiting = false;
      // 处理添加结果
      if (data.code == 0){
        wx.showModal({
          title: '温馨提示', //提示的标题,
          content: data.msg, //提示的内容,
          showCancel: false,
          confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: '#197DBF', //确定按钮的文字颜色,
          success: res => {
            if (res.confirm) {
             this.updateList({
                company: '',
                address: '',
                phone: ''
             })
             wx.navigateTo({ url: '/pages/interview/main' });
            }
          }
        });
      }else{
        wx.showToast({
          title: data.msg, //提示的内容,
          icon: 'fail'//图标,
        });
      }
    }
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
.times{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20rpx;
  box-sizing: border-box;
}
.times span{
  display: flex;
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
  background:#197DBF;
  color: #fff;
}
.btn .disable{
   background: #999
}
</style>
