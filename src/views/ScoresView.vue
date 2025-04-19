<template>
  <h1 class="text-center text-danger">{{ game_name }}</h1>
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
        labels: ['Score', 'Tiempo más corto', 'Tiempo Promedio', 'Velocidad Máxima', 'Velocidad Promedio'],
        colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
      },
      scores: [27, 0, 0, 0],

    };
  },
  props: {
    game_name: {
      type: String,
      required: true
    }
  },
};
</script>
