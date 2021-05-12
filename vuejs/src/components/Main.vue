<template>
  <div id="home">
    <h1>{{ title }} <img src="/logo.png" alt="Vue logo" /></h1>
    <form>
      <label>
        Height in m
        <input
          type="number"
          autofocus
          v-model="height"
          required
          placeholder="e.g. 1,60"
        />
      </label>
      <br /><br />
      <label>
        Weight in kg
        <input
          type="number"
          v-model="weight"
          required
          placeholder="e.g. 70"
        />
      </label>
    </form>
    <p class="flow-text">Result: {{ result ? result : '' }}</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      title: String
    },
    data() {
      return {
        height: Number,
        weight: Number
      }
    },
    computed: {
      result() {
        return parseFloat((this.weight / this.height ** 2).toFixed(2))
      }
    }
  }
</script>

<style>
  #home {
    display: flex;
    flex-direction: column;
    height: 70vh;
    justify-content: space-around;
  }
  h1 {
    text-align: center;
  }
  img {
    width: 4.2rem;
  }
  label {
    color: #31475e;
    font-weight: 600;
    text-decoration: underline;
  }
  input:first-of-type {
    background-color: white;
  }
</style>
