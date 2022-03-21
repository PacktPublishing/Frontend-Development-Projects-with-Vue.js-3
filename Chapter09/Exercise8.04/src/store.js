import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formData: {
      name: '',
      occupation: '',
      organization: ''
    }
  },
  mutations: {
    profileUpdate(state, payload) {
      state.formData = {
        name: payload.name || '',
        occupation: payload.occupation || '',
        organization: payload.organization || '',
      }
    },
    profileClear(state) {
      state.formData = {
        name: '',
        occupation: '',
        organization: ''
      }
    }
  }
})
