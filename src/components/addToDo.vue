<template>
    <div class="inputToDo">
      <input type="text" name="todo" placeholder="Add a task" @keypress.enter="addToDo()" v-model="this.todo">
      <p>{{listToDo}}</p>
    </div> 
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    data(){
        return{
            todo: ''
        }
    },
    computed : mapGetters(['listToDo']),
    methods: {
        addToDo(){
            this.listToDo.push(this.todo);
        }
    }
}
</script>

<style scoped>

</style>