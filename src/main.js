import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import ResetInput from 'v-reset-input';
import VueLocalStorage from 'vue-localstorage'

import axios from 'axios';

Vue.use(BootstrapVue);
Vue.use(ResetInput);
Vue.use(VeeValidate);
Vue.use(VueLocalStorage)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
