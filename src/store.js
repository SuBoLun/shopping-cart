import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    productList:[]
  },
  actions: {
    addProduct({ commit }, payload) {
    commit('addProduct', payload)
  }

  },
  mutations: {
    initProductList (state) {
        axios.get("/p").then(function(response) {
        state.productList = response.data.productList;
      });
    },
    addProduct (state, paload){
        state.productList.push(paload)
        console.log('check in store')
        console.log(state.productList)
    }
  }
})

export default store;