import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: "Lindy",
    lastName: "Roberthon"
  },
  getters: {
    name(state) {
      return `${state.firstName} ${state.lastName}`;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
