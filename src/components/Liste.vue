<template>
  <div class="liste">
    <h2>{{titre}}</h2>
    <div class="holder">
      <form @submit.prevent="addItem">
        <div class="input">
          <label for="name">Acteur </label>
          <input type="text" name="nom" class="form-control" v-model="nom" v-validate="'alpha'">
          <span v-show="errors.has('nom')" class="alert">{{ errors.first('nom') }}</span>
        </div>
        <div class="input">
          <label for="role">Rôle </label>
          <input type="text" id="role" class="form-control" name="role" v-model="role" v-validate="'alpha'">
          <span v-show="errors.has('role')" class="alert">{{ errors.first('role') }}</span>
        </div><br>
        <p><button  type="submit" class="btn btn-primary mb-2">Validation</button></p>
      </form>
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>Acteur</th>
          <th>Rôle</th>
          <th>Acteur nouveau | Rôle nouveau</th>
          <th>Modifier</th>
          <th>Supprimer</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(data, index) in items" :key='index'>
            <td>{{data.acteur}}</td>
            <td>{{data.role}}</td>
          <td>
          <form @submit.prevent="modif_Val">
            <div class="input">
            <input type="text" :id="'i1-' + index" name="texte1" v-model="data.acteur">
              <span v-show="errors.has('data.acteur')" class="alert">{{ errors.first('data.acteur') }}</span>
            <input type="text"  :id="'i2-' + index" name="texte2" v-model="data.role" >
                <span v-show="errors.has('data.role')" class="alert">{{ errors.first('data.role') }}</span>
            </div>
          </form>
            </td>
          <td>
            <form @submit.prevent="modif_Val">
              <p><button type="submit" v-on:click.self="modif_Val(index,data.acteur,data.role),modif" class="btn btn-primary mb-2">Modifier</button></p>
            </form>
          </td>
          <td><img src="../../image/delete.png" v-on:click="remove(index)"/></td>
        </tr>
        </tbody>
      </table>
      <div v-bind:class="{ alert: showAlert }">
        <p v-if="items.length >= 1">Nombre d'acteurs dans la base : {{items.length}}</p>
        <p v-else>Pas d'acteurs dans la base !</p>
      </div>
    </div>
  </div>

</template>

<script>



  const items = [
    { "acteur": "Robert Downey Jr.", "role": "Tony Stark / Iron Man" },
    { "acteur": "Gwyneth Paltrow", "role": "Pepper Potts" },
    { "acteur": "Terrence Howard", "role": "James Rhodey" }
  ];
  let showAlert = (items.length > 1) ? false : true;
  export default {
    name: 'Items',
    data() {
      return {
        titre: 'Liste des rôles d\'un film',
        nom: '',
        role: '',
        texte1_new: '',
        texte2_new: '',
        items,
        showAlert
      }},
    methods : {
      addItem() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.items.push({"acteur": this.nom, "role": this.role});
            this.nom = '';
            this.role = '';
            return;
          }
        })
      },

      doubleValue: {
        get(id){
          //this function will determine what is displayed in the input
          return this.items[id].acteur;
        }
      },
    remove(id) {
      this.items.splice(id, 1);
    },
      modif: function(e) {
        e.preventDefault()
        this.$data.texte1 = "";
        this.$data.texte2 = "";
        this.form.reset()
      },
      get_acteur(id){
        return this.items[id].acteur;
      },
      get_role(id){
        return this.items[id].role;
      },
      modif_Val(id,texte1,texte2) {
        this.$validator.validateAll().then((result2) => {
          if (result2) {
            this.items[id].acteur=texte1;
            this.items[id].role=texte2;
            var self = this; //you need this because *this* will refer to Object.keys below`
            //Iterate through each object field, key is name of the object field`
            Object.keys(this.data.form).forEach(function(key,index) {
              self.data.form[key] = '';
            });
            this.form.reset();
            this.texte1 = '';
            this.texte2 = '';
            return;
          }
        })
      }
  }
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  body {
    background-color: #EEEEEE;
    font-family: 'Montserrat', sans-serif;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }
  body, html {
    margin: 0;
    height: 100%;
  }
  #app {
    text-align: center;
    color: #2c3e50;
  } .input {
      text-align: left;
    }
  input[type=text]:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
  }nav {
     padding: 20px 20px 20px 0;
   }
  nav a {
    padding: 10px;
    text-decoration: none;
    background: #fff;
    border-radius: 3px;
    color: rgb(0, 110, 255);
    font-weight: bold;
  }

</style>