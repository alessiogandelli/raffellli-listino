<template>
  <v-card class="mx-auto" max-width="200">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title> {{prodotto.name}} </v-card-title>

    <v-card-subtitle>{{prodotto.price}} € al {{prodotto.um}} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="indigo" dark max-width="190" @click="addProductToCart(prodotto)"> Aggiungi al carrello </v-btn>
    </v-card-actions>

  </v-card>
</template>


<script>
/* eslint-disable */
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["prodotto"],
  data: () => ({
    show: false,
  }),
  methods: {
      ...mapActions(["addProduct", "currentProduct"]),

      addProductToCart(product) {
        console.log('add', product.name)
            if(!this.getProductsInCart.some(e => e.name == product.name)){
                this.addProduct(product);

            }
        
      },

  },

  computed: {
    ...mapGetters(["getProductsInCart"]),
  }
};
</script>


