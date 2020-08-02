<template>
<div> 
  <div class="showToDo">
    <div class="list" v-for="goal in goals" :key="goal.id">
      <h2>{{goal}}</h2><add-button-task id="addToGoal"></add-button-task>
    </div>
    <div class="addLongTerm">
        <p>Create a new long term goal</p>
        <add-button-goal id="add"></add-button-goal>
    </div>
  </div>
  <!-- <div class="showToDo" v-if="goals.length > 0">
    <div class="list" v-for="(todo,index) in goals" :key="index">
      <input type="checkbox" v-model="todo.completed">
      <div :class="{ completed : todo.completed}" v-if="!todo.editing" @dblclick="editToDo(todo,index)"><p id="title">{{todo.longGoal}}</p></div>
        <input id="editToDo" maxlength="90" v-else v-model="todo.title" type="text" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" v-focus @keyup.escape="cancelEdit(todo)">
        <p id="delete" @click="deleteToDo(index)">-</p>
      </div>
      <div class="addLongTerm">
        <p>Create a new long term goal</p>
        <add-button id="add"></add-button>
      </div>
  </div> -->
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import addButtonTask from '../components/addButtonTask';
import addButtonGoal from '../components/addButtonGoal';

export default {
  data(){
    return{
      beforeEditTask: '',
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  computed: mapGetters(['listToDo','goals']),
  methods: {
        deleteToDo(index){
            this.listToDo.splice(index , 1)
        },
        editToDo(todo){
          this.beforeEditTask = todo.title
          todo.editing = true
        },
        doneEdit(todo){
          if(todo.title.trim() == ''){
            todo.title = this.beforeEditTask
          }
          todo.editing = false
        },
        cancelEdit(todo){
          todo.title = this.beforeEditTask
          todo.editing = false
        },
    },
    components: {
        'add-button-task': addButtonTask,
        'add-button-goal': addButtonGoal,
    }
}
</script>

<style scoped>
  .completed{
    text-decoration: line-through;
  }
  .showToDo {
    background-color: #DFE5C4;
    border-radius: 10px;
    width: 60%;
    margin: 0 auto;
  }
  .list {
    display: flex;
    align-items: center;
    height: 40px;
    flex-direction: row;
  }
  svg{
    width: 10px;
  }
  #delete {
    font-size: 2em;
    cursor: pointer;
    width: 4%;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-left: auto;
  }
  #editToDo{
    outline: none;
    border: none;
    background: transparent;
    width: 80%;
  }
  #title{
    margin-block-start: 0;
    margin-block-end: 0;
  }
  input[type=checkbox]{
    width: 6%;
  }
  .addLongTerm {
    display: flex;
    justify-content:space-around ;
    width: 20%;
    align-items: center;
    float: right;
    margin-top: 5%;
  }
  #add{
    width: 50px;
  }
  #addToGoal{
    width: 20px;
    margin-left: 3%;
  }
</style>


