// src/stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
  }),
  actions: {
    addDish(dish) {
      this.items.push(dish)
      this.saveCart()
    },
    removeDish(index) {
      this.items.splice(index, 1)
      this.saveCart()
    },
    saveCart() {
      localStorage.setItem('cartItems', JSON.stringify(this.items))
    },
  },
})
