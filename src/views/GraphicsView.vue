<template>
  <div class="container px-4">
  <div class="row gx-5">
    <div class="col">
          <!-- Menú para nombres de juegos -->
    <select class="form-select" aria-label="Select Games">
      <option selected>Seleccione un juego</option>
      <option v-for="(game, index) in games_name" :key="index" :value="index + 1">
        {{ game }}
      </option>
    </select>
    </div>

    <div class="col">
      <select class="form-select" aria-label="Select Labels">
      <option selected>Seleccione una etiqueta</option>
      <option v-for="(label, index) in labels" :key="index" :value="index + 1">
        {{ label }}
      </option>
    </select>
    </div>

    <div class="col">
      <select class="form-select" aria-label="Select Games">
      <option selected>Seleccione el periodo</option>
      <option v-for="(periodo, index) in periodo" :key="index" :value="index + 1">
        {{ periodo }}
      </option>
    </select>
    </div>
    </div>
  </div>






  <div class="container d-flex justify-content-center align-items-center min-vh-50">
    <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 shadow p-4 rounded bg-white">
      <Line :chart-data="chartData" :options="chartOptions" />
    </div>
  </div>
    
</template>
  
  <script>
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { defineComponent } from 'vue'
  import Line from '@/components/Line.vue'
  
  // Registrar los componentes de ChartJS
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default defineComponent({
    name: 'BarChart',
    components: {
      Line
    },
    data() {
      return {
        // Inicialización adecuada de chartData
        chartData: {
          labels: ['January', 'February', 'March'], // Etiquetas del eje X
          datasets: [
            {
              label: 'Dataset Example', // Leyenda del gráfico
              backgroundColor: '#f87979', // Color de las barras
              data: [40, 20, 12] // Valores para las barras
            }
          ]
        },
        labels: ['Score', 'Tiempo más corto', 'Tiempo Promedio', 'Velocidad Máxima', 'Velocidad Promedio'],
        games_name: ['Simon dice', 'Tres en Discordia', 'Toca y sigue', 'Tira y cacha'],
        periodo: ['Hoy', 'Ultima Semana', 'Ultimo mes', 'Ultimo año'],
        // Opciones del gráfico
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    }
  })
  </script>