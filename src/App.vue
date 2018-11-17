<template>
  <div id="app">
    <h1>My Chores App!</h1>
    <ChoresList/>
  </div>
</template>

<script>
import ChoresList from './components/ChoresList.vue'

export default {
  name: 'app',
  components: {
    ChoresList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
