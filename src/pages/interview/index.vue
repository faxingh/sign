<template>
  <div class="wrap">
      <div class="head">
          <p :class="{'active':index===num}" v-for="(item,index) in topList" :key='index' @click="tab(index)">{{item.title}}</p>
      </div>
        <signList :viewList='viewList'></signList>
    
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import signList from '../../components/signList.vue'
export default {
  components: {
    signList
  },
  data() {
    return {
      num:3,
      //标题数组
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

.head{
  width: 100%;
  height: 88rpx;
  display: flex;
  justify-content: space-around;
  font-size: 28rpx;
  border: 1px solid #cccccc;
}
.head p{
  height: 88rpx;
  line-height: 88rpx;
}
.active {
  color: #2785c3;
  border-bottom: 2px solid #197dbf;
}

</style>
