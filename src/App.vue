<template>
  <div id="app">
    <h1>Simplify your life</h1>
    <div class="headers">
      <add-to-do></add-to-do>
    </div>
    <div class="showList">
      <show-list></show-list>
    </div>
  </div>
</template>

<script>
import showList from './components/showList';
import addToDo from './components/addToDo';

export default {
  components: {
     "show-list": showList, 
     "add-to-do": addToDo,
  }
}
</script>

<style>
body{
  background-color: #dbdfe1;
}
#app {
  text-align: center;
  margin: 3%;
}
.headers {
  margin: 3% 0%;
  display: inline-block;
}
.showList {
  margin: 3% 0%;
}
</style>
