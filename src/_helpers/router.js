import Vue from 'vue';
import Router from 'vue-router';


import IndexPage from '../views/index/IndexPage'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  hashbang: false,
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: IndexPage,  },
    { path: '*', redirect: '/' }
  ]
});

