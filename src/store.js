import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        list: [],
        openTasks:'',
        todayDate: '',
    },
    getters: {
        listToDo: state => state.list,
        openTasks: state => state.openTasks,
        getDate: state => state.todayDate,
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
        // created() {
        //     setInterval(this.getNow, 1);
        // },
    }
})