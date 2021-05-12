<template>
  <div>
    <h1>{{ title }}</h1>
    <form>
      <label>
        Height in m
        <input type="number" autofocus v-model="height" required />
      </label>
      <label>
        Weight in kg
        <input type="number" v-model="weight" required />
      </label>

      Result: {{ result }}
    </form>
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