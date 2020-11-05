import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalCats:5, 
    name: "Lindy"
  },
  mutations: {
    adoptCat(state) {
      state.totalCats++;
    },
    placeCat(state) {
      if(state.totalCats > 0) state.totalCats--;
    },
    setName(state, name) {
      state.name = name;
    }
  }
})
