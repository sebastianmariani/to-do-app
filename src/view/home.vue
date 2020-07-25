<template>
    <div class="home">
        <div id="header">
            <h1>“Sometimes what you don’t do is <br> just as important as what you do.”</h1>
            <p>― Greg McKeown, Essentialism</p>
        </div>
        <router-link to="/add-to-do"><button @click="getNow()">Start Now</button></router-link>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations(['getNow']),
    }
}
</script>

<style scoped>
    .home{
        text-align: center;
    }
    button{
    outline: none;
    border: none;
    background-color: #1778FA;
    color: #FFFFFF;
    border-radius: 5px;
    padding: 1%;
    }
    #header{
        margin: 10%;
    }
</style>