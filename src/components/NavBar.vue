<template>
  <nav>
    <v-toolbar flat fixed app height="100" @click="$router.push('/#')">
      <!-- <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title class="text-uppercase black--text" >
        <span> Logo Raffelli</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-select
        :items="['categoria 1', 'categoria2']"
        label="Seleziona categoria"
      ></v-select>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-text-field
            v-model="title"
            :rules="rules"
            
            hint="This field uses counter prop"
            label="Cerca un prodotto"
          ></v-text-field>

      <v-spacer></v-spacer>
      <v-badge color="green" :content="chartSize" :value="chartSize" overlap > 
        <v-btn depressed large dark color="indigo" @click="$router.push('cart')" ><v-icon>carrello</v-icon></v-btn >
      </v-badge>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="indigo">
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      chartSize: 0,
      drawer: false,
    };
  },

  computed: {
    ...mapGetters(["getProductsInCart"]),
  }
  };
</script>
