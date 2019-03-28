<template>
  <div id="app">
  <nav>
    <router-link to="/"><button type="button" class="btn btn-primary">Liste des films</button></router-link>
    <router-link to="/favoris"><button type="button" class="btn btn-warning">Favoris</button></router-link>
  </nav>
  <router-view/>
</div>
</template>

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
