<template>
    <div class="liste">
        <div class="row align-items-center" style="height: 100%">
            <div class="col-md-6 mx-auto">
                <hr>
                <form @submit.prevent="">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Rechercher</span>
                        </div>
                        <input type="text" v-on:keyup="callMethod" name="title" class="form-control" v-model="title" v-validate="'alpha'" placeholder="Tapez votre film" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                </form>
                {{ title }}
                <hr>
                {{ json_good }}
                <hr>
                <p v-for="data in jsonData">
                    {{data['results']}}
                </p>
                <hr>
            </div>
        </div>
        <div id="app">
            <ul>
                <p v-for="data in jsonData">
                    {{data}}
                </p>
            </ul>
        </div>
    </div>
</template>

<style>
    .input {
        box-shadow: 0 0 5px rgba(0, 0, 0, 1);
        padding: 3px 0px 3px 3px;
        margin: 5px 1px 3px 0px;
        border: 1px solid rgba(0, 0, 0, 1);
    }
</style>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                jsonData: null,
                json_good: null,
                page: 1,
                page_max: 20402,
                tab_id: [],
                title : 0,
                objetJS: null,
                url: "https://api.themoviedb.org/3/discover/movie?api_key=1d853ccc3f76e0d7e6544802f27005df&language=fr-FR&sort_by=original_title.desc&include_adult=false&include_video=false&page="+this.title+"",
            }},
        methods: {
            callMethod : function (){
                //alert('Hello : '+ this.title);
            }
        }
,
        mounted() {
            axios.get(this.url)
                .then(response => (this.jsonData = response));

            //this.objetJS = JSON.parse(this.jsonData);

            this.json_good=this.url;

            ///FAIRE UN FOR DANS LE JSON
                ///SI ON TROUVE ALORS ON MET LE BON TRUC
            ///SINON ON AUGMENTE LA PAGE JUSQUAU MAX

        }
    }
</script>