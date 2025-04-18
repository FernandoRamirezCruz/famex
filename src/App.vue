<script setup>
import { RouterLink, RouterView } from 'vue-router';

const link = [
  { name: 'Home', path: '/', class: 'nav-link custom-link' },
  { name: 'Iniciar', path: '/login', class: 'nav-link custom-link' },
  { name: 'Juegos', path: '/games', class: 'nav-link custom-link' },
  { name: 'Graficas', path: '/Graphics', class: 'nav-link custom-link' }
];
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
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li v-for="(item, index) in link" :key="index" class="nav-item">
              <RouterLink :to="item.path" :class="item.class">
                {{ item.name }}
              </RouterLink>
            </li>
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
/* Fondo con gradiente llamativo */
.custom-navbar {
  background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Estilo para los enlaces */
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
  color: #ffd700 !important; /* Amarillo dorado al pasar el mouse */
}
</style>
