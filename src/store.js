import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        goals:[],
        todayDate: '',
        isActiveTask: false,
        isActiveGoal: false,
        addToGoal: '',
        indexGoal:0,
        taskToDelete:'',
    },
    getters: {
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
            const data = {
                goal: state.addToGoal,
                todo,
                editing: false,
                completed: false
            }
            state.goals[state.indexGoal].toDo.push(data)
        },
        setIndex(state, data){
            state.addToGoal = data.goal.goal
            state.indexGoal = data.index
        },
        deleteTask(state, data){
            //problem is here
            const location = state.goals.map(function(e) { 
                return e.goal; 
            }).indexOf(data.task.goal); 
            state.goals[location].toDo.splice(data.index,1)
        },
        deleteGoal(state, data){    
            const location = state.goals.indexOf(data.goal)
            console.log(location)
            if(data.goal.toDo.length === 0){
                state.goals.splice(location, 1)
            } else {
                return
            }
        }
    }
})