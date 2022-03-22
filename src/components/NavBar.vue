<template>
  <nav>
    <v-app-bar flat fixed app height="100" @click="$router.push('/#')">
      <!-- <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title class="text-uppercase black--text" >
        <span> Logo Raffelli</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-select
        :items="['3', '11', '6', '13']"
        label="Seleziona categoria"
        v-on:change="changeCategory"
      ></v-select>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-text-field
            v-model="testo"
            :rules="rules"
            
            hint="This field uses counter prop"
            label="Cerca un prodotto"
          ></v-text-field>

      <v-spacer></v-spacer>
      <v-badge color="green" :content="getProductsInCart.length" :value="getProductsInCart.length" overlap > 
        <v-btn depressed large dark color="indigo" @click="$router.push('cart')" ><v-icon>carrello</v-icon></v-btn >
      </v-badge>
    </v-app-bar>

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
      testo:''
    };
  },

  methods: {
    ...mapActions(["updateChart"]),

    changeCategory(cat){
      console.log('categoria',cat)
      this.updateChart(cat)
    }
  },

  computed: {
    ...mapGetters(["getProductsInCart"]),
    
  }

  };
</script>
