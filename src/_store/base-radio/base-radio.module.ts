import { registerCompany, searchCompanyByIdLeader } from "../../services/company/company.service";
import { router } from '../../_helpers/router';

const state = {
    isRegistering: false,
    baseRadio: {}
}

const actions = {

    REGISTER_BASE_RADIO_STATION({ dispatch, commit }, base) {
        commit('registerBaseRadioStation');
    }

}

const mutations = {
    registerBaseRadioStation(state) {
        state.isRegistering = true;
    },
}

export const company = {
    namespaced: true,
    state,
    actions,
    mutations
}