<template>
    <div class="inicio">
      <!-- Header -->
      <header class="header">
        <h1>🧸 Juguetes para Microgravedad</h1>
        <p>Diseñados para explorar, aprender y jugar en el espacio.</p>
        <button @click="irAPrototipos">Ver Prototipos</button>
      </header>
  
      <!-- Sección de características -->
      <section class="features">
        <div class="feature-card">
          <h2>🌟 Diseño Seguro</h2>
          <p>Materiales livianos, flexibles y aprobados para uso espacial.</p>
        </div>
        <div class="feature-card">
          <h2>🎯 Enfoque Educativo</h2>
          <p>Estimula la creatividad y el aprendizaje en gravedad cero.</p>
        </div>
        <div class="feature-card">
          <h2>🚀 Innovación Espacial</h2>
          <p>Prototipos únicos adaptados a condiciones extremas.</p>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="footer">
        <p>© 2025 Proyecto Juguetes Microgravedad. Todos los derechos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    methods: {
      irAPrototipos() {
        alert('Mostrando prototipos... 🚀');
        // Aquí más adelante podrías redireccionar a otra vista
      }
    }
  }
  </script>
  
  <style scoped>
  .inicio {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    color: #fff;
  }
  
  .header {
    text-align: center;
    padding: 100px 20px 50px;
  }
  
  .header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  
  .header p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  
  .header button {
    background-color: #fff;
    color: #6a11cb;
    border: none;
    padding: 15px 30px;
    font-size: 1.1rem;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .header button:hover {
    background-color: #e0e0e0;
  }
  
  .features {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 50px 20px;
    flex-wrap: wrap;
  }
  
  .feature-card {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 15px;
    width: 260px;
    text-align: center;
    transition: 0.3s;
  }
  
  .feature-card:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
  
  .footer {
    text-align: center;
    margin-top: auto;
    padding: 20px;
    font-size: 0.9rem;
    background-color: rgba(0, 0, 0, 0.2);
  }
  </style>
  