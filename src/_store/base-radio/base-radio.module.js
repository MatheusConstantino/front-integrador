import {
  deleteBaseRadioStation,
  listBaseRadioStation,
  registerBaseRadioStation
} from "../../services/base-radio/base-radio.service";
import { router } from "../../_helpers/router";

const state = {
  isRegistering: false,
  baseRadio: { baseRadio: [] }
};

const actions = {
  REGISTER_BASE_RADIO_STATION({ dispatch, commit }) {
    commit("registerBaseRadioStationRequest");
    registerBaseRadioStation()
      .then(onResponse => {
        commit("registerBaseRadioStationSuccess", onResponse);
        swal({
          title: "Sucesso!",
          text: `O ERB foi contratado com sucesso.`,
          icon: "success",
          className: "swal-footer"
        });
      })
      .catch(onError => {
        commit("registerBaseRadioStationFailure", onError);
        swal({
          title: "Erro de conexão!",
          text: onError.message,
          icon: "error",
          className: "swal-footer"
        });
      });
  },
  LIST_BASES({ dispatch, commit }) {
    commit("listBasesRequest");

    listBaseRadioStation()
      .then(onResponse => {
        commit("listBasesSuccess", onResponse);
        //dispatch("alert/success", onResponse);
      })
      .catch(onError => {
        commit("listBasesFailure", onError);
        swal({
          title: "Erro de conexão!",
          text: onError.message,
          icon: "error",
          className: "swal-footer"
        });
      });
  },
  DELETE_BASE_RADIO_STATION({ dispatch, commit }, { id }) {
    commit("deleteBaseRadioStationRequest");

    deleteBaseRadioStation(id)
      .then(onResponse => {
        commit("deleteBaseRadioStationSuccess", onResponse);
        //dispatch("alert/success", onResponse);
      })
      .catch(onError => {
        commit("deleteBaseRadioStationFailure", onError);
        //dispatch("alert/error", onError);
      });
  }
};

const mutations = {
  registerBaseRadioStationRequest(state) {
    state.isRegistering = true;
  },
  registerBaseRadioStationSuccess(state, baseRadio) {
    state.isRegistering = false;
    state.baseRadio = baseRadio;
  },
  registerBaseRadioStationFailure(state) {
    state.isRegistering = false;
    //state.baseRadio = { baseRadio: [] };
  },

  listBasesRequest(state) {
    state.isRegistering = true;
  },
  listBasesSuccess(state, baseRadio) {
    state.isRegistering = false;
    state.baseRadio = baseRadio;
  },
  listBasesFailure(state) {
    state.isRegistering = false;
    state.baseRadio = !state.baseRadio ? { baseRadio: [] } : state.baseRadio;
  },

  deleteBaseRadioStationRequest(state) {
    state.isRegistering = true;
  },
  deleteBaseRadioStationSuccess(state, baseRadio) {
    state.baseRadio = baseRadio;
  },
  deleteBaseRadioStationFailure(state) {
    state.baseRadio = {};
  }
};

export const baseRadio = {
  namespaced: true,
  state,
  actions,
  mutations
};
