import { registerCompany } from "../../services/company/company.service";

const state = {
    isRegistering : false,
    company: {}
}

const actions = {

    REGISTER_COMPANY({ dispatch, commit }, { name, motivo, missao, vision, valores, logo }) {
        commit('registerCompanyRequest');

        registerCompany(name, motivo, missao, vision, valores, logo)
            .then((onResponse) => { 
                commit('registerCompanySuccess', onResponse);
                dispatch('alert/error', onResponse, { root: true }); 
                router.push('/')    
            })
            .catch((onError) => {
                commit('registerCompanyFailure', onError);
                dispatch('alert/error', onError, { root: true });     
            })
    },

    SEARCH_COMPANY_LEADER_ID ({ dispatch, commit }, { id }) {
        commit('searchCompanyRequest');

        searchCompanyByIdLeader(id)
        .then((onResponse) => { 
            commit('searchCompanySuccess', onResponse);
            dispatch('alert/error', onError, { root: true });     
        })
        .catch((onError) => { })
    }



}

const mutations = {
    registerCompanyRequest(state) {
        state.isRegistering = true;
    },
    registerCompanySuccess(state, company) {
        state.isRegistering = false;
        state.company = company;
    },
    registerCompanyFailure(state) {
        state.isRegistering = false;
        state.company = null;
    },

    searchCompanyRequest(state) {
        state.isRegistering = true;
    },
    searchCompanySuccess(state, company) {
        state.company = company;
    },
    searchCompanyFailure(state) {
        state.company = {};
    },
}

export const company = {
    namespaced: true,
    state,
    actions,
    mutations
}