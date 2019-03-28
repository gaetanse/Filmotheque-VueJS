import Vue from 'vue';
import Router from 'vue-router';
import Items from './components/Items.vue';
import About from './components/About.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'items',
            component: Items
        },
        {
            path: '/about/:film',
            name: 'about',
            component: About
        }
    ]
});