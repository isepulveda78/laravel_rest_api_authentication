import router from './router'
import store from './vuex'
import localforage from 'localforage'

localforage.config({
    driver: localforage.LOCALSTORAGE,
    storeName: 'singlePage'
})
window.Vue = require('vue');

require('./bootstrap');


Vue.component('app', require('./components/App.vue').default);
Vue.component('navigation', require('./components/Navigation.vue').default);

store.dispatch('auth/setToken').then(() => {
  store.dispatch('auth/fetchUser').catch(() => {
      store.dispatch('auth/clearAuth')
      router.replace({ name: 'login' })
  })
}).catch(() => {
    store.dispatch('auth/clearAuth')
});

const app = new Vue({
    router: router,
    store: store,
    el: '#app'
});
