import {add} from '@/service';
// 模块所有的状态
const state = {
   getList:[]
  }
  
  // 模块内的同步改变
  const mutations = {
    updateList(state, payload){
      state.getList = payload;
      console.log(payload)
      }
  }

  // 模块内的异步改变
  const actions = {
    async listData({commit},payload){
        const res = await add();
        //console.log(res);
        commit("updateList",res.data);
    }
   }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  