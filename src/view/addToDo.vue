<template>
    <div class="main">
        <header-to-do></header-to-do>
        <empty-list v-if="goals.length == 0"></empty-list>
        <div :class="{isActive: isActive}">
            <div class="modal-backdrop">
                <div @keyup.enter="setGoal()" class="modal">
                    <p>Create your first Long-term goal.</p>
                    <h3>Title</h3>
                    <br>
                    <input  @keyup.escape="abortToDo()" type="text" v-model="bigGoal" maxlength="60">
                    <button @click="setGoal()">Add</button>
                </div>
            </div>
             <!-- <div class="modal-backdrop">
                <div @keyup.enter="addToDo" class="modal">
                    <p>Create your first Long-term goal.</p>
                    <h3>Title</h3>
                    <br>
                    <input  @keyup.escape="abortToDo()" type="text" v-model="task.toDo" maxlength="60">
                    <button @click="addToDo()">Add</button>
                </div>
            </div> -->
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
            bigGoal: '',
            task: {
                toDo: '',
                goal:'',
                editing:false,
                completed:false,
            },
        }
    },
    components:{
        'empty-list': emptyList,
        'show-list': showList,
        'header-to-do': header,
    },
    computed : mapGetters(['listToDo', 'getDate','isActive','goals']),
    methods: {
        ...mapMutations(['getNow','toggleIsActive']),
        setGoal(){
            if(this.bigGoal == ''){
                return
            } else {
                this.goals.push(this.bigGoal)
                this.bigGoal = ''
                this.toggleIsActive();
            }
        },
        addToDo(){
            if(this.task.toDo == ''){
                return
            } else {
                this.listToDo.push(this.task)
                this.task = {toDo: '', goal:'',editing:false, completed:false};
                this.toggleIsActive();
            }
        },
        abortToDo(){
            this.toggleIsActive();
            this.task.toDo = '';
            this.bigGoal = '';
        },
    }
}
</script>

<style scoped>
    .main {
        text-align: center;
    }
    .isActive{
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

