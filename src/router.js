import Vue from 'vue';
import Router from 'vue-router';
import Liste from './components/Liste.vue';
import Favoris from './components/Favoris.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'liste',
            component: Liste
        },
        {
            path: '/favoris/',
            name: 'favoris',
            component: Favoris
        }
    ]
});