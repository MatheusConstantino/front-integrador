import Vue from 'vue';
import VeeValidate from 'vee-validate';
import './scss/style.scss';

import { router } from './_helpers/router';
import { store } from '../src/_store/store';

import Root from './views/root/Root';

//Vue.use(VeeValidate);

new Vue({
    el: '#root',
    render: h => h(Root),
    router,
    store,
    
});