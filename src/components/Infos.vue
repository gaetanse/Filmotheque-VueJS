<template>
    <div class="infos">
        <br>
        <h2>Infos d'un film</h2>
        <hr>

        <div v-if="jsonData!==null">

            <div class="card mx-auto" style="width: 85%;">

                <br>

                <div class="list-group list-group-horizontal">

                    <div v-if="jsonData['data']['poster_path']!==null">
                        <img class=" w-50 card-img" v-bind:src="'https://image.tmdb.org/t/p/w500/'+jsonData['data']['poster_path']" style="margin-left: 200px;">
                    </div>
                    <div v-else>
                        <img class="mx-auto w-50 card-img-top" src="../assets/nop.jpg">
                    </div>
                    <hr>

                    <div v-if="jsonData['data']['backdrop_path']!==null">
                        <img class="  card-img" v-bind:src="'https://image.tmdb.org/t/p/w500/'+jsonData['data']['backdrop_path']" style="padding-right: 200px;">
                    </div>
                    <div v-else>
                        <img class="mx-auto w-100 card-img-top" src="../assets/nop.jpg">
                    </div>

                </div>

                <h1 class="card-title" style="margin-left: 420px;margin-top: -150px;">
                    <div v-if="jsonData['data']['title']!==null">
                        {{ jsonData['data']['title'] }}
                    </div>
                    <div v-else>Pas de titre</div>
                </h1>

                <div class="card-body" style="margin-top: 100px;">
                    <hr>

                    <div class="card-text">
                        <div v-if="jsonData['data']['overview']!==null">
                            {{ jsonData['data']['overview'] }}
                        </div>
                        <div v-else>Pas de résumé</div>
                        <br>

                        <hr>
                            <div v-if="jsonData['data']['adult']!==null">
                                Film pour adulte : {{ jsonData['data']['adult'] }}
                            </div>
                        <div v-else>Pas de classement pegi</div>
                        <hr>
                            <div v-if="jsonData['data']['genres']!==null">
                        Genres :<br>
                        <div v-for="(data, index) in jsonData['data']['genres']" :key='index'>
                            {{ data['name'] }}
                        </div>
                            </div>
                        <div v-else>Pas de genre</div>
                        <hr>
                        <div v-if="jsonData['data']['production_companies']!==null">
                        Compagnies de production :<br>
                        <div v-for="(data, index) in jsonData['data']['production_companies']" :key='index'>
                            {{ data['name'] }} / {{ data['origin_country'] }}
                        </div>
                        </div>
                        <div v-else>Pas de compagnies de production</div>
                        <hr>
                        <div v-if="jsonData['data']['production_countries']!==null">
                        Pays de production :<br>
                        <div v-for="(data, index) in jsonData['data']['production_countries']" :key='index'>
                            {{ data['name'] }} / {{ data['iso_3166_1'] }}
                        </div>
                        </div>
                        <div v-else>Pas de pays de production</div>
                        <hr>
                        <div v-if="jsonData['data']['spoken_languages']!==null">
                        Langues parlées:<br>
                        <div v-for="(data, index) in jsonData['data']['spoken_languages']" :key='index'>
                            {{ data['name'] }} / {{ data['iso_639_1'] }}
                        </div>
                        </div>
                        <div v-else>Pas de langues parlées</div>
                        <hr>
                        <div v-if="jsonData['data']['homepage']!==null">
                            Page d'accueil : {{ jsonData['data']['homepage'] }}
                        </div>
                        <div v-else>Pas de page d'accueil</div>
                        <hr>
                        <div v-if="jsonData['data']['status']!==null">
                        Status : {{ jsonData['data']['status'] }}
                        </div>
                        <div v-else>Pas de status</div>
                        <hr>
                        <div v-if="jsonData['data']['tagline']!==''">
                        Slogan : {{ jsonData['data']['tagline'] }}
                        </div>
                        <div v-else>Pas de slogan</div>
                        <hr>
                            <div v-if="jsonData['data']['video']!==null">
                        Vidéo : {{ jsonData['data']['video'] }}
                            </div>
                        <div v-else>Pas de vidéo</div>
                        <hr>
                                <div v-if="jsonData['data']['runtime']!==null">
                        Runtime : {{ jsonData['data']['runtime'] }}
                                </div>
                        <div v-else>Pas de runtime</div>
                        <hr>
                                    <div v-if="jsonData['data']['popularity']!==null">
                        Popularité : {{ jsonData['data']['popularity'] }}
                                    </div>
                        <div v-else>Pas de popularité</div>
                        <hr>
                                        <div v-if="jsonData['data']['budget']!==null">
                        Budget : {{ jsonData['data']['budget'] }}
                                        </div>
                        <div v-else>Pas de budget</div>
                        <hr>
                                                <div v-if="jsonData['data']['vote_average']!==null">
                        Moyenne des votes : {{ jsonData['data']['vote_average'] }}
                                                </div>
                        <div v-else>Pas de moyenne des votes</div>
                        <hr>
                                                    <div v-if="jsonData['data']['vote_count']!==null">
                        Nombre de votes : {{ jsonData['data']['vote_count'] }}
                                                    </div>
                        <div v-else>Pas de nombre de votes</div>
                        <hr>
                                                        <div v-if="jsonData['data']['original_title']!==null">
                        Titre original : {{ jsonData['data']['original_title'] }}
                                                        </div>
                        <div v-else>Pas de titre original</div>
                        <hr>
                                                                <div v-if="jsonData['data']['release_date']!==null">
                        Date de sortie : {{ jsonData['data']['release_date'] }}
                                                                </div>
                        <div v-else>Pas de date de sortie</div>
                        <hr>
                                                                    <div v-if="jsonData['data']['revenue']!==null">
                        Revenue : {{ jsonData['data']['revenue'] }}
                                                                    </div>
                        <div v-else>Pas de revenue</div>
                        <hr>

                    </div>
                    <button v-on:click="addFav(jsonData['data']['id'])" class="btn btn-primary">Mettre en favoris</button>
                </div>
            </div>

        </div>

        <br>

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

            axios.get(this.url).then(response => (this.jsonData = response)).then((response) => {
                if (response.data.status) {
                }
            });
        },
        methods: {
            addFav(id) {
                this.url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=1d853ccc3f76e0d7e6544802f27005df";
                axios.get(this.url).then(response => (this.jsonData = response)).then((response) => {
                    if (response.data.status) {
                        this.$store.commit('SET_FAVORI', this.jsonData);
                    }
                })
            },
            string_couper(string) {
                return string.substr(0, this.max_string);
            }
        }
    }
</script>

<style scoped>

</style>