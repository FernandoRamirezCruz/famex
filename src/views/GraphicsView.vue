<template>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card shadow-lg border-0">
            <div class="card-header bg-primary text-white text-center">
              <h5 class="mb-0">Gráfico de Ventas</h5>
            </div>
            <div class="card-body bg-light">
              <div style="height: 400px;">
                <LineChart :chartData="chartData" :chartOptions="chartOptions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import LineChart from '@/components/Line.vue'
  
  export default {
    components: {
      LineChart
    },
    data() {
      return {
        chartData: {
          labels: ['Enero', 'Febrero', 'Marzo'],
          datasets: [
            {
              label: 'Ventas',
              data: [40, 55, 75],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    }
  }
  </script>
  