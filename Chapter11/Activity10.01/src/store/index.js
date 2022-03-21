import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios';
const LOGIN_URL = 'https://api.jsonbin.io/b/5debc045bc5ffd04009563cd';
const CATS_URL = 'https://api.jsonbin.io/b/5debc16dcb4ac6042075d594';

export default new Vuex.Store({
  state: {
    token:'',
    cats:[]
  },
  mutations: {
    setCats(state, cats) {
      state.cats = cats;
    },
    setToken(state, t) {
      state.token = t;
    }
  },
  actions: {
    loadCats(context) {
      axios.get(CATS_URL,
        {
          headers: {
            'Authorization': 'bearer '+context.state.token
          }
        })
      .then(res => {
        context.commit('setCats', res.data);
      })
      .catch(error => {
        console.error(error);
      });
    },
    async login(context, credentials) {
      return axios.get(LOGIN_URL, {
        params:{
          username: credentials.username,
          password: credentials.password
        }
      })
      .then(res => {
        context.commit('setToken', res.data.token);
        return true;
      })
      .catch(error => {
        console.error(error);
      });  
    }
  }
})
