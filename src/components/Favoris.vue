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
                <th scope="col">Commentaire</th>
                <th scope="col">Noter</th>
                <th scope="col">Infos du film</th>
                <th scope="col">Supprimer</th>
            </tr>
            </thead>
            <tbody v-for="(data, index) in tabFavoris" :key='index'>
            <tr>
                <th scope="row">{{ data['data']['title'] }}</th>
                <td>{{ data['data']['overview'] }}</td>
                <td>{{ data['data']['evaluation'] }}</td>
                <td>{{ data['data']['commentaire'] }}</td>
                <td>
                    <b-button class="btn btn-primary" v-b-modal="'modal-prevent'" @click="sendInfo(index)">Noter
                    </b-button>
                </td>
                <td>   <button v-on:click="getPost(data['data']['id'])" class="btn btn-primary">Infos</button>
                </td>
                <td>
                    <button @click="remove(index)" class="btn btn-danger">Supprimer</button>
                </td>
            </tr>
            </tbody>
        </table>
        <b-modal
                id="modal-prevent"
                ref="modal"
                title="Veuillez entrer votre evaluation"
                @ok="handleOk(commentaire, evaluation)">

            <form @submit.stop.prevent="handleSubmit">
                <b-form-input v-model="evaluation" placeholder="Entrez votre evaluation"></b-form-input>
                <hr>
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
                evaluation: null,
                commentaire: '',
                evalId: 'tesst',
                commentaires: [],
                leFavori: [],
                url: "",
            }
        },
        computed: {
            tabFavoris : function () {
                return this.$store.getters.laListeFavoris;
            }
        },
        mounted() {
            if (localStorage.listeFavoris) {
                this.$store.commit('SET_FAVORIS', JSON.parse(localStorage.listeFavoris))
            }
        },

        props: {
            numbers: Array
        },
        methods: {
            remove(i) {
                this.$store.commit('DELETE_FAVORI', i);
                this.tabFavoris = this.$store.getters.laListeFavoris;
            },
            getPost(id) {
                window.location = '/#/infos?num='+id;
            },
            handleOk(commentaire, evaluation) {
                if (!this.evaluation) {
                    alert('Veuille entrer votre evaluation')
                } else {
                    this.handleSubmit(commentaire, evaluation)
                }
            },
            handleSubmit(commentaire, evaluation) {
                let FavF = JSON.parse(localStorage.getItem("listeFavoris"));
                FavF[this.evalId]['data'].evaluation = evaluation;
                if (commentaire) {
                    FavF[this.evalId]['data'].commentaire = commentaire;
                }
                this.$store.commit('DELETE_FAVORI', FavF[this.evalId]);
                this.$store.commit('SET_FAVORI', FavF[this.evalId]);
                this.tabFavoris = this.$store.getters.laListeFavoris;
            },
            sendInfo(item) {
                this.evalId = item;
            }
        }
    }
</script>
