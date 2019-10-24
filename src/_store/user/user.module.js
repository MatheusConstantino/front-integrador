import { registerMember } from "../../services/user/user.service";

const state = {
    isRegistering: false,
}

const actions = {
    REGISTER_MEMBER({ dispatch, commit }, { username, name, email, password }) {
            
        commit('registerUserRequest');

        return registerMember(username, name, email, password)
            .then((onValue) => {
                commit('registerUserSuccess');
                dispatch('alert/success', onError, { root: true });
                return Promise.resolve(); 
            })
            .catch((onError) => {
                    commit('registerUserFailure');
                    dispatch('alert/error', onError, { root: true }); 
                    return Promise.reject();
                })

        }
}

const mutations = { 
    
    registerUserRequest(state) {
        state.isRegistering = true;
    },

    registerUserSuccess(state) {
        state.isRegistering = false;
    },

    registerUserFailure(state) {
        state.isRegistering = false;
    }

}

export const user = {
    namespaced: true,
    state,
    actions,
    mutations
}

