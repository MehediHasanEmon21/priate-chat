

require('./bootstrap');

window.Vue = require('vue');

import storeVuex from './store/index'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store(storeVuex)



// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('main-app', require('./components/MainApp.vue').default);


const app = new Vue({
    el: '#app',
    store
});
