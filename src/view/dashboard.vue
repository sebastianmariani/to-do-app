<template>
    <div class="main">
        <header-to-do></header-to-do>
        <empty-list v-if="goals.length == 0"></empty-list>
        <div :class="{ isActiveGoal : !isActiveGoal }">
        <div  class="modal-backdrop">
            <div @keyup.enter="setGoal()" class="modal">
                    <p>Create your Long-term goal.</p>
                    <h3>Title</h3>
                    <br>
                    <input  @keyup.escape="abortGoal()" type="text" v-model="goal" maxlength="60">
                    <button @click="setGoal()">Add</button>
                </div>
            </div>
        </div>
        <div class="showToDo" v-if="goals.length > 0">
            <div class="list" v-for="(goal, index) in goals" :key="goal.goal">
                <h2>{{goal}}</h2><add-button-task></add-button-task>
                <div :class="{ isActiveTask : !isActiveTask }">
                <div class="modal-backdrop">
                    <div @keyup.enter="addToDo(index)" class="modal">
                        <p>Add task to {{goal.goal}}</p>
                        <h3>Task</h3>
                        <br>
                        <input  @keyup.escape="abortTask()" type="text" v-model="todo" maxlength="60">
                        <button @click="addToDo(index)">Add</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="addLongTerm">
                <p>Create a new long term goal</p>
                <add-button-goal id="add"></add-button-goal>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import header from '../components/headers';
import emptyList from '../components/emptyList';
import addButtonTask from '../components/addButtonTask';
import addButtonGoal from '../components/addButtonGoal';


export default {
    data() {
        return {
            goal:'',
            todo:'',
            index:0,
        }
    },
    components:{
        'empty-list': emptyList,
        'header-to-do': header,
        'add-button-task': addButtonTask,
        'add-button-goal': addButtonGoal,
    },
    computed : mapGetters(['listToDo', 'getDate','isActiveTask','isActiveGoal','goals']),
    methods: {
        ...mapMutations(['toggleIsActiveGoal', 'toggleIsActiveTask']),
        setGoal(){
            if(this.goal == ''){
                return
            } else {
                this.$store.commit('setGoal', this.goal)
                this.goal = '';
                this.toggleIsActiveGoal();
            }
        },
        addToDo(index){
            if(this.todo == ''){
                return
            } else {
                this.$store.commit('addToDo', this.todo, index)
                this.todo = '';
                this.toggleIsActiveTask();
                console.log(index)
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
    }
}
</script>

<style scoped>
    .main {
        text-align: center;
    }
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
    }
    .taskType{
        display: flex;
        justify-content:space-around ;
    }
    .type{
        width: 20%;
        border-radius: 50%;
        cursor: pointer;
    }
</style>

