<!-- src/views/Cart.vue -->
<template>
    <div id="panier">
      <h1>Mon Panier</h1>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - {{ item.price }}€
          <button @click="removeFromCart(index)">Retirer</button>
        </li>
      </ul>
      <p>Total : {{ totalPrice }}€</p>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cart'
  
  export default {
    setup() {
      const cartStore = useCartStore()
  
      const removeFromCart = (index) => {
        cartStore.removeDish(index)
      }
  
      return {
        cartItems: cartStore.items,
        totalPrice: cartStore.items.reduce((sum, item) => sum + item.price, 0),
        removeFromCart,
      }
    },
  }
  </script>
  
  <style scoped>
  /* Ajoute des styles pour le panier ici */
  </style>
  