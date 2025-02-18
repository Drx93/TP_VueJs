<!-- src/components/Footer.vue -->
<template>
    <footer>
      <div class="footer-content">
        <p>&copy; 2025 HomeMade. Tous droits réservés.</p>
        <p>Contact : <a href="mailto:contact@homemade.com">contact@homemade.com</a></p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  }
  </script>
  
  <style scoped>
  footer {
    background-color: #f8f9fa;
    padding: 1rem;
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
  .footer-content p {
    margin: 0.5rem 0;
  }
  </style>
  