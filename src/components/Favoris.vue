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
                <td>{{ data['data']['commentaire'] }}</td>
                <td>
                    <b-button class="btn btn-primary" v-b-modal="'modal-prevent'" @click="sendInfo(index)">Evaluer
                    </b-button>
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
                title="Veuillez entrer votre commentaire"
                @ok="handleOk(commentaire)">

            <form @submit.stop.prevent="handleSubmit">
                <b-form-input v-model="commentaire" placeholder="Entrez votre commentaire"></b-form-input>
            </form>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'Favoris',
        data() {
            return {
                commentaire: '',
                evalId: 'tesst',
                commentaires: [],
                leFavori: [],
                url: "",
            }
        },
        computed: {
            tabFavoris: function () {
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
            handleOk(commentaire) {
                // Prevent modal from closing
                // id.preventDefault();
                if (!this.commentaire) {
                    alert('Veuille entrer votre commentaire')
                } else {
                    this.handleSubmit(commentaire)
                }
            },
            handleSubmit(commentaire) {
                let FavF = JSON.parse(localStorage.getItem("listeFavoris"));
                FavF[this.evalId]['data'].commentaire = commentaire;
                this.$store.commit('DELETE_FAVORI', FavF[this.evalId]);
                this.$store.commit('SET_FAVORI', FavF[this.evalId]);
                this.$router.go();

            },
            sendInfo(item) {
                this.evalId = item;
            }
        }
    }
</script>
