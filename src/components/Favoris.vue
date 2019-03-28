<template>
    <div class="about">
        <h1>Page de vos films favoris</h1>
        Vos favoris sont vides !
    </div>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
                film: this.$route.params.film,
                favori: []
            }
        }
    }
</script>
<style>
    .film {
        font-size: 30px;
        color: darkorange;
    }
</style>