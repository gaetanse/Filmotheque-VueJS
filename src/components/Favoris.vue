<template>
    <div class="favoris">
        <hr>
        <h1>Page de vos films favoris</h1>
        <hr>
        <h5 v-if="favori">
            <h3 v-for="(data, index) in favori" :key='index'>
                {{ data }}
                testtest
        </h3>
        </h5>
        <h5 v-else>Vos favoris sont vides </h5>
    <button type="button" class="close" aria-label="Close">
        </button>
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
        props:{
            numbers: Array
        },
        created() {
            this.favori = this.$store.state.listeFavoris
        },
        methods: {
            removeFav(x) {
                       vori.splice(x, 1);
            }
        }
    }
</script>