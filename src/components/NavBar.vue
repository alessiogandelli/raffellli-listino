<template>
  <nav>
    <v-toolbar flat app height="100" @click="$router.push('/#')">
      <!-- <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title class="text-uppercase black--text" >
        <span> Logo Raffelli</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-select
        :items="['categoria 1', 'categoria2']"
        label="Seleziona categoria"
      ></v-select>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn depressed large dark color="indigo" @click="$router.push('cart')"
        ><v-icon>carrello</v-icon></v-btn
      >
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="indigo">
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
