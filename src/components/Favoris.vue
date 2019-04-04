<template>
    <div class="favoris">
        <hr>
        <h1>Page de vos films favoris</h1>
        <hr>
        <div v-if="!tabFavoris">Vous n'avez aucun favoris</div>
        <table v-if="tabFavoris" class="table table-striped">
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
                this.$store.commit('DELETE_FAVORI',i);
                this.$router.go();
            }
        }
    }
</script>
