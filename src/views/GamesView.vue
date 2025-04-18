<template>
    <!-- Botones superiores -->
    <div class="d-flex flex-column align-items-center justify-content-center gap-3 py-5">
    <div class="w-70 custom-btn-group">
      <button type="button" class="btn btn-primary w-100 mb-3">Simon dice</button>
      <button type="button" class="btn btn-secondary w-100 mb-3">Tres en Discordia</button>
      <button type="button" class="btn btn-success w-100 mb-3">Toca y sigue</button>
      <button type="button" class="btn btn-danger w-100 mb-3">Tira y cacha</button>
    </div>
  </div>
  
    <!-- Tarjetas tipo contador -->
    <div class="container mt-4">
      <div class="row justify-content-center gy-3">
        <div 
          class="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center" 
          v-for="(label, index) in chartData.labels" 
          :key="index"
        >
          <div 
            class="card text-center shadow w-100" 
            :style="{ backgroundColor: chartData.colors[index], color: 'white', height: '10rem', maxWidth: '10rem' }"
          >
            <div class="card-body d-flex flex-column align-items-center justify-content-center p-3">
              <div class="display-3 fw-bold">
                {{ scores[index] || 0 }}
              </div>
              <div class="mt-2">
                {{ label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chartData: {
          labels: ['Score', 'Tiempo mas corto', 'Tiempo Promedio', 'Velocidad Maxima','Velocidad Promedio' ],
          colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0','#9966FF'],
        },
        scores: [27, 0, 0, 0]
      };
    }
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 0.5rem;
  }
  .display-3 {
    font-size: 2.5rem;
  }
  .custom-btn-group {
  width: 70%;
  max-width: 600px; /* para que no se haga demasiado grande en pantallas grandes */
  min-width: 280px;
}

/* Para darle una presencia más estática y uniforme a los botones */
button.btn {
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 0.75rem;
}
  </style>
  