import Axios from "axios"

export default {

    state: {
        userList: []
    },

    getters: {
        userList(state) {
            return state.userList;
        }
    },

    actions: {

        userList(context) {

            Axios.get('/user-list')
                .then((response) => {
                    context.commit('userList', response.data)
                })

        }

    },

    mutations: {
        userList(state, payload) {
            return state.userList = payload
        }
    },



}
