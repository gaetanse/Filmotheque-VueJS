<template>
  <div class="liste">
    <div class="row align-items-center" style="height: 100%">
      <div class="col-md-6 mx-auto">
      <hr>

      <form @submit.prevent="addItem">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Rechercher</span>
          </div>
          <input type="text" class="form-control" v-model="number" v-validate="'alpha'" placeholder="Tapez votre film" aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </form>
      <hr>
      </div>
    </div>
      <div id="app">
        <ul>
          <p v-for="data in jsonData">{{data}}</p>
        </ul>
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