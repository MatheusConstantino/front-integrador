import Vue from 'vue';
import Router from 'vue-router';


import IndexPage from '../views/index/IndexPage'
import ArmazemPage from '../views/armazem/ArmazenPage'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  hashbang: false,
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: IndexPage,  },
    { path: '/armazem', component: ArmazemPage},
    { path: '*', redirect: '/' }
  ]
});

