<template>
    <div class="liste">
        <div class="row align-items-center" style="height: 100%">
            <div class="col-md-6 mx-auto">
                <hr>
                <form @submit.prevent="">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Rechercher</span>
                        </div>
                        <input type="text" v-on:keyup="callMethod" name="title" class="form-control" v-model="title"
                               v-validate="'alpha'" placeholder="Tapez votre film" aria-label="Username"
                               aria-describedby="basic-addon1">
                    </div>
                </form>
            </div>
        </div>
        <hr>

        <h1 v-if="jsonData!==null">

        <div class="container" v-for="(data, index) in jsonData['data']['results']" :key='index'>
            <div class="card-group">
                <div class="card">
                    <img class="card-img-top" v-bind:src="'https://image.tmdb.org/t/p/w500/'+data['poster_path']"
                         alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ data['title'] }}</h5>
                        <p class="card-text">{{ data['overview'] }}</p>
                        <button class="btn btn-primary">Infos du film</button>
                        <button v-on:click="addFav(data['id'])" class="btn btn-primary">Mettre en favoris</button>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" v-bind:src="'https://image.tmdb.org/t/p/w500/'+data['poster_path']"
                         alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ data['title'] }}</h5>
                        <p class="card-text">{{ data['overview'] }}</p>
                        <button class="btn btn-primary">Infos du film</button>
                        <button v-on:click="addFav(data['id'])" class="btn btn-primary">Mettre en favoris</button>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" v-bind:src="'https://image.tmdb.org/t/p/w500/'+data['poster_path']"
                         alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ data['title'] }}</h5>
                        <p class="card-text">{{ data['overview'] }}</p>
                        <button class="btn btn-primary">Infos du film</button>
                        <button v-on:click="addFav(data['id'])" class="btn btn-primary">Mettre en favoris</button>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" v-bind:src="'https://image.tmdb.org/t/p/w500/'+data['poster_path']"
                         alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ data['title'] }}</h5>
                        <p class="card-text">{{ data['overview'] }}</p>
                        <button class="btn btn-primary">Infos du film</button>
                        <button v-on:click="addFav(data['id'])" class="btn btn-primary">Mettre en favoris</button>
                    </div>
                </div>
            </div>
        </div>

        </h1>

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
                title: "",
                url: "",
                compteur: 0,
                url_base: "https://image.tmdb.org/t/p/w500/",
                jsonData: null,
                jsonFav: null
            }
        },
        methods: {
            addFav(id) {
                this.url_fav = "https://api.themoviedb.org/3/movie/" + id + "?api_key=1d853ccc3f76e0d7e6544802f27005df";
                axios.get(this.url_fav).then(response => (this.jsonFav = response)).then((response) => {
                    if (response.data.status) {
                        this.$store.commit('SET_FAVORI', this.jsonFav);
                    }
                })
            },
            callMethod: function () {
                this.url = "https://api.themoviedb.org/3/search/movie?api_key=1d853ccc3f76e0d7e6544802f27005df&query="+this.title;
                if(this.title==="")
                    this.jsonData=null;
                if(this.title!=="")
                    axios.get(this.url).then(response => (this.jsonData = response));
            },
        },
        mounted() {
            if(this.title==="")
                this.jsonData=null;
            if(this.title!=="")
                axios.get(this.url).then(response => (this.jsonData = response));
        },
    }
</script>
