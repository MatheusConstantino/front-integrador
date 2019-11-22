import { registerMember } from "../../services/user/user.service";
import { registerNewSale } from "../../services/sales/sales.service";

const state = {
    isRegistering: false,
    produtosVenda: [],
}

const actions = {

    CREATE_NEW_SALE({ commit, dispatch }, { quantidade, precoUnitario, idTipoProduto}) {
        
        commit('registerNewSaleRequest');
        registerNewSale()
            .then((onValue) => {
                commit('registerNewSaleSuccess');
                dispatch('alert/success', onError, { root: true });
                swal({
                    title: "Registro criado !",
                    text: `Seu produto foi disponibilizado para venda com sucesso.`,
                    icon: 'success',
                    className: 'swal-footer'
                });
                return Promise.resolve();
            })
            .catch((onError) => {
                commit('registerNewSaleFailure');
                dispatch('alert/error', onError, { root: true });
                swal({
                    title: "Erro !",
                    text: onError.message,
                    icon: 'error',
                    className: 'swal-footer'
                });
                return Promise.reject();
            })
    
    },


}

const mutations = {

    registerNewSaleRequest(state) {
        state.isRegistering = true;
    },

    registerNewSaleSuccess(state) {
        state.isRegistering = false;
    },

    registerNewSaleFailure(state) {
        state.isRegistering = false;
    }

}

export const sales = {
    namespaced: true,
    state,
    actions,
    mutations
}

