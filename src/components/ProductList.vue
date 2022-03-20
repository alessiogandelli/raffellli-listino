<template>
  <v-container fluid grid-list-xl>


    <v-layout wrap justify-space-around>

      <v-flex  v-for="(product, index) in products" :key="index"> 
          <OneProduct :prodotto="product"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import OneProduct from "@/components/OneProduct.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  el: "#app",
  props: ["products"],
  components:{OneProduct},
  data: () => ({
    images: Array.from(new Array(50)).map((e, i) => ({
      num: i + 1,
      src: `https://picsum.photos/300/400?image=${i + 1}`,
    })),

  }),
  computed: {
        
        ...mapGetters(["getProductsInCart"]),
        
        filterProducts() {
            console.log(this.products)
            return this.products.filter((item) => {
                let prod = item.name
                    .toLowerCase()
                    .includes(this.testo.toLowerCase());
                return prod;
            });
        },
    },
};
</script>

<style>
</style>