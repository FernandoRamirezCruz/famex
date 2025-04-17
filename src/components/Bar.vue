<template>
    <Bar v-if="chartDataReady" :chart-data="chartData" :options="chartOptions" />
    <div v-else>Cargando datos del gráfico...</div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    props: {
      chartData: {
        type: Object,
        required: true
      },
      chartOptions: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      chartDataReady() {
        return (
          this.chartData &&
          this.chartData.labels &&
          Array.isArray(this.chartData.labels) &&
          this.chartData.datasets &&
          Array.isArray(this.chartData.datasets)
        )
      }
    },
    mounted() {
      if (!this.chartDataReady) {
        console.error('chartData no está correctamente inicializado.')
      }
    }
  }
  </script>
  