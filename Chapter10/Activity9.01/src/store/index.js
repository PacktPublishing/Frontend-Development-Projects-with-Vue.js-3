import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { name: "Widgets", price: 10 },
      { name: "Doodads", price: 8 },
      { name: "Roundtuits", price: 12 },
      { name: "Fluff", price: 4 },
      { name: "Goobers", price: 7 }
    ],
    cart: [
    ]
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, item) => {
        let product = state.products.find(p => p.name === item.name);
        return total + (product.price * item.quantity);
      }, 0);
    }
  },
  mutations: {
    addToCart(state, product) {
      let index = state.cart.findIndex(p => p.name === product.name);
      if(index !== -1) {
        state.cart[index].quantity++;
      } else {
        state.cart.push({ name: product.name, quantity: 1});
      }
    },
    removeFromCart(state, product) {
      let index = state.cart.findIndex(p => p.name === product.name);
      if(index !== -1) {
        state.cart[index].quantity--;
        if(state.cart[index].quantity === 0) state.cart.splice(index, 1);
      }
    }
  },
  actions: {
  }
})
