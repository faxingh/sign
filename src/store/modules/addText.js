import {addSign} from '@/service/addText';
// 模块所有的状态
const state = {
   getList:[],
   content:{
     company:'',
     phone:'',
     address:'',
     description:''
   }
  }
  
  // 模块内的同步改变
  const mutations = {
    updateState(state, payload){
      state.content={...state.content,...payload}
      }
  }

  // 模块内的异步改变
  const actions = {
    async submit(state, {...payload}){
      return new Promise(async (resolve, reject)=>{
        let result = await addSign(payload);
        resolve(result);
      })
    }
   }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  