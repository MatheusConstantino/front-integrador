import Vue from 'vue';
import Router from 'vue-router';


import IndexPage from '../views/index/IndexPage'
import ArmazemPage from '../views/armazem/ArmazenPage'
import EquipePage from '../views/equipe/EquipePage'
import ProdutoPage from '../views/produto/ProdutoPage'
import FornecedorPage from '../views/fornecedor/FornecedorPage'
import MercadoPage from '../views/mercado/MercadoPage'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  hashbang: false,
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: IndexPage,  },
    { path: '/armazem', component: ArmazemPage},
    { path: '/produto', component: ProdutoPage},
    { path: '/equipe', component: EquipePage},
    {path: '/fornecedor', component: FornecedorPage},
    {path: '/mercado', component: MercadoPage},
    { path: '*', redirect: '/' }
  ]
});

