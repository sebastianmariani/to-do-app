import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        list: [],
        openTasks:'',
    },
    getters: {
        listToDo: state => state.list,
        openTasks: state => state.openTasks,
    },
    mutations: {
        taskCompleted(state){
            state.openTasks = state.list.filter(task => task.completed == false);
            return state.openTasks;
        }
    }
})