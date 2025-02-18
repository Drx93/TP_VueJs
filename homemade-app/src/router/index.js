// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Chefs from '../views/Chefs.vue'
import ChefDetails from '../views/ChefDetails.vue'
import Signup from '../views/Register.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Register from '../views/Register.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/chefs', component: Chefs },
  { path: '/chefs/:id', component: ChefDetails },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/cart', component: Cart },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
