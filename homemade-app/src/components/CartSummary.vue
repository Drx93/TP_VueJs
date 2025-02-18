<!-- src/components/CartSummary.vue -->
<template>
    <div class="cart-summary">
      <router-link to="/cart">Panier ({{ itemCount }} articles)</router-link>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cart'
  
  export default {
    setup() {
      const cartStore = useCartStore()
      return {
        itemCount: cartStore.items.length,
      }
    },
  }
  </script>
  
  <style scoped>
  .cart-summary {
    margin-left: auto;
  }
  </style>
  