<template>
    <div class="favoris">
        <hr>
        <h1>Page de vos films favoris</h1>
        <div class="row align-items-center" style="height: 100%">
            <h5 v-if="tabFavoris">
                <div class="card text-center" v-for="(data, index) in tabFavoris" :key='index'>
                    <div class="card-header">
                        <h5 class="card-title">{{ data['data']['title'] }}</h5>
                    </div>
                    <div class="card-body">
                        <img class="card-img-top" v-bind:src="'https://image.tmdb.org/t/p/w500/'+data['data']['poster_path']" style="width: 30%;">
                        <hr>
                        <p class="card-text">{{ data['data']['overview'] }}</p>
                    </div>
                    <div class="card-footer text-muted">
                        {{ data['data']['release_date']}}
                    </div>


                    <button class="btn btn-primary">Infos du film</button>
                    <br>
                    <button class="btn btn-primary">Supprimer en favoris</button>

                </div>
            </h5>
            <h5 v-else>Vos favoris sont vides </h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Favoris',
        data() {
            return {
                leFavori: [],
                url: "",
            }},
        computed: {
            tabFavoris : function () {
                console.log(JSON.parse(localStorage.getItem("listeFavoris")));
                return JSON.parse(localStorage.getItem("listeFavoris"));
            }
        },
        props:{
            numbers: Array
        },
        methods: {
            remove(i) {
                this.$store.commit('DELETE_FAVORI',i)
            },
            sauver() {
                localStorage.listeFavoris = JSON.stringify(this.tabFavoris)
            }

        }
    }
</script>
