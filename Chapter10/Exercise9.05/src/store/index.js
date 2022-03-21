import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books:[]
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    }
  },
  actions: {
    loadBooks(context) {
      fetch('/data/books.json')
      .then(res => res.json())
      .then(res => {
        context.commit('setBooks', res);
      });
    }
  }
})
