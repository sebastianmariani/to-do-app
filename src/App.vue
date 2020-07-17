<template>
  <div id="app">
    <div class="header">
      <h1>Simplify your life</h1>
    </div>
    <add-to-do></add-to-do>
    <show-list></show-list>
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

</style>
