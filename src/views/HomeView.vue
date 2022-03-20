<template>
  <div class="home">
    <v-card max-width="750" class="mx-auto"> <ProductList /></v-card>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import ProductList from "@/components/ProductList.vue";
import Vue from "vue";

export default Vue.extend({
  components: { ProductList },
  name: "Home",
});
</script>
