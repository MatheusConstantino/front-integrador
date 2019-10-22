
export default {
    
    state: {
        userLogged: false,
        user: {}
    },

    actions : {
        LOGIN: ({ dispatch, commit }, { username, password }) => {
            commit('requestLoggin', { username })


        },

        REGISTER: ({ dispatch, commit }, user ) => {
            commit('requestRegister', user);


        },

        LOGOUT: ({ commit }) => {

        }
    },

    mutations: { },
    getters  : { },
}

