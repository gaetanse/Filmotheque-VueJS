import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listeFavoris: []
    },
    getters: {
        laListeFavoris: state => {
            return state.listeFavoris;
        }
    },
    mutations: {
        DELETE_FAVORI: (state, indexFavori) => {
            state.listeFavoris.splice(indexFavori, 1);
        },
        SET_FAVORI: (state, leFavori) => {
            state.listeFavoris.push(leFavori);
            localStorage.listeFavoris = JSON.stringify(leFavori);
        },
        SET_FAVORIS: (state, lesFavoris) => {
            state.listeFavoris = lesFavoris
        }
    }
});
