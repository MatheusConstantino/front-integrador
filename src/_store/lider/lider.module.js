import { router } from '../../_helpers/router';
import { registerLider } from '../../services/lider/lider.service';


const state = {
    isRegistering: false,
}

const actions = {
    REGISTER_LIDER({ dispatch, commit }, { name, email, password}) {

        commit('registerLiderRequest');

        registerLider(name, email, password)
            .then((onValue) => {
                commit('registerLiderSuccess')
                dispatch('alert/success', onError, { root: true }); 
            })
            .catch((onError) => {
                commit('registerLiderFailure', onValue)
                dispatch('alert/success', onError, { root: true }); 
            })
    }
}
const mutations = {
    registerLiderRequest(state) {
        state.isRegistering = true;
    },
    registerLiderSuccess(state) {
        state.isRegistering = false;
    },
    registerLiderFailure(state) {
        state.isRegistering = false;
    },
}

export const lider = {
    namespaced: true,
    state,
    actions,
    mutations
}