<template>
  <div class="home">

    <ProductList />
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import ProductList from '@/components/ProductList.vue'
import Vue from 'vue'

  export default Vue.extend({

  components: { ProductList },
  name: 'Home',
  

  })
</script>
