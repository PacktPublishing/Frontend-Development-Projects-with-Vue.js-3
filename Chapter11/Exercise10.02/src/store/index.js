import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films:[],
    ships:[]
  },
  mutations: {
    setFilms(state, films) {
      state.films = films;
    },
    setShips(state, ships) {
      state.ships = ships;
    }
  },
  actions: {
    loadFilms(context) {
      axios.get('https://swapi.dev/api/films')
      .then(res => {
        context.commit('setFilms', res.data.results);
      })
      .catch(error => {
        console.error(error);
      });  
    },
    loadShips(context) {
      axios.get('https://swapi.dev/api/starships')
      .then(res => {
        context.commit('setShips', res.data.results);
      })
      .catch(error => {
        console.error(error);
      });  
    }

  },
  modules: {
  }
})
