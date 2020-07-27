import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        goals: [],
        list: [],
        todayDate: '',
        isActive: true,
    },
    getters: {
        listToDo: state => state.list,
        getDate: state => state.todayDate,
        isActive: state => state.isActive,
        goals: state => state.goals,
    },
    mutations: {
        taskCompleted(state){
            state.openTasks = '';
            state.openTasks = state.list.filter(task => task.completed == false);
            return state.openTasks;
        },
        getNow(state) {
            const today = new Date();
              let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
              let day = days[today.getDay()];
              let date = today.getDate();
              let month = today.getMonth()+1;
            state.todayDate = `${date}-${month}-${day}`
        },
        toggleIsActive(state){
            state.isActive = !state.isActive
        },
    }
})