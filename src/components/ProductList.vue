<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap justify-space-around>
      <v-flex v-for="image in images" :key="image.num"> 
          <OneProduct/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import OneProduct from "@/components/OneProduct.vue";

export default {
  el: "#app",
  components:{OneProduct},
  data: () => ({
    images: Array.from(new Array(50)).map((e, i) => ({
      num: i + 1,
      src: `https://picsum.photos/300/400?image=${i + 1}`,
    })),
  }),
};
</script>

<style>
</style>