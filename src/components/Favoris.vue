<template>
    <div class="about">
        <hr>
        <h1>Page de vos films favoris</h1>
        <h5 v-if="awesome">
            <h3 v-for="(data, index) in favori" :key='index'>
                {{ data }}
            </h3>
        </h5>
        <h5 v-else>Vos favoris sont vides 😢</h5>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                favori: []
            }},
            methods: {
                addFavori() {
                }
            }
    }
</script>