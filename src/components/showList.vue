<template>
    <div class="showToDo" v-if="todos.length > 0">
      <div v-for="(todo,index) in todos" :key="todo">
        <p>{{todo}}</p><button @click="changeToDo(index)">change</button><button @click="deleteToDo(index)">delete</button>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: mapGetters(['listToDo']),
    methods: {
        deleteToDo(index){
            this.todos.splice(index,1)
        }
    }
}
</script>

<style scoped>

</style>
