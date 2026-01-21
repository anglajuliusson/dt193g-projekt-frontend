<script setup>
    import { useRoute } from 'vue-router';
    // Importerar gemensamma layout-komponenter som ska visas på alla sidor i applikationen.
    import Header from './components/Header.vue' // Header-komponenten

  const route = useRoute();
</script>

<template>
  <!-- Huvudlayout för hela applikationen. 
       Header visas inte på login-sidan
       Innehållet i <router-view /> byts dynamiskt beroende på vilken route som är aktiv. -->
       <Header v-if="route.name !== 'login'" />
       <router-view />
</template>

<style scoped></style>
