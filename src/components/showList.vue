<template>
    <div class="showToDo" v-if="listToDo.length > 0">
      <div class="list" v-for="(todo,index) in listToDo" :key="index">
        <input type="checkbox" v-model="todo.completed">
        <div :class="{ completed : todo.completed}" v-if="!todo.editing" @dblclick="editToDo(todo,index)"><p >{{todo.title}}</p></div>
        <input v-else v-model="todo.title" type="text" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" v-focus @keyup.escape="cancelEdit(todo)">
        <p id="delete" @click="deleteToDo(index)">-</p>
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
    }
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
    }
}
</script>

<style scoped>
  .completed{
    text-decoration: line-through;
    color: #898888;
  }
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  svg{
    width: 10px;
  }
  #delete {
    font-size: 2em;
    cursor: pointer;
  }
</style>


