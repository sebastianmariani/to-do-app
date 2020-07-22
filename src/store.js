import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        list: [],
        todayDate: "",
        endDay: false,
    },
    getters: {
        listToDo: state => state.list,
        todayDate: state => state.todayDate,
        endDay: state => state.endDay,
    },
})