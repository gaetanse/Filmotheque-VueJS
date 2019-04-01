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
                <hr>
                    <h3 v-for="(data, index) in jsonData['data']['results']" :key='index'>
                        <div class="card text-center">
                            <div class="card-header">
                                <h5 class="card-title">{{ data['title'] }}</h5>
                            </div>
                            <div class="card-body">
                                <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/data['title']" style="width: 30%;">
                                <hr>
                                <p class="card-text">{{ data['overview'] }}</p>
                                <a href="" class="btn btn-primary">Infos du film</a>
                                <button v-on:click="addFav(data['id'])" class="btn btn-primary">Mettre en favoris</button>
                            </div>
                            <div class="card-footer text-muted">
                                {{ data['release_date']}}
                            </div>
                        </div>
                    </h3>
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
                jsonData: null,
                title : "",
                url: "",
            }},
        methods: {
            addFav(id) {
                this.url_fav = "https://api.themoviedb.org/3/movie/"+id+"?api_key=1d853ccc3f76e0d7e6544802f27005df";
                axios.get(this.url_fav).then(response => (this.jsonData = response));
                if(this.jsonData){
                    this.favori.push(this.jsonData);
                    this.jsonData= null;
                }
            },
            callMethod : function (){
                    this.url = "https://api.themoviedb.org/3/search/movie?api_key=1d853ccc3f76e0d7e6544802f27005df&query="+this.title;
                    axios.get(this.url).then(response => (this.jsonData = response))
                }
        },
        mounted() {
            axios.get(this.url).then(response => (this.jsonData = response));
        }
    }
</script>