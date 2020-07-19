<template>
    <div class="showToDo" v-if="listToDo.length > 0">
      <div v-for="(todo,index) in listToDo" :key="index">
        <p>{{todo}}</p><button>change</button><button @click="deleteToDo(index)">delete</button>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters(['listToDo']),
    methods: {
        deleteToDo(index){
            this.listToDo.splice(index,1)
        }
    }
}
</script>

<style scoped>

</style>
