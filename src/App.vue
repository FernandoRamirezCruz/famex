<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref, computed } from 'vue'

const router = useRouter()

// Verificar si hay token en localStorage
const token = ref(localStorage.getItem('token'))

// Computado para saber si está logueado
const isLoggedIn = computed(() => { 
  return !!token.value;
});


// Función para cerrar sesión
function logout() {
  localStorage.removeItem('token')
  token.value = null
  router.push('/login')
}

// Enlaces públicos y privados
const publicLinks = [
  { name: 'Home', path: '/', class: 'nav-link custom-link' },
  { name: 'Iniciar', path: '/login', class: 'nav-link custom-link' },
  { name: 'Registro', path: '/register', class: 'nav-link custom-link' }
]

const privateLinks = [
  { name: 'Juegos', path: '/games', class: 'nav-link custom-link' },
  { name: 'Gráficas', path: '/graphics', class: 'nav-link custom-link' }
]
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand fw-bold text-white">🎮 GifApp</RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <template v-if="isLoggedIn">
              <li v-for="(item, index) in privateLinks" :key="index" class="nav-item">
                <RouterLink :to="item.path" :class="item.class">{{ item.name }}</RouterLink>
              </li>
              <li class="nav-item">
                <button @click="logout" class="btn btn-outline-light ms-2">Cerrar sesión</button>
              </li>
            </template>

            <template v-else>
              <li v-for="(item, index) in publicLinks" :key="index" class="nav-item">
                <RouterLink :to="item.path" :class="item.class">{{ item.name }}</RouterLink>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>

    <div class="mt-4">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.custom-navbar {
  background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.custom-link {
  color: #fff;
  margin: 0 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
}

.custom-link::after {
  content: "";
  display: block;
  width: 0%;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
  position: absolute;
  bottom: -4px;
  left: 0;
}

.custom-link:hover::after {
  width: 100%;
}

.custom-link:hover {
  color: #ffd700 !important;
}
</style>
