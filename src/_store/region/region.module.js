import { saveRegion, getRegion } from '../../_helpers/localstorage/LocalStorage';
import { router } from '../../_helpers/router';

const state = {
    data: {},
}

const actions ={
    PERSIST_REGION({commit}, {region}){
        saveRegion(region)
        commit('registerRegion', region )
        router.push('/')
    },
    FETCH_REGION({commit}){
        const region = getRegion()
        commit('registerRegion', region )
    }
}

const mutations = {
    registerRegion(state, region) {
        state.data = {...region}
    },       
}

export const region = {
    namespaced: true,
    state,
    actions,
    mutations
}