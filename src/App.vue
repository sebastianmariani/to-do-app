<template>
  <div id="app">
    <div class="header">
      <router-link id="logo" to="/"><h1>LOGO</h1></router-link>
      <div id="controls">
        <router-link to="/homepage"><button>Sign out</button></router-link>
        <router-link to="/end-day"><button>End-day</button></router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      todayDate: "",
    }
  },
  created() {
    setInterval(this.getNow, 1);
  },
  computed : mapGetters(['listToDo']),
  methods: {
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

<style>
body{
  background-color: #f3f3f3;
  align-items: center;
  font-family: Helvetica ,Arial, sans-serif;
}
#app {
  margin: 3%;
}
#logo {
  text-decoration: none;
  color: black;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header button{
  outline: none;
  border: none;
  background-color: #1778FA;
  color: #FFFFFF;
  border-radius: 5px;
  padding: 8%;
  width: 150%;
}
#date{
  text-align: center;
}
#controls{
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 30%;
}
.addToList {
  margin: 3% 0%;
  text-align: center;
}
.showList {
  margin: 3% 0%;
}
</style>
