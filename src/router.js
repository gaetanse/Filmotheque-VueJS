import Vue from 'vue';
import Router from 'vue-router';
import Liste from './components/Liste.vue';
import Favoris from './components/Favoris.vue';
import Infos from './components/Infos.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            commentaire: 'liste',
            component: Liste
        },
        {
            path: '/favoris/',
            commentaire: 'favoris',
            component: Favoris
        },
        {
            path: '/infos/:id',
            commentaire: 'infos',
            component: Infos
        }
    ]
});