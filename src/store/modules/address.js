import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js';

// 实例化一下
const qqMapSdk = new QQMapWX({
  key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
});

const state = {
  mapList:[]
}
// 模块内的同步改变
const mutations = {
  upList(state, payload) {
    state.mapList = payload;
    console.log(payload)
  }

}
const actions = {
  getSuggestion({commit}, payload){
    qqMapSdk.getSuggestion({
      keyword: payload,
      success: res=>{
        commit("upList", res.data);
      }
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}