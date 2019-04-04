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
                <th scope="col">Evaluation</th>
                <th scope="col">Supprimer</th>
            </tr>
            </thead>
            <tbody v-for="(data, index) in tabFavoris" :key='index'>
            <tr>
                <th scope="row">{{ data['data']['title'] }}</th>
                <td>{{ data['data']['overview'] }}</td>
                <td>
                    <b-button class="btn btn-primary" v-b-modal.modal-prevent>Evaluer</b-button>
                </td>
                <td>
                    <button v-on:click="remove(data['id'])" class="btn btn-danger">Supprimer</button>
                </td>
            </tr>
            </tbody>
        </table>

        <!-- Modal Component -->
        <b-modal
                id="modal-prevent"
                ref="modal"
                title="Submit your name"
                @ok="handleOk"
                @shown="clearName"
        >
            <form @submit.stop.prevent="handleSubmit">
                <b-form-input v-model="name" placeholder="Enter your name"></b-form-input>
            </form>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'Favoris',
        data() {
            return {
                name: '',
                names: [],
                leFavori: [],
                url: "",
            }
        },
        computed: {
            tabFavoris: function () {
                console.log(JSON.parse(localStorage.getItem("listeFavoris")));
                return JSON.parse(localStorage.getItem("listeFavoris"));
            }
        },
        props: {
            numbers: Array
        },
        methods: {
            remove(i) {
                this.$store.commit('DELETE_FAVORI', i);
                this.$router.go();
            },
            addEval(data) {

            },
            clearName() {
                this.name = ''
            },
            handleOk(evt) {
                // Prevent modal from closing
                evt.preventDefault();
                if (!this.name) {
                    alert('Please enter your name')
                } else {
                    this.handleSubmit()
                }
            },
            handleSubmit() {
                this.names.push(this.name);
                this.clearName();
                this.$nextTick(() => {
                    // Wrapped in $nextTick to ensure DOM is rendered before closing
                    this.$refs.modal.hide()
                })
            }
        }
    }
</script>
