import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isMainPage: true,
    },
    mutations: {
        changeMainPage(state, payload) {
            state.isMainPage = payload
        }
    },
    getters: {
        isMainPage(state) {
            return state.isMainPage
        }
    }
})

export default store
