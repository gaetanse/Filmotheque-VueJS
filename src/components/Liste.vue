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
                <hr>
                <h5 v-if="json_match">
                    <div class="card text-center">
                        <div class="card-header">
                            <h5 class="card-title">{{ json_match['title'] }}</h5>
                        </div>
                        <div class="card-body">
                            <img class="card-img-top" v-bind:src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + json_match['overview']" style="width: 30%;">
                            <hr>
                            <p class="card-text">{{ json_match['overview'] }}</p>
                            <a href="#" class="btn btn-primary">Infos du film</a>
                            <a href="#" class="btn btn-primary">Mettre en favoris</a>
                        </div>
                        <div class="card-footer text-muted">
                            {{ json_match['release_date']}}
                        </div>
                    </div>
                </h5>
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
                jsonData: null,
                json_match: null,
                page: 1,
                page_max: 20402,
                number: 0,
                position: -1,
                title : "",
                url: "https://api.themoviedb.org/3/discover/movie?api_key=1d853ccc3f76e0d7e6544802f27005df&language=fr-FR&page=1",
            }},
        methods: {
            callMethod : function (){

                this.number=0;
                this.position=-1;
                this.json_match= null;

                while(this.position===-1){
                    this.position = this.jsonData['data']['results'][this.number]['title'].toLowerCase().search(this.title);
                    if(this.position!==-1){
                        this.json_match = this.jsonData['data']['results'][this.number];
                        this.page=1;
                        break;
                    }
                    this.number++;
                }
                this.page++;
                this.url = "https://api.themoviedb.org/3/discover/movie?api_key=1d853ccc3f76e0d7e6544802f27005df&language=fr-FR&page="+this.page.toString();

            }
        }
,
        mounted() {
            axios.get(this.url)
                .then(response => (this.jsonData = response));
        }
    }
</script>