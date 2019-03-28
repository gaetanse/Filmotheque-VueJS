<template>
  <div class="liste">
    <div class="holder">
      <hr>
      <form @submit.prevent="addItem">
        <div class="input">
          <label for="name">Tapez le nom du film (ou qzdqd ou qzddqz ou dwzdzq) :</label>
          <input type="text" name="nom" class="form-control" v-model="nom" v-validate="'alpha'">
          <span v-show="errors.has('nom')" class="alert">{{ errors.first('nom') }}</span>
        </div>
      </form>
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