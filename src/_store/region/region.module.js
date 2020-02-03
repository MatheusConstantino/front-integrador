import { saveRegion, getRegion } from '../../_helpers/localstorage/LocalStorage';
import {setRegion } from "../../services/region/region.service";
import { router } from '../../_helpers/router';

const state = {
    isRegionSet : false,
    region: {}
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
    },
    REGISTER_COMP_REGION({commit, dispatch}, {region}){
        alert("Tento ir")
        setRegion(region.idRegion)
        .then((onResponse) => { 
            commit('registerRegion', onResponse )
            console.log(onResponse)
            router.push('/')
        })
        .catch((onError) => {
            commit('registerRegionFailure', onError);
            dispatch('alert/error', onError, { root: true });     
        })
       
    }
}

const mutations = {
    registerRegion(state, region) {
        state.region = {...region}
        state.isRegionSet = true;
    },
    registerRegionFailure(state){
        region = {};
    },       
}

export const region = {
    namespaced: true,
    state,
    actions,
    mutations
}