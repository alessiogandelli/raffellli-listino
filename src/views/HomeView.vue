<template>
  <div class="home">
    <v-card max-width="750" class="mx-auto"> <ProductList :products="getTutti"/></v-card>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import ProductList from "@/components/ProductList.vue";
import Vue from "vue";
import { mapGetters } from 'vuex';

export default Vue.extend({
  components: { ProductList },
  name: "Home",

  computed: {
    ...mapGetters([
      'getTutti',
    ]),
  },
});
</script>
