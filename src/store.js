import Vue from "vue"
import Vuex from "vuex"
import {getById} from "bootstrap-vue/src/utils/dom";

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
            localStorage.listeFavoris = JSON.stringify(state.listeFavoris);
        },
        SET_FAVORI: (state, leFavori) => {
            state.listeFavoris.push(leFavori);
            localStorage.listeFavoris = JSON.stringify(state.listeFavoris);
        },
        SET_FAVORIS: (state, lesFavoris) => {
            state.listeFavoris = lesFavoris;
            localStorage.listeFavoris = JSON.stringify(lesFavoris);
        },
    }
});
