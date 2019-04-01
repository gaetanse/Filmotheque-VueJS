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
                {{ text }}
                <hr>
                <div class="bfh-selectbox bfh-countries" data-country="US" data-flags="true">
                <input type="hidden" value="">
                <a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">
                    <span class="bfh-selectbox-option input-medium" data-option=""></span>
                    <b class="caret"></b>
                </a>
                <div class="bfh-selectbox-options">
                    <input type="text" class="bfh-selectbox-filter">
                    <div role="listbox">
                        <ul role="option">
                        </ul>
                    </div>
                </div>
            </div>
                <hr>
                <h5 v-if="json_match">
                    <div class="card text-center">
                        <div class="card-header">
                            <h5 class="card-title">{{ json_match['title'] }}</h5>
                        </div>
                        <div class="card-body">
                            <img class="card-img-top" src="get_url" style="width: 30%;">
                            <hr>
                            <p class="card-text">{{ json_match['overview'] }}</p>
                            <button v-on:click="addFav(goInfo['id'])" class="btn btn-primary">Plus de détails</button>
                            <button v-on:click="addFav(id)" class="btn btn-primary">Mettre en favoris</button>
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
    import Favoris from "./Favoris";
    export default {
        data() {
            return {
                jsonData: null,
                json_match: null,
                favori: [],
                page: 1,
                page_actif: 1,
                url_lien: "test/qzdqzd/qww",
                page_max: 1000,
                number: 0,
                position: -1,
                text: "",
                taille_results: 0,
                title: "",
                url_img: "",
                num: 0,
                url: "https://api.themoviedb.org/3/discover/movie?api_key=1d853ccc3f76e0d7e6544802f27005df&language=fr-FR&page=1",
                url_fav: "https://api.themoviedb.org/3/discover/movie?api_key=1d853ccc3f76e0d7e6544802f27005df&language=fr-FR&page=1",
            }
        },
        methods: {
            addFav(id) {
                this.url_fav = "https://api.themoviedb.org/3/movie/" + id + "?api_key=1d853ccc3f76e0d7e6544802f27005df";
                axios.get(this.url_fav).then(response => (this.jsonData = response));
                if (this.jsonData) {
                    this.$store.listeFavoris.push(this.jsonData);
                    this.jsonData = null;
                }
            },
            goInfo(id) {
                this.$router.push({name: 'Infos', params: {idFilm: id}})
            },
            callMethod: function () {
                this.taille_results = this.jsonData['data']['results'].length;
                this.number = 0;
                this.num = 1;
                this.position = -1;
                this.json_match = null;
                while (this.position === -1) {
                    this.position = this.jsonData['data']['results'][this.number]['title'].toLowerCase().search(this.title);
                    if (this.position !== -1) {
                        this.json_match = this.jsonData['data']['results'][this.number];
                        this.text = "";
                        this.num = 1;
                        break;
                    }
                    this.number++;
                    if (this.number >= this.taille_results) {
                        this.number = 0;
                        this.num++;
                        this.url = "https://api.themoviedb.org/3/discover/movie?api_key=1d853ccc3f76e0d7e6544802f27005df&page=" + this.num;
                        //axios.get(this.url).then(response => (this.jsonData = response));
                        this.taille_results = this.jsonData['data']['results'].length;
                    }
                    if (this.num >= 1000) {
                        this.text = "pas trouvé";
                        break;
                    }
                }
            }
        },
        mounted() {
            axios.get(this.url_fav).then(response => (this.jsonData = response));
        },
        components: {
            Favoris
        }
    }
</script>