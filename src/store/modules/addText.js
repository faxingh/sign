import {add} from '@/service/addText';
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
    updateList(state, payload){
      state.content={...state.content,...payload}
      }
  }

  // 模块内的异步改变
  const actions = {
    async submit(state, {...payload}){
      return new Promise(async (resolve, reject)=>{
         // 填充经纬度
        payload.latitude = payload.address.location.lat;
        payload.longitude = payload.address.location.lng;
        // 序列号地址
        payload.address = JSON.stringify(payload.address);
        let result = await add(payload);
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
  