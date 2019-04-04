<template>
    <div class="favoris">
        <hr>
        <h1>Page de vos films favoris</h1>
        <hr>
        <div v-if="!tabFavoris">Vous n'avez aucun favoris</div>
      <!--  <div class="row align-items-center" style="height: 100%">
            <div v-if="tabFavoris">
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
                </div>
            </div>
            <button type="button" class="close" aria-label="Close">
            </button>
        </div>-->
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">Titre</th>
                <th scope="col">Résumé</th>
                <th scope="col">Commentaire</th>
                <th scope="col">Evaluation</th>
                <th scope="col">Supprimer</th>
            </tr>
            </thead>
            <tbody v-for="(data, index) in tabFavoris" :key='index'>
            <tr>
                <th scope="row">{{ data['data']['title'] }}</th>
                <td>{{ data['data']['overview'] }}</td>
                <td>manger</td>
                <td>test</td>
                <td><button v-on:click="remove(data['id'])" class="btn btn-primary">Supprimer</button></td>
            </tr>
            </tbody>
        </table>
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
