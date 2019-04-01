import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listeFavoris: []
  },
  getters: {
    laListeFavoris: state => {
      return state.listeFavoris
    }
  },
  mutations: {
    DELETE_PRODUIT: (state, indexFavori) => {
      state.listeFavoris.splice(indexFavori,1)
    },
    SET_PRODUIT: (state, product) => {
      state.listeFavoris.push(product)
    }
  },
  actions: {

  }
})
