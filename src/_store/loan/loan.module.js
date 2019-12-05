import { searchAllLoans, searchLoan, searchMaxValueLoan, registerNewLoan } from "../../services/loan/loan.service"

const state = {
    loan        : {},
    maxValueLoan: {},
    loans       : [],
    isRegistering: false,
}

const actions = {
    LIST_ALL_LOANS({ commit }) {
        searchAllLoans()
            .then((onData) => {
                commit('listAllLoansSuccess', onData)
                
                return Promise.resolve(onData)
            })
            .catch((onError) => { return Promise.reject() })
    },

    LIST_MAX_VALUE_LOAN ({ commit }) {
        searchMaxValueLoan()
            .then((onData) => {
                commit('listMaxValueLoanSuccess', onData)
                return Promise.resolve(onData)
            })
            .catch((onError) => { return Promise.reject() })
    },

    LIST_LOAN({ commit }) {
        searchLoan()
            .then((onData) => {
                commit('listLoanSuccess', onData)
                return Promise.resolve(onData)
            })
            .catch((onError) => { return Promise.reject() })
    },

    REGISTER_NEW_LOAN({ dispatch, commit }, { totalValue }) {
        
        commit('registerNewLoanRequest')
        
        registerNewLoan(totalValue)
            .then((onData) => {
                
                commit('registerNewLoanSuccess')
                commit('listMaxValueLoanSuccess', onData)
                dispatch('alert/success', onData, { root: true });
                return Promise.resolve(onData)
            })
            .catch((onError) => { 
                
                commit('registerNewLoanSuccess');
                dispatch('alert/error', onError, { root: true });
                return Promise.reject() 
            
            })
    }
}

const mutations = {
    
    listAllLoansSuccess(state, loans) {
        state.loans = loans;
    },

    listMaxValueLoanSuccess(state, loan) {
        state.maxValueLoan = loan;
    },

    listLoanSuccess(state, loan) {
        state.loan = loan;
    },

    registerNewLoanRequest(state) {
        state.isRegistering = true
    },

    registerNewLoanSuccess(state) {
        state.isRegistering = false
    },


}

export const loan = {
    namespaced: true,
    state,
    actions,
    mutations,
}
