import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

import { alert } from './alert/alert.module';
import { auth  } from './auth/auth.module';
import { lider } from './lider/lider.module';
import { user  } from './user/user.module';
import { company } from './company/company.module';
import { region } from './region/region.module';
import { products} from './products/products.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        auth,
        lider,
        user,
        company,
        region,
        products
    },
    plugins: [createPersistedState({blacklist: ["error", "success", "clear"]})]
});