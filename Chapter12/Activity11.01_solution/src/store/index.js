import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default new Vuex.Store({
  state,
  getters, 
  mutations, 
  modules: {
    cat: {
        state: {
          name:'Cracker',
          gender:'male',
          job:'annoyer'  
        },
        getters: {
          petDescription(state) {
            return state.name + ' is a ' + state.gender + 
            ' ' + state.job +  ' cat.';
          }
        },
        mutations: {
          setCatName(state, name) {
            state.name = name;
          },
          setCatGender(state, gender) {
            state.gender = gender;
          },
          setCatJob(state, job) {
            state.job = job;
          }
        }
      }
    }
})
