<template>
  <div class="liste">
    <div class="holder">
      <hr>
      <form @submit.prevent="addItem">
        <div class="input">
          <label>Tapez le nom du film (ou qzdqd ou qzddqz ou dwzdzq) :</label>
          <input type="text" name="number" class="form-control" v-model="number" v-validate="'alpha'">
        </div>
      </form>
      <hr>

      <div id="app">
        <ul>
          <p v-for="data in jsonData">{{data}}</p>
        </ul>
      </div>
  </div>
  </div>
</template>

<style>

  .input {
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(0, 0, 0, 1);
  }
</style>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        jsonData: [],
        number: 299537,
        url: "https://api.themoviedb.org/3/movie/299537?api_key=1d853ccc3f76e0d7e6544802f27005df&language=fr-FR",
      }},
    mounted() {
      axios.get(this.url)
              .then(response => (this.jsonData = response))
    }
  }
</script>