<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">¿Estás seguro con "{{ game_name }}"?</h5>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>¿Quieres continuar con este juego?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Sí</button>
            <button type="button" class="btn btn-primary" @click="closeModal">No</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Fondo oscuro -->
    <div class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
export default {
  props: {
    game_name: {
      type: String,
      required: true
    },
    showModal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:showModal', false);
    }
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1050;
}

/* Asegura que el fondo también esté en la jerarquía visual */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1040;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
odal = false;