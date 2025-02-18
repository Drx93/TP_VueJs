// src/stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true
      this.userInfo = user
      this.saveUser()
    },
    logout() {
      this.isAuthenticated = false
      this.userInfo = null
      this.saveUser()
    },
    saveUser() {
      localStorage.setItem('isAuthenticated', this.isAuthenticated)
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
    },
  },
})
