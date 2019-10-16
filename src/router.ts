import Vue from 'vue';
import Router from 'vue-router';
import CreateAccount from './views/create-account/create-account.vue';
import Login from './views/login/login.vue';
import MainPage from './views/main-page/main-page.vue';
import About from './views/About.vue';

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
      path: '/:username',
      name: 'mainPage',
      component: MainPage,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
