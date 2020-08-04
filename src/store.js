import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        goals:[],
        list: [],
        todayDate: '',
        isActiveTask: false,
        isActiveGoal: false,
    },
    getters: {
        listToDo: state => state.list,
        getDate: state => state.todayDate,
        isActiveTask: state => state.isActiveTask,
        goals: state => state.goals,
        isActiveGoal: state => state.isActiveGoal,
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
        toggleIsActiveTask(state){
            state.isActiveTask = !state.isActiveTask
        },
        toggleIsActiveGoal(state){
            state.isActiveGoal = !state.isActiveGoal
        },
        setGoal(state,goal){
            state.goals.push({
                goal,
                toDo:[],
                editing: true,
                completed: true,
            })
        },
        addToDo(state,todo,index){
            state.goals[1].toDo.push(todo)
            let num = index;
            console.log(num)
        },
    }
})