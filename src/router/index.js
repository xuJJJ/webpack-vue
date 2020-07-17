import home from '../views/Home.vue';
const routes = [{
  path: '/',
  name: 'home',
  // component: (resolve) => require(['../views/Home.vue'], resolve)
  component: home
}];
export default routes;