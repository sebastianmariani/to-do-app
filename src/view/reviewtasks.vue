<template>
    <div class="main">
        <div id="noTaskLeft" v-if="listToDo.length == 0">
            <h3>Seems like you completed all your tasks for today.</h3>
        </div>
        <div v-if="listToDo.length > 0">
            <h3>Those are your task left:</h3>
            <div class="tasks" v-for="task in listToDo" :key="task.id">
                <p>{{task.title}}</p>
                <button>Move to tomorrow</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters(['listToDo']),
}
</script>

<style scoped>
    .main{
        text-align: center;
    }
    #noTaskLeft{
        margin: 20% 0;
    }
    .tasks{
        display: flex;
        justify-content: space-evenly;
        margin-top: 5%;
    }
    button {
        outline: none;
        border: none;
        background-color: #1778FA;
        color: #FFFFFF;
        border-radius: 5px;
        padding: 2%;
    }
</style>