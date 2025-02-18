<!-- src/components/Header.vue -->
<template>
    <header>
      <nav>
        <div class="logo">
          <h1><a href="/">HomeMade</a></h1>
        </div>
        <ul :class="{ 'open': isMenuOpen }">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/chefs">Nos Cuisiniers</router-link></li>
          <li><router-link to="/signup">Inscription</router-link></li>
          <li><router-link to="/login">Connexion</router-link></li>
          <li><CartSummary /></li> <!-- Inclusion du résumé du panier -->
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  import CartSummary from './CartSummary.vue'
  
  export default {
    components: {
      CartSummary,
    },
    data() {
      return {
        isMenuOpen: false,
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
      },
    },
  }
  </script>
  
  <style scoped>
  /* Styles existants */
  </style>
  