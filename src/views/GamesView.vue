<template>
  <!-- Botones superiores -->
  <div class="d-flex flex-column align-items-center justify-content-center gap-3 py-5" >
    <div class="w-70 custom-btn-group">
      <button type="button" class="btn btn-primary w-100 mb-3" @click="openModal('Simon dice')">Simon dice</button>
      <button type="button" class="btn btn-secondary w-100 mb-3" @click="openModal('Tres en Discordia')">Tres en Discordia</button>
      <button type="button" class="btn btn-success w-100 mb-3" @click="openModal('Toca y sigue')">Toca y sigue</button>
      <button type="button" class="btn btn-danger w-100 mb-3" @click="openModal('Tira y cacha')">Tira y cacha</button>
    </div>
  </div>

  <!-- Modal -->
<GameModal 
  v-model:showModal="showModal" 
  :game_name="game_name" 
/>

</template>

<script>
import GameModal from '@/components/GameModal.vue'; // Asegúrate de que la ruta sea correcta

export default {
  components: {
    GameModal
  },
  data() {
    return {
      game_name: '######',
      showModal: false, // Definido correctamente
      alertMessage: '¡Bienvenido a la sección de juegos!',
      alertType: 'success',
      showAlert: true
    };
  },
  methods:{
    openModal(gameName) {
      this.game_name = gameName;
      this.showModal = true; // Cambia el valor a true para abrir el modal
    }
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
