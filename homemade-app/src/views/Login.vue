<!-- src/views/Login.vue -->
<template>
    <div>
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Nom d'utilisateur</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div>
          <label for="password">Mot de passe</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { users } from '../data/users'
  import { useUserStore } from '../stores/user'
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
      }
    },
    methods: {
      login() {
        const user = users.find(
          (u) => u.username === this.username && u.password === this.password
        )
        if (user) {
          const userStore = useUserStore()
          userStore.login(user)
          userStore.saveUser()
          // Rediriger vers la page d'accueil après connexion
          this.$router.push('/')
        } else {
          this.errorMessage = "Nom d'utilisateur ou mot de passe incorrect."
        }
      }
    },
  }
  </script>
  
  <style scoped>
  /* Ajoute des styles pour le formulaire de connexion ici */
  .error {
    color: red;
  }
  </style>
  