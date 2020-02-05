import { deletePA, listPA, registerPA } from "../../services/pa/pa.service";
import { router } from "../../_helpers/router";

const state = {
  isRegistering: false,
  pa: { pa: [] }
};

const actions = {
  REGISTER_PA({ dispatch, commit }) {
    commit("registerPARequest");
    registerPA()
      .then(onResponse => {
        commit("registerPASuccess", onResponse);
        swal({
          title: "Sucesso!",
          text: `O Posto de Atendimento foi contratado com sucesso.`,
          icon: "success",
          className: "swal-footer"
        });
      })
      .catch(onError => {
        commit("registerPAFailure", onError);
        swal({
          title: "Erro de conexão!",
          text: onError.message,
          icon: "error",
          className: "swal-footer"
        });
      });
  },
  LIST_PAS({ dispatch, commit }) {
    commit("ListPARequest");

    listPA()
      .then(onResponse => {
        commit("ListPASuccess", onResponse);
        //dispatch("alert/success", onResponse);
      })
      .catch(onError => {
        commit("ListPAFailure", onError);
        swal({
          title: "Erro de conexão!",
          text: onError.message,
          icon: "error",
          className: "swal-footer"
        });
      });
  },
  DELETE_PA({ dispatch, commit }, { id }) {
    commit("deletePARequest");

    deletePA(id)
      .then(onResponse => {
        commit("deletePASuccess", onResponse);
        //dispatch("alert/success", onResponse);
      })
      .catch(onError => {
        commit("deletePAFailure", onError);
        //dispatch("alert/error", onError);
      });
  }
};

const mutations = {
  registerPARequest(state) {
    state.isRegistering = true;
  },
  registerPASuccess(state, pa) {
    state.isRegistering = false;
    state.pa = pa;
  },
  registerPAFailure(state) {
    state.isRegistering = false;
    //state.pa = { pa: [] };
  },

  ListPARequest(state) {
    state.isRegistering = true;
  },
  ListPASuccess(state, pa) {
    state.isRegistering = false;
    state.pa = pa;
  },
  ListPAFailure(state) {
    state.isRegistering = false;
    state.pa = !state.pa ? { pa: [] } : state.pa;
  },

  deletePARequest(state) {
    state.isRegistering = true;
  },
  deletePASuccess(state, pa) {
    state.pa = pa;
  },
  deletePAFailure(state) {
    state.pa = {};
  }
};

export const pa = {
  namespaced: true,
  state,
  actions,
  mutations
};
