import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

//用于响应组件中的动作
const actions = {
  add: function (context) {
    context.commit('add')
  },
  // subtract: function (context) {
  //   context.commit('subtract')
  // }
}
//用于操作数据（state）
const mutations = {
  add (state) {
    state.sum = state.sum + 1
    console.log('mutation被调用了')
  },
  SUBSTRACT (state) {
    state.sum = state.sum - 1
  }
}
//用于存储数据
const state = {
  sum: 0,
}
//创建store
const store = new Vuex.Store({
  actions,
  mutations,
  state
})

export default store