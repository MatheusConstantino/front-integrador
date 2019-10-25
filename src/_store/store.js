import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

import { alert } from './alert/alert.module';
import { auth  } from './auth/auth.module';
import { lider } from './lider/lider.module';
import { user  } from './user/user.module';
import { region } from './region/region.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        auth,
        lider,
        user,
        region
    },
    plugins: [createPersistedState()]
});