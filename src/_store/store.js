import Vue from "vue";
import Vuex from "vuex";

import { alert } from './alert/alert.module';
import { auth  } from './auth/auth.module';
import { lider } from './lider/lider.module';
import { user  } from './user/user.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        auth,
        lider,
        user
    }
});