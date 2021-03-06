<template>
    <div class="main">
        <header-to-do></header-to-do>
        <empty-list v-if="goals.length == 0"></empty-list>
        <div :class="{ isActiveGoal : !isActiveGoal }">
            <div class="modal-backdrop">
                <div @keyup.enter="setGoal()" class="modal">
                    <p>Create your Long-term goal.</p>
                    <h3>Title</h3> 
                    <br>
                    <input  @keyup.escape="abortGoal()" type="text" v-model="goal"  maxlength="40">
                    <button @click="setGoal()">Add</button>
                </div>
        </div>
        </div>
        <div :class="{ isActiveTask : !isActiveTask }">
            <div class="modal-backdrop">
                <div @keyup.enter="addToDo()" class="modal">
                    <p>Add task</p>
                    <h3>Task</h3>
                    <br>
                    <input  @keyup.escape="abortTask()" type="text" v-model="todo" maxlength="80">
                    <button @click="addToDo()">Add</button>
                </div>
            </div>
        </div>
        <div class="list" v-if="goals.length > 0">
            <div v-for="(goal,index) in goals" :key="goal.goal">
                <div class="headerGoal">
                    <div class="goal">
                        <h2>{{goal.goal}}</h2>
                        <svg id="addToDo" @click="setIndex(goal,index), toggleIsActiveTask()" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 44C10.8497 44 1 34.1503 1 22C1 9.84974 10.8497 0 23 0C35.1503 0 45 9.84974 45 22C45 34.1503 35.1503 44 23 44Z" fill="#FF8F79"/>
                            <path d="M37.9018 21H7.5488C6.69344 21 6 21.6934 6 22.5488C6 23.4042 6.69344 24.0976 7.5488 24.0976H37.9018C38.7571 24.0976 39.4506 23.4042 39.4506 22.5488C39.4506 21.6934 38.7571 21 37.9018 21Z" fill="white"/>
                            <path d="M22 6.5488V36.9018C22 37.7571 22.6934 38.4506 23.5488 38.4506C24.4042 38.4506 25.0976 37.7571 25.0976 36.9018V6.5488C25.0976 5.69344 24.4042 5 23.5488 5C22.6934 5 22 5.69344 22 6.5488Z" fill="white"/>
                        </svg>
                    </div>
                    <svg class="delete" @click="deleteGoal(goal,index)" viewBox="0 0 54 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="2.5" x2="54" y2="2.5" stroke="#667462" stroke-width="10"/>
                    </svg>
                </div>
                <div class="tasks" v-for="(task, index) in goal.toDo" :key="task.id">
                    <div id="task" :class=" { completed : task.completed } ">
                        <label @dblclick="editToDo(task)" class="container" v-if="!task.editing">
                            <input type="checkbox" v-model="task.completed">
                            <span class="checkmark"></span>
                            <span>{{task.todo}}</span>
                        </label>
                        <input id="changeToDoInput" v-else type="text" v-model="task.todo" @blur="doneEdit(task)" @keyup.enter="doneEdit(task)" @keyup.esc="cancelEdit(task)" v-focus>
                        <svg  class="delete" @click="deleteTask(task, index)" viewBox="0 0 54 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="2.5" x2="54" y2="2.5" stroke="#667462" stroke-width="10"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="addLongTerm">
                <p>Create a new long term goal</p><add-button-goal id="add"></add-button-goal>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import header from '../components/headers';
import emptyList from '../components/emptyList';
import addButtonGoal from '../components/addButtonGoal';


