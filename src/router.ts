import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login/login.vue';
import About from './views/About.vue';
import CreateAccount from './views/create-account/create-account.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/createAccount',
      name: 'createAccount',
      component: CreateAccount,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
