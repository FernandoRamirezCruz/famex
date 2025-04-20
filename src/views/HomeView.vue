<template>
    <div class="inicio">
      <!-- Sección 1: Portada -->
      <section class="hero">
        <h1>🚀 SPARKS: Esferas para Microgravedad</h1>
        <p>Explora, juega y entrena en el espacio de una forma única.</p>
        <button @click="irAAbout">Descubre Más</button>
      </section>
  
      <!-- Sección 2: Qué son las Sparks -->
      <section class="about" id="about">
        <h2>¿Qué son las SPARKS?</h2>
        <p>SPARKS son esferas inteligentes diseñadas para juegos y ejercicios en entornos de microgravedad, ayudando a los astronautas a mantenerse activos mientras se divierten.</p>
      </section>
  
      <!-- Sección 3: Beneficios -->
      <section class="benefits">
        <h2>Beneficios de SPARKS</h2>
        <div class="benefit-cards">
          <div class="benefit-card">
            <h3>🏋️ Ejercicio Funcional</h3>
            <p>Fomenta el movimiento y la fuerza en ambientes espaciales.</p>
          </div>
          <div class="benefit-card">
            <h3>📈 Medición de Rendimiento</h3>
            <p>Registra estadísticas como velocidad, coordinación y fuerza.</p>
          </div>
          <div class="benefit-card">
            <h3>🎮 Juegos Dinámicos</h3>
            <p>Actividades lúdicas para reducir el estrés y mejorar el ánimo.</p>
          </div>
        </div>
      </section>
  
      <!-- Sección 4: Innovación -->
      <section class="innovation">
        <h2>Innovación para el Futuro Espacial</h2>
        <p>Diseñadas con materiales de última generación y sensores de alta precisión, SPARKS redefine la manera de entrenar en el espacio.</p>
      </section>
  
      <!-- Footer -->
      <footer class="footer">
        <p>© 2025 SPARKS Project. Todos los derechos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    methods: {
      irAAbout() {
        const seccionAbout = document.getElementById('about');
        if (seccionAbout) {
          seccionAbout.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Todo tu mismo CSS se mantiene igual */
  .inicio {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ffffff;
    background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
    scroll-behavior: smooth;
  }
  
  /* Secciones */
  section {
    padding: 100px 20px;
    text-align: center;
    animation: fadeIn 1.5s ease-in;
  }
  
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  .hero p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  
  .hero button {
    background-color: #ffffff;
    color: #6a11cb;
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
    border-radius: 30px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .hero button:hover {
    background-color: #e0e0e0;
  }
  
  .about, .innovation {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    margin: 20px;
  }
  
  .benefits {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .benefit-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
  }
  
  .benefit-card {
    background-color: rgba(255, 255, 255, 0.15);
    padding: 30px;
    border-radius: 15px;
    width: 280px;
    transition: transform 0.3s;
  }
  
  .benefit-card:hover {
    transform: translateY(-10px);
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  /* Footer */
  .footer {
    text-align: center;
    margin-top: auto;
    padding: 20px;
    font-size: 0.9rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  /* Animaciones */
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.2rem;
    }
    .hero p {
      font-size: 1.2rem;
    }
    .benefit-card {
      width: 90%;
    }
  }
  </style>
  