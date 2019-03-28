<template>
    <div class="liste">
        <div class="row align-items-center" style="height: 100%">
            <div class="col-md-7 mx-auto">
                <hr>
                <form @submit.prevent="addItem">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Rechercher un film</span>
                        </div>
                        <input type="text" class="form-control" v-model="nom" v-validate="'alpha'"
                               placeholder="Tapez le nom du film" aria-label="Username" aria-describedby="basic-addon1">
                        <span v-show="errors.has('nom')" class="alert">{{ errors.first('nom') }}</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
</style>