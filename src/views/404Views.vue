<template>
    <div>
      <nav class="text-center">
        <router-link to="/dashboard">Regresar</router-link>
      </nav>
      <div class="text-center">
        <v-icon color="blue darken-4" size="100">mdi-alert-circle-outline</v-icon>
        <h1 class="title">404</h1>
        <p class="subtitle">Página no encontrada</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .title {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  
  .subtitle {
    font-size: 1.5rem; 
  }
  </style>
  