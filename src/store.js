import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        goals:[],
        todayDate: '',
        isActiveTask: false,
        isActiveGoal: false,
        indexGoal: 0,
        taskToDelete:'',
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
            state.todayDate = `${date} - ${month} - ${day}`
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
                editing: false,
                completed: false,
            })
        },
        addToDo(state,todo){
            state.goals[state.indexGoal].toDo.push({
                goal: state.indexGoal,
                todo,
                editing:false,
                completed: false,
            })
        },
        setIndex(state, index){
            state.indexGoal = index;
        },
        deleteTask(state, data){
            state.goals.getters[data.task.goal].toDo.splice(data.index, 1)
        },
        deleteGoal(state, data){
            state.goals
            if(data.goal.toDo == 0){
                state.goals.splice(data.index, 1)
            } else {
                return
            }
        }
    }
})