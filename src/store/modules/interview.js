import {
  sign,
  detail
} from '@/service';
// 模块所有的状态
const state = {
  viewList: [],
  detailList: {},
}

// 模块内的同步改变
const mutations = {
  updateSign(state, payload) {
    state.viewList = payload;
    console.log(payload)
  },
  updateDetail(state, payload) {
    state.detailList = payload;
    console.log(payload)
  }

}

// 模块内的异步改变
const actions = {
  async getLocation({commit}, payload) {
    const res = await sign();
    commit("updateSign", res.data);
  },
  async getDetail({commit}, payload) {
    const res = await detail(payload);
    console.log(res.data, '11111111')
    commit("updateDetail", res.data);
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
