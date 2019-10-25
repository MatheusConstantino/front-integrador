import { router } from '../../_helpers/router';
import { registerLider } from '../../services/lider/lider.service';


const state = {
    isRegistering: false,
}

const actions = {
    REGISTER_LIDER({ dispatch, commit }, { username, name, email, password }) {

        commit('registerLiderRequest');

        return registerLider(username, name, email, password)
            .then((onValue) => {
                commit('registerLiderSuccess')
                dispatch('alert/success', `Usuário foi criado com sucesso.`, { root: true }); 
                return Promise.resolve()
            })
            .catch((onError) => {
                commit('registerLiderFailure')
                dispatch('alert/error', onError, { root: true }); 
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