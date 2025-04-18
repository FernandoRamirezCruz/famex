<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
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
        // Opciones del gráfico
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    }
  })
  </script>