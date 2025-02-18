<!-- src/views/Chefs.vue -->
<template>
    <div id="chef">
      <h1>Nos Cuisiniers</h1>
      <ul>
        <li v-for="chef in chefs" :key="chef.id">
          <router-link :to="'/chefs/' + chef.id">{{ chef.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { chefs } from '../data/chefs'
  
  export default {
    data() {
      return {
        chefs,
      }
    },
  }
  </script>
  