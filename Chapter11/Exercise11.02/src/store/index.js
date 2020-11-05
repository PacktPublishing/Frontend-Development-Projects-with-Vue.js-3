import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import portfolio from './portfolio.js';

export default new Vuex.Store({
  state: {
    firstName:'Raymond',
    lastName:'Camden'
  },
  getters: {
    name(state) {
      return state.firstName + ' ' + state.lastName;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    resume: {
      state: {
        forHire:true,
        jobs: [
          "Librarian", 
          "Jedi",
          "Cat Herder"
        ]
      },
      getters: {
        totalJobs(state) {
          return state.jobs.length;
        }
      }
    },
    portfolio
  }
})
