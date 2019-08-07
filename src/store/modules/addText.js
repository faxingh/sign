import {add} from '@/service';
// 模块所有的状态
const state = {
   list:[]
  }
  
  // 模块内的同步改变
  const mutations = {
    updateSign(state, payload){
        console.log(payload)
      }
  }

  // 模块内的异步改变
  const actions = {
    async getLocation({commit},payload){
        const res=await sign();
        commit("updateSign",res.data);
    }
   }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  