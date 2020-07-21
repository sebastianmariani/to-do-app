<template>
<div>
  <p id="date">{{todayDate}}</p>
  <div class="showToDo" v-if="listToDo.length > 0">
      <div class="list" v-for="(todo,index) in listToDo" :key="index">
        <p id="type">{{todo.type}}</p>
        <input type="checkbox" v-model="todo.completed">
        <div :class="{ completed : todo.completed}" v-if="!todo.editing" @dblclick="editToDo(todo,index)"><p id="title">{{todo.title}}</p></div>
        <input id="editToDo" maxlength="90" v-else v-model="todo.title" type="text" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" v-focus @keyup.escape="cancelEdit(todo)">
        <p id="delete" @click="deleteToDo(index)">-</p>
      </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data(){
    return{
      completed:false,
      beforeEditTask: '',
      todayDate: "",
      showDescription: false,
    }
  },
   created() {
                setInterval(this.getNow, 1000);
   },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  computed: mapGetters(['listToDo']),
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
  .completed{
    text-decoration: line-through;
    color: #898888;
  }
  .showToDo {
    background-color: whitesmoke;
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
  #date{
    text-decoration: underline;
    text-align: center;
  }
  #editToDo{
    outline: none;
    border: none;
    background: transparent;
    width: 80%;
  }
  #type{
    font-size: 50%;
    background-color: #FFC914;
    border-radius: 5px;
    padding: 1%;
    text-align: center;
    margin: 0 1%;
    width: 4%;
  }
  #title{
    background-color: lightblue;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  input[type=checkbox]{
    width: 6%;
  }
</style>


