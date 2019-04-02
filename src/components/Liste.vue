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
                        <input type="text" v-on:keyup="callMethod" name="title" class="form-control" v-model="title" v-validate="'alpha'" placeholder="Tapez votre film" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                </form>
            </div>
        </div>
            <hr>
        <div class="row align-items-center" style="height: 100%;width: 100%;">
            <div class="card" style="width: 18rem;" v-for="(data, index) in jsonData['data']['results']" :key='index'>
                    <img v-bind:src="'https://image.tmdb.org/t/p/w500/'+data['poster_path']" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">{{ data['title'] }}</h5>
                        <p class="card-text">{{ data['overview'] }}</p>
                        <button class="btn btn-primary">Infos du film</button>
                        <button v-on:click="addFav(data['id'])" class="btn btn-primary">Mettre en favoris</button>
                    </div>
            </div>
            <!-- Content here -->
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
    import Favoris from "./Favoris";
    export default {
        data() {
            return {
                jsonData: null,
                jsonFav: null,
                title : "",
                url: "",
                url_base: "https://image.tmdb.org/t/p/w500/",
                numbers: [1, 2, 3]
            }},
        methods: {
            addFav(id) {
                this.url_fav = "https://api.themoviedb.org/3/movie/"+id+"?api_key=1d853ccc3f76e0d7e6544802f27005df";
                axios.get(this.url_fav).then(response => (this.jsonFav = response)).then((response)=> {
              //  this.$store.state.listeFavoris.push(this.jsonFav);
                if (response.data.status){
                    this.$store.commit('SET_FAVORI', this.jsonFav);
                }
                })},
            assembler(lien){
                this.jsonData= null;
                return this.url_base+lien;
            },
            callMethod : function (){
                this.url = "https://api.themoviedb.org/3/search/movie?api_key=1d853ccc3f76e0d7e6544802f27005df&query="+this.title;
                axios.get(this.url).then(response => (this.jsonData = response))
            },
        },
        mounted() {
            axios.get(this.url).then(response => (this.jsonData = response));
        },
        components: {
            Favoris
        }
    }
</script>
