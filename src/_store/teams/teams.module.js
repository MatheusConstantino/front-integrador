import { searchAllTeams, searchCostsTeamsType, searchCostsTeamsAll, searchTeamsType, registerTeams } from "../../services/teams/teams.service";

const state = {
    isRegistering: false,
    teams: {
        all: {},
        costsType: {},
        costsAll: {},
        types: {}
    }
}

const actions = {

    REGISTER_TEAMS({ dispatch, commit }, data ) {
        commit('searchTeamsRequest')
        registerTeams(data)
            .then((onResponse) => {
                commit('registerTeamsSuccess')
                swal({
                    title: "Registro criado !",
                    text: `Sua equipe foi contratada com sucesso.`,
                    icon: 'success',
                    className: 'swal-footer'
                });
            })
            .catch((onError) => {
                commit('registerTeamsFailure', onError);
                swal({
                    title: "Erro !",
                    text: onError.message,
                    icon: 'error',
                    className: 'swal-footer'
                });
            }) 
    },

    SEARCH_ALL_TEAMS({ dispatch, commit }) {
        
        searchAllTeams()
            .then((onResponse) => {
                commit('searchAllTeamsSuccess', onResponse);
            })
            .catch((onError) => {
                commit('searchAllTeamsFailure', onError);
            }) 

    },

    SEARCH_COSTS_TEAMS_TYPE({ dispatch, commit }, { type }) {
        
       searchCostsTeamsType(type)
            .then((onResponse) => {
                commit('searchCostsTypeSuccess', onResponse);
            })
            .catch((onError) => {
                commit('searchCostsTypeFailure', onError);
            })

    },

    SEARCH_COST_TEAMS_ALL({ dispatch, commit }) {

        searchCostsTeamsAll()
            .then((onResponse) => {
                commit('searchCostsAllSuccess', onResponse);
            })
            .catch((onError) => {
                commit('searchCostsAllFailure', onError);
            })

    },

    SEARCH_TEAMS_TYPE({ dispatch, commit }) {

        searchTeamsType()
            .then((onResponse) => {
                commit('searchTeamsTypesSuccess', onResponse);
            })
            .catch((onError) => {
                commit('searchTeamsTypesFailure', onError);
            })

    }

}

const mutations = {

    searchTeamsRequest(state) {
        state.isRegistering = true;
    },

    registerTeamsSuccess(state) {
        state.isRegistering = false;
    },

    registerTeamsFailure(state) {
        state.isRegistering = false;
    },

    searchAllTeamsSuccess(state, team) {
        state.teams.all = team;
        state.isRegistering = false;
    },
    searchAllTeamsFailure(state) {
        state.teams.all = {};
        state.isRegistering = false;
    },

    searchCostsTypeSuccess(state, team) {
        state.teams.costsType = team;
        state.isRegistering = false;
    },
    searchCostsTypeFailure(state) {
        state.teams.costsType = {};
        state.isRegistering = false;
    },

    searchCostsAllSuccess(state, team) {
        state.teams.costsAll = team;
        state.isRegistering = false;
    },
    searchCostsAllFailure(state) {
        state.teams.costsAll = {};
        state.isRegistering = false;
    },

    searchTeamsTypesSuccess(state, team) {
        state.teams.types = team;
        state.isRegistering = false;
    },
    searchTeamsTypesFailure(state) {
        state.teams.types = {};
        state.isRegistering = false;
    },

}

export const teams = {
    namespaced: true,
    state,
    actions,
    mutations
}