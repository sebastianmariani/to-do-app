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
        <div :class="{ isActiveTask : !isActiveTask }">
            <div class="modal-backdrop">
                <div @keyup.enter="addToDo()" class="modal">
                    <p>Add task</p>
                    <h3>Title</h3>
                    <br>
                    <input  @keyup.escape="abortTask()" type="text" v-model="todo" maxlength="60">
                    <button @click="addToDo()">Add</button>
                </div>
            </div>
        </div>
        <show-list v-if="goals.length > 0"></show-list>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import header from '../components/headers';
import emptyList from '../components/emptyList';
import showList from '../components/showList';

export default {
    data() {
        return {
            goal:'',
            todo:'',
        }
    },
    components:{
        'empty-list': emptyList,
        'show-list': showList,
        'header-to-do': header,
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
        addToDo(){
            if(this.todo == ''){
                return
            } else {
                this.$store.commit('addToDo', this.todo)
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

