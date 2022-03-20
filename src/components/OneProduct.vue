<template>
  <v-card class="mx-auto" max-width="200">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title> {{prodotto.name}} </v-card-title>

    <v-card-subtitle>{{prodotto.price}} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="indigo" dark max-width="190"> Aggiungi al carrello </v-btn>
    </v-card-actions>

  </v-card>
</template>


<script>
/* eslint-disable */
export default {
  props: ["prodotto"],
  data: () => ({
    show: false,
  }),
};
</script>


