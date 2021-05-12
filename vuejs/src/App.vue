<template>
  <div id="app">
    <Main title="BMI Calculator" />
  </div>
</template>

<script>
  import Main from './components/Main.vue'

  export default {
    name: 'App',
    components: {
      Main
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
