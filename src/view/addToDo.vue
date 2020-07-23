<template>
    <div class="main">
        <div>
            <p>{{todayDate}}</p>
        </div>
        <div class="inputToDo">
            <svg id="add" @click="isActive = !isActive" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>
        </div> 
        <empty-list v-if="listToDo.length == 0"></empty-list>
        <div :class="{isActive: isActive}">
            <div class="modal-backdrop">
                <div @keyup.enter="addToDo" class="modal">
                    <h3>Title</h3>
                    <input  @keyup.escape="abortToDo()" type="text" v-model="task.title" maxlength="60">
                    <br>
                    <div class="taskType">
                        <div class="type" @click="task.type = 'idea'">
                            <p>Idea</p>
                        </div>
                        <div class="type" @click="task.type = 'task'">
                            <p>Task</p>
                        </div>
                        <div class="type" @click="task.type = 'event'">
                            <p>Event</p>
                        </div>
                    </div>
                    <br>
                    <button @click="addToDo">Submit</button>
                </div>
            </div>
        </div>
        <show-list v-if="listToDo.length > 0"></show-list>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import emptyList from '../components/emptyList';
import showList from '../components/showList';

export default {
    data() {
        return {
            isActive: true,
            task: {
                title: '',
                description: '',
                type:'event',
                editing:false,
                todayDate: "",
            },
        }
    },
    components:{
        'empty-list': emptyList,
        'show-list': showList,
    },
    computed : mapGetters(['listToDo']),
    created() {
        setInterval(this.getNow, 1);
    },
    methods: {
        addToDo(){
            if(this.task.title == 0){
                return
            } else {
                this.listToDo.push(this.task)
                this.task = {title: '', description: '', type:'event',editing:false};
                this.isActive = !this.isActive;
            }
        },
        abortToDo(){
            this.isActive = !this.isActive
            this.task.title = '';
        },
        getNow: function() {
        const today = new Date();
          let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          let day = days[today.getDay()];
          let date = today.getDate();
          let month = today.getMonth()+1;
        this.todayDate = `${date}-${month}-${day}`
        }
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
    background: #FFFFFF;
    box-shadow: 2px 2px 10px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    padding: 2% 2%;
    border-radius: 10px;
    width: 30%;
    height: auto;
    }
    #add {
        background-color: #1778FA;
        border-radius: 50%;
        padding: 10px;
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
        background-color: #1778FA;
        color: #FFFFFF;
        border-radius: 5px;
        padding: 3%;
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

