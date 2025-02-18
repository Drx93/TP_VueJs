<!-- src/views/ChefDetails.vue -->
<template>
    <div id="chefs">
      <h1>{{ chef.name }}</h1>
      <p>{{ chef.bio }}</p>
      <h2>Spécialités</h2>
      <ul>
        <li v-for="dish in chef.dishes" :key="dish.name">
          {{ dish.name }} - {{ dish.description }} - {{ dish.price }}€
          <button @click="addToCart(dish)">Ajouter au panier</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { chefs } from '../data/chefs'
  import { useCartStore } from '../stores/cart'
  
  export default {
    data() {
      return {
        chef: {},
      }
    },
    created() {
      const chefId = this.$route.params.id
      this.chef = chefs.find((chef) => chef.id === parseInt(chefId))
    },
    setup() {
      const cartStore = useCartStore()
      const addToCart = (dish) => {
        cartStore.addDish(dish)
      }
  
      return {
        addToCart,
      }
    },
  }
  </script>
  