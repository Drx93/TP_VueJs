<!-- src/views/Register.vue -->
<template>
    <div>
      <h1>Inscription</h1>
      <form @submit.prevent="register">
        <div>
          <label for="username">Nom d'utilisateur</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div>
          <label for="password">Mot de passe</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      register() {
        // Fonctionnalité d'inscription non nécessaire pour le moment
        alert('Inscription non fonctionnelle pour le moment.')
      },
    },
  }
  </script>
  
  <style scoped>
  /* Ajoute des styles pour le formulaire d'inscription ici */
  </style>
  