<template>
    <div class="favoris">
        <hr>
        <h1>Page de vos films favoris</h1>
    <div class="row align-items-center" style="height: 100%">
        <h5 v-if="tabFavoris">
        <h3 v-for="(data, index) in tabFavoris" :key='index'>
            {{ data }}
            <div class="card text-center">
                <div class="card-header">
                    <h5 class="card-title">{{ data['title'] }}</h5>
                </div>
                <div class="card-body">
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/data['title']" style="width: 30%;">
                    <hr>
                    <p class="card-text">{{ data['overview'] }}</p>
                </div>
                <div class="card-footer text-muted">
                    {{ data['release_date']}}
                </div>
            </div>
        </h3>
        </h5>
        <h5 v-else>Vos favoris sont vides </h5>
        <button type="button" class="close" aria-label="Close">
        </button>
    </div>
    </div>
        </template>

        <script>
    import axios from 'axios';
    export default {
        name: 'Favoris',
        data() {
            return {
                favori: [],
                url: "",
            }},
        computed: {
            tabFavoris : function () {
                return this.$store.getters.laListeFavoris;
            }
        },
        props:{
            numbers: Array
        },
        mounted(){
            if (localStorage.listeFavoris){
                this.$store.commit('SET_FAVORIS', JSON.parse(localStorage.listeFavoris))
            }
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