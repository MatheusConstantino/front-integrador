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

                if(onValue.roles.find((onValue) => { return _.isEqual(onValue, `TEACHER`) }))
                {
                    return router.push('/cadastro-lider')
                }
                else if(onValue.roles.find((onValue) => { return _.isEqual(onValue, `LEADER`) }))
                {
                    await searchCompanyByIdLeader(onValue.id)
                        .then((onValue) => {
                            if(_.isEmpty(onValue)) {
                                return router.push('/cadastro-empresa')
                            }
                            dispatch('company/PERSIST_COMPANY', onValue, { root: true })
                            return router.push('/escolhe-regiao')
                        }).catch((onError) => { })
                    
                    
                }else {
                    return router.push('/');
                }

                
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