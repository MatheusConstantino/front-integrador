import { realizarAuthenticacao } from '../../services/authentication/auth.service';
import { router } from '../../_helpers/router';
import { searchCompanyByIdLeader } from '../../services/company/company.service';

const state = {
    userRequestLogin: false,
    user: {}
}

const actions = {
    LOGIN({ dispatch, commit }, { username, password }) {
        commit('loginRequest', { username })

        realizarAuthenticacao(username, password)
            .then(async(onValue) => {
                commit('loginSuccess', onValue);

                if(await onValue.roles.find((onValue) => { return _.isEqual(onValue, `TEACHER`) }))
                {
                    return router.push('/cadastro-lider')
                }
                if(await onValue.roles.find((onValue) => { return _.isEqual(onValue, `LEADER`) }))
                {
                    searchCompanyByIdLeader(onValue.id)
                        .then((onValue) => {
                            if(_.isEmpty(onValue)) {
                                return router.push('/cadastro-empresa')
                            }
                            return router.push('/escolhe-regiao')
                        })
                        .catch((onError) => { })
                    
                }

                router.push('/');
            })
            .catch((onError) => {
                commit('loginFailure', onError);
                dispatch('alert/error', onError, { root: true });                    
            })
    }
}

const mutations = {
    loginRequest(state, user) {
        state.userRequestLogin = true;
        state.user = user;
    },
    loginSuccess(state, user) {
        state.userRequestLogin = false;
        state.user = user;
    },
    loginFailure(state) {
        state.userRequestLogin = false;
        state.user = null;
    },
}

export const auth = {
    namespaced: true,
    state,
    actions,
    mutations
}