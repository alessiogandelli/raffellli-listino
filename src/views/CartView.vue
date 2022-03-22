<template>
  <div>
    <v-card max-width="700" class="mx-auto">
      <v-data-table
        :headers="headers"
        :items="getProductsInCart"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item="row">
          <tr>
            <td>{{ row.item.name }}</td>
            <td>{{ row.item.price }}</td>
            <td>{{ row.index }}</td>
            <td>
              <v-text-field  v-model="qta[row.index]" :rules="rules" :suffix="row.item.um" type="number" placeholder="1"></v-text-field>
            </td>

            <td>
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="red"
                @click="onButtonClick(row.item)"
              >
                <v-icon dark>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>

    <v-btn
      depressed
      absolute
      right
      large
      dark
      class="mx-auto"
      color="indigo"
      @click="$router.push('cart')"
      ><v-icon>invia</v-icon></v-btn
    >
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  components: {},
  name: "Cart",
  data() {
    return {
      email: '',
      qta:[],
      headers: [
        { text: "prodotto", align: "start", sortable: false, value: "name" },
        { text: "prezzo", value: "calories" },
        { text: "unità di misura", value: "fat" },
        { text: "quantita" },

        { text: "cancella" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getProductsInCart"]),
  },

  methods: {
    
  }

  });
</script>