export default {
    data() {
        return {
            goal:'',
            todo:'',
            taskToDelete: '',
            changedToDo: '',
            beforeEditCache: '',
        }
    },
    directives: {
        focus:{
            inserted: function (el) {
                el.focus()
            }
        },
    },
    components:{
        'empty-list': emptyList,
        'header-to-do': header,
        'add-button-goal': addButtonGoal,
    },
    computed : mapGetters(['listToDo', 'getDate','isActiveTask','isActiveGoal','goals']),
    methods: {
        ...mapMutations(['toggleIsActiveGoal', 'toggleIsActiveTask']),
        setGoal(){
            if(this.goal === ''){
                return
            } else {
                this.$store.commit('setGoal', this.goal)
                this.goal = '';
                this.toggleIsActiveGoal();
            }
        },
        addToDo(){
            if(this.todo === ''){
                return
            } else {
                this.$store.commit('addToDo',this.todo)
                this.todo = '';
                this.toggleIsActiveTask();
            }
        },
        abortGoal(){
            this.toggleIsActiveGoal();
            this.goal = '';
        },
        abortTask(){
            this.toggleIsActiveTask();
            this.todo = '';
        },
        setIndex(goal,index){
            const data = {
                goal,
                index
            }
            this.$store.commit('setIndex', data)
        },
        deleteGoal(goal, index){
            const data = {
                goal: goal,
                index: index
            }
            this.$store.commit('deleteGoal', data)
        },
        deleteTask(task, index){
            const data = {
                task: task,
                index: index
            }
            this.$store.commit('deleteTask', data)
        },
        editToDo(task){
            if(task.completed != true){
                this.beforeEditCache = task.todo;
                task.editing = true;
            }
        },
        doneEdit(task){
            if(task.todo.trim().length == 0){
                task.todo = this.beforeEditCache
            }
            task.editing = false;
        },
        cancelEdit(task){
            task.editing = false;
            task.todo = this.beforeEditCache;
        }
    }
}
</script>

<style scoped>
    .isActiveGoal{
        display: none;
    }
    .isActiveTask{
        display: none;
    }
    .inputToDo{
        margin: 2%;
    }
    .inputToDo :hover {
        cursor: pointer;
    }
    .modal-backdrop {
        display: none;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        background: #DFE5C4;
        box-shadow: 2px 2px 10px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        padding: 2% 2%;
        border-radius: 10px;
        width: 300px;
        height: auto;
        text-align: center;
    }
    h3 {
        text-align: left;
        margin-bottom: 2%;
    }
    input{
        background-color: #f3f3f3;
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 3%;
    }
    button {
        outline: none;
        border: none;
        background-color: #667462;
        color: #FFFFFF;
        border-radius: 5px;
        padding: 3%;
        width: 20%;
        margin: 0 auto;
        margin-top: 10%;
        cursor: pointer;
    }
    .list{
        margin: auto;
        width: 60%;
        background-color: #DFE5C4;
        border-radius: 10px;
        padding: 3%;
    }
    .addLongTerm{
        margin-top: 5%;
        display: flex;
        align-items: center;
        float: right;
        white-space: nowrap;
    }
    .completed {
        text-decoration: line-through;
        color: #97aa91;
    }
    .tasks{
        border-left: 2px solid #667462;
    }
    #task{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .goal{
        display: flex;
        align-items: center;
        text-decoration: underline;
        width: 70%;
    }
    #addToDo {
        margin-left: 2%;
        flex-shrink: 0;
        width: 20px;
        height: 20px;
    }
    .delete{
        float: right;
        cursor: pointer;
        margin-left: 5%;
        width: 10px;
        height: 10px;
        flex-shrink: 0;
    }
    .headerGoal{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #changeToDoInput{
        color: #667462;
        padding:0 5%;
        margin-left: 8%;
        margin-top: 2%;
        margin-bottom: 2%;
        font-size: 1em;
        width: 70%;
        height: 25px;
        border-radius: 5px;
    }
    #add{
        margin-left: 5%;
    }
    /* custom checkbox */
    .container {
        display: flex;
        justify-content: space-between;
        margin: 1.5% 0%;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .container input {
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .checkmark {
        height: 15px;
        width: 15px;
        background-color: #eee;
        border-radius: 2px;
        border: 1px solid;
        margin-right: 5px;
        flex-shrink: 0;
    }
    .container:hover input ~ .checkmark {
        background-color: #ccc;
    }
    .container input:checked ~ .checkmark {
        background-color: #ff8f7a;
    }
    .checkmark:after {
        content: "";
        display: none;
    }
    .container input:checked ~ .checkmark:after {
        display: block;
    }
    .container .checkmark:after {
        margin-left: 3px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    /* different screen sizes */

    @media only screen and (max-width: 1000px){
        .goal {
            font-size: .8em;
        }
        #addToDo {
            width: 15px;
            height: 15px;
        }
    } 

    @media only screen and (max-width: 600px){
        #addToDo {
            width: 10px;
            height: 10px;
        }
        #task {
            font-size: .6em;
        }
        .goal {
            font-size: .6em;
        }
        .checkmark {
            width: 10px;
            height: 10px;
        }
    }
    @media only screen and (max-width: 400px){
        .modal{
            width: 220px;
        }
    }
</style>

