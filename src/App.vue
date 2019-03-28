<template>
  <div id="app">
  <nav>
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">A propos</router-link>
  </nav>
  <router-view/>
</div>

</template>

<script>
import Items from './components/Items.vue'

export default {
  name: 'app',
  components: {
    Items
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
