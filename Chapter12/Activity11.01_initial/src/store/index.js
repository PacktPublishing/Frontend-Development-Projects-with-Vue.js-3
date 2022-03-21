import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'Lindy',
    job:'tank',
    favoriteColor:'blue',
    favoriteAnimal:'cat',
    cat: {
      name:'Cracker',
      gender:'male',
      job:'annoyer'
    }
  },
  getters: {
    desiredPet(state) {
      return state.favoriteColor + ' ' + state.favoriteAnimal;
    },
    petDescription(state) {
      return state.cat.name + ' is a ' + state.cat.gender + 
      ' ' + state.cat.job +  ' cat.';
    }
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setJob(state, job) {
      state.job = job;
    },
    setFavoriteColor(state, color) {
      state.color = color;
    },
    setFavoriteAnimal(state, animal) {
      state.animal = animal;
    },
    setCatName(state, name) {
      state.cat.name = name;
    },
    setCatGender(state, gender) {
      state.cat.gender = gender;
    },
    setCatJob(state, job) {
      state.cat.job = job;
    },
  },
  actions: {
  },
  modules: {
  }
})
