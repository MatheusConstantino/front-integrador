import { cotationDollar, cotationInflation, limityMonthly, limitsYearly } from "../../services/market/market.service"

const state = {
    isRequesting     : false,
    cotationDollar   : 'XX.XX',
    cotationInflation: 'X.X',
    demandMonthly    : 'XXXXX.X',
    demandYearly     : 'XXXXX.X'
}

const actions = {
   COTATION_DOLLAR({ commit }) {     
        cotationDollar()
            .then((onData)   => { commit('cotationDollarSuccess', onData); return Promise.resolve(onData)   })
            .catch((onError) => { commit('cotationDollarFailure', onError); return Promise.reject()         })
   },

   COTATION_INFLATION({ commit }) {
        cotationInflation()
            .then((onData)   => { debugger; commit('contatioInflationSuccess', onData);  return Promise.resolve(onData)   })
            .catch((onError) => { commit('contatioInflationFailure', onError); return Promise.reject()          })
   },
   
   DEMAND_MONTHLY({ commit }) {
        limityMonthly()
            .then((onData)   => { commit('demandMonthlySuccess', onData); return Promise.resolve(onData)   })
            .catch((onError) => { commit('demandMonthlyFailure', onError); return Promise.reject()         })
   },

    DEMAND_YEARLY({ commit }) {
        limitsYearly()
            .then((onData)   => { commit('demandYearlySuccess', onData); return Promise.resolve(onData) })
            .catch((onError) => { commit('demandYearlyFailure', onError); return Promise.reject() })
    },

}

const mutations = {
    contationDolarRequest(state) {
        state.isRequesting = true
    },

    cotationDollarSuccess(state, dollar) {
        state.isRequesting = false;
        state.cotationDollar = dollar;
    },

    cotationDollarFailure(state) {
        state.isRequesting = false;
    },

    contatioInflationRequest(state) {
        state.isRequesting = true
    },

    contatioInflationSuccess(state, inflation) {
        state.isRequesting = false;
        state.cotationInflation = inflation;
        debugger;
    },

    contatioInflationFailure(state) {
        state.isRequesting = false;
    },

    demandMonthlyRequest(state) {
        state.isRequesting = true;
    },

    demandMonthlySuccess(state, demand) {
        state.isRequesting = false;
        state.demandMonthly = demand;
    },

    demandMonthlyFailure(state) {
        state.isRequesting = false;
    },

    demandYearlyRequest(state) {
        state.isRequesting = true;
    },

    demandYearlySuccess(state, demand) {
        state.isRequesting = false;
        state.demandYearly = demand;
    },

    demandYearlyFailure(state) {
        state.isRequesting = false;
    }
}

export const market = {
    namespaced: true,
    state,
    actions,
    mutations,
}