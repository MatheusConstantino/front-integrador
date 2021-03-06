import { listAllProducts } from "../../services/products/products.service";

const state = {
  products: []
};

const actions = {
  LIST_ALL_PRODUCTS({ commit }) {
    listAllProducts()
      .then(onData => {
        commit("listAllProductsSuccess", onData);
        return Promise.resolve(onData);
      })
      .catch(() => {
        return Promise.reject();
      });
  }
};

const mutations = {
  listAllProductsSuccess(state, products) {
    state.products = products;
  }
};

export const products = {
  namespaced: true,
  state,
  actions,
  mutations
};
