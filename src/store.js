import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        list: [],
    },
    getters: {
        listToDo: state => state.list,
        openToDo: state => state.openToDo,
    },
})