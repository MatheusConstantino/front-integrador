import Vue from 'vue';
import Router from 'vue-router';


import IndexPage from '../views/index/IndexPage'
import ArmazemPage from '../views/armazem/ArmazenPage'
import EquipePage from '../views/equipe/EquipePage'
import ProdutoPage from '../views/produto/ProdutoPage'
import FornecedorPage from '../views/fornecedor/FornecedorPage'
import MercadoPage from '../views/mercado/MercadoPage'
import CadastroUser from '../views/cadastrouser/CadastroUser'
import CadastroE from '../views/cadastroempresa/CadastroEPage'
import LoginPage from '../views/login/LoginPage'
import CadastroRegiao from '../views/cadastroregiao/CadastroRegiao'
import CadastroLider from '../views/cadastrolider/CadastroLider'

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
    {path: '/cadastro-equipe', component: CadastroUser},
    {path: '/cadastro-empresa', component: CadastroE},
    {path: '/login', component: LoginPage},
    {path: '/escolhe-regiao', component: CadastroRegiao},
    {path: '/cadastro-lider', component: CadastroLider},
    { path: '*', redirect: '/' }
  ]
});

