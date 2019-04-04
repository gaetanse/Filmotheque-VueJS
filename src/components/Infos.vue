<template>
    <div class="infos">
    Infos d'un film
        <hr>

        <div v-if="jsonData!==null">
            {{ jsonData }}
        </div>

        qzdqz

            {{ window.location.search

        dqz

    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: "",
                id: 0,
                jsonData: null,
            }
        },
        mounted() {
            var search_params = new URLSearchParams(window.location.search);
            var id = search_params.get('id');
            console.log(window.location.search);
            console.log("coucou");
        }
    }
</script>

<style scoped>

</style>