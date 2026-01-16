<script setup>
    // Importerar gemensamma layout-komponenter som ska visas på alla sidor i applikationen.
    import Header from './components/Header.vue' // Header-komponenten
</script>

<template>
  <!-- Huvudlayout för hela applikationen. 
       Innehållet i <router-view /> byts dynamiskt beroende på vilken route som är aktiv. -->
       <Header />
       <router-view />
</template>

<style scoped></style>
