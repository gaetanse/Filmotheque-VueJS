<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/"><a class="nav-link" href="#">Liste des films <span class="sr-only">(current)</span></a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favoris"><a class="nav-link" href="#">Favoris</a></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
</div>
</template>

<style>
#app {
  text-align: center;
  margin-top: 15px;
}
</style>
