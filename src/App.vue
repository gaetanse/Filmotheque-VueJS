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
  text-align: center;
  margin-top: 15px;
}
</style>
