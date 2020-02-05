import {
  saveRegion,
  getRegion
} from "../../_helpers/localstorage/LocalStorage";
import { setRegion, searchRegion } from "../../services/region/region.service";
import { router } from "../../_helpers/router";

const state = {
  isRegionSet: false,
  region: {}
};

const actions = {
  PERSIST_REGION({ commit }, { region }) {
    saveRegion(region);
    commit("registerRegion", region);
    router.push("/");
  },
  SEARCH_REGION({ commit, dispatch }, { id }) {
    commit("searchRegionRequest");
    searchRegion(id)
      .then(onResponse => {
        commit("searchRegionSuccess", onResponse);
      })
      .catch(onError => {
        commit("searchRegionFailure", onError);
      });
  },
  REGISTER_COMP_REGION({ commit, dispatch }, { region }) {
    //alert("Tento ir")
    setRegion(region.idRegion)
      .then(onResponse => {
        commit("registerRegion", onResponse);
        console.log(onResponse);
        router.push("/");
      })
      .catch(onError => {
        commit("registerRegionFailure", onError);
        dispatch("alert/error", onError, { root: true });
      });
  }
};

const mutations = {
  searchRegionRequest(state, region) {
    state.region = { ...region };
    state.isRegionSet = true;
  },
  registerRegionFailure(state) {
    state.region = {};
  },

  searchRegionRequest(state) {
    state.isRegionSet = true;
  },
  searchRegionSuccess(state, region) {
    state.region = region;
  },
  searchRegionFailure(state) {
    state.region = {};
  }
};

export const region = {
  namespaced: true,
  state,
  actions,
  mutations
};
