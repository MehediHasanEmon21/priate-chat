import Axios from "axios"

export default {

    state: {
        userList: [],
        userMessage: []
    },

    getters: {
        userList(state) {
            return state.userList;
        },
        userMessage(state) {
            return state.userMessage;
        },

    },

    actions: {

        userList(context) {

            Axios.get('/user-list')
                .then((response) => {
                    context.commit('userList', response.data)
                })

        },
        userMessage(context,payload) {

            Axios.get('/user-message/'+payload)
                .then((response) => {
                    context.commit('userMessage', response.data)
                })

        }

    },

    mutations: {
        userList(state, payload) {
            return state.userList = payload
        },
        userMessage(state, payload) {
            return state.userMessage = payload
        }
    },



}
