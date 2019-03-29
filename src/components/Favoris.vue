<template>
    <div class="favoris">
        <hr>
        <h1>Page de vos films favoris</h1>
        <hr>
        <h5 v-if="awesome">
            <h3 v-for="(data, index) in favori" :key='index'>
                {{ data }} <img src="">
            </h3>
        </h5>
        <h5 v-else>Vos favoris sont vides 😢</h5>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                favori: [],
                url: "",
                jsonData: null,
            }},
        methods: {
            removeFav(x) {
                this.favori.splice(x, 1);
            }
        }
    }
</script>