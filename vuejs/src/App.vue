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
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: left;
    height: 100%;
    background-image: linear-gradient(190deg, #31475e, #63d471);
    color: #fff;
    margin-top: 60px;
    padding: 5rem;
  }
</style>
