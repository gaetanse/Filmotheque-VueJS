<template>
    <div class="about">
        <h1>Page A propos...</h1>
        <p>Page de démonstration pour le film
            <span class="film">{{film}}</span>.
        </p>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
                film: this.$route.params.film
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