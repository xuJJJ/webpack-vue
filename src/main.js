import Vue from 'vue';
import App from './App.vue';
import routes from './router/index';
import VueRouter from 'vue-router';

import './assets/less/common.less';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')