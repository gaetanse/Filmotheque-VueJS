<template>
    <div class="infos">
        <br>
        <h2>Infos d'un film</h2>
        <hr>

        <div v-if="jsonData!==null">

            <div class="card mx-auto" style="width: 85%;">

                <br>

                <div v-if="jsonData['data']['poster_path']!==null">
                    <img class="card-img-top" v-bind:src="'https://image.tmdb.org/t/p/w500/'+jsonData['data']['backdrop_path']" style="width: 70%;">
                </div>
                <div v-else>
                    <img class="card-img-top" src="../assets/nop.jpg">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ jsonData['data']['title'] }}</h5>
                    <div class="card-text">
                            {{ jsonData['data']['overview'] }}
                        <br>

                        <hr>
                        Film pour adulte : {{ jsonData['data']['adult'] }}
                        <hr>
                        Budget : {{ jsonData['data']['budget'] }}
                        <hr>
                        Langue original : {{ jsonData['data']['original_language'] }}
                        <hr>
                        Titre original : {{ jsonData['data']['original_title'] }}
                        <hr>
                        Popularité : {{ jsonData['data']['popularity'] }}
                        <hr>
                        Date de sortie : {{ jsonData['data']['release_date'] }}
                        <hr>
                        Revenue : {{ jsonData['data']['revenue'] }}
                        <hr>

                        # mettre tous les trucs du JSON MDR ON SAMUSE et rajouter des IF

                        /*

                        { "data": { "adult": false, "backdrop_path": "/sycS64dwK8eRxMeKALPE29z0HXv.jpg", "belongs_to_collection": null, "budget": 13000000, "genres": [ { "id": 35, "name": "Comedy" } ], "homepage": "http://stvincent-movie.com/", "id": 239563, "imdb_id": "tt2170593", "original_language": "en", "original_title": "St. Vincent", "overview": "A young boy whose parents just divorced finds an unlikely friend and mentor in the misanthropic, bawdy, hedonistic, war veteran who lives next door.", "popularity": 12.164, "poster_path": "/w0hzr4eQBk1X4m63fb7sOSt9Bnn.jpg", "production_companies": [ { "id": 7076, "logo_path": "/8BFxn9NUWSgp0ndih569Gm62xiC.png", "name": "Chernin Entertainment", "origin_country": "US" }, { "id": 308, "logo_path": "/e8F3mQM7DkJ5SfYYDp8FYzPBOGX.png", "name": "The Weinstein Company", "origin_country": "US" }, { "id": 3314, "logo_path": null, "name": "Crescendo Productions", "origin_country": "" }, { "id": 15855, "logo_path": null, "name": "Goldenlight Films", "origin_country": "" } ], "production_countries": [ { "iso_3166_1": "US", "name": "United States of America" } ], "release_date": "2014-10-09", "revenue": 54837234, "runtime": 102, "spoken_languages": [ { "iso_639_1": "en", "name": "English" } ], "status": "Released", "tagline": "Love Thy Neighbor", "title": "St. Vincent", "video": false, "vote_average": 7.1, "vote_count": 1045 }, "status": 200, "statusText": "OK", "headers": { "etag": "W/\"4082bfd3afdbb50984412c89a0507f52\"", "x-ratelimit-remaining": "39", "content-type": "application/json;charset=utf-8", "cache-control": "public, max-age=28800", "x-ratelimit-reset": "1554377798", "x-ratelimit-limit": "40" }, "config": { "transformRequest": {}, "transformResponse": {}, "timeout": 0, "xsrfCookieName": "XSRF-TOKEN", "xsrfHeaderName": "X-XSRF-TOKEN", "maxContentLength": -1, "headers": { "Accept": "application/json, text/plain, */*" }, "method": "get", "url": "https://api.themoviedb.org/3/movie/239563?api_key=1d853ccc3f76e0d7e6544802f27005df" }, "request": {} }

                        */

                    </div>
                    <button v-on:click="getPost(jsonData['data']['id'])" class="btn btn-primary">Infos du film</button>
                    <br><br>
                    <button v-on:click="addFav(jsonData['data']['id'])" class="btn btn-primary">Mettre en favoris</button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                url: "",
                id: 0,
                jsonData: null,
            }
        },
        mounted() {
            let search_params = new URLSearchParams(document.location.href).toString();
            let compteur=0;
            while(search_params[compteur]!=='='){
                compteur++;
            }
            this.id = search_params.substr(compteur+1,(search_params.length-compteur));
            this.url="https://api.themoviedb.org/3/movie/"+ this.id +"?api_key=1d853ccc3f76e0d7e6544802f27005df";

            console.log(this.id);
            axios.get(this.url).then(response => (this.jsonData = response)).then((response) => {
                if (response.data.status) {
                    console.log("ok");
                }
            });
        },
        methods: {
            string_couper(string) {
                return string.substr(0, this.max_string);
            }
        }
    }
</script>

<style scoped>

</style>