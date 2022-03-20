<template>
  <v-app>
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import NavBar from '@/components/NavBar.vue'

export default Vue.extend({
  name: 'App',

  components : {
    NavBar
  },
  data: () => ({
    //
  }),
});
</script>
