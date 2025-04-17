<script setup>
import { RouterLink, RouterView } from 'vue-router';


const link = [
  { name: 'Home', path: '/', class: 'nav-link' },
  { name: 'Login', path: '/login', class: 'nav-link' },
  { name: 'Register', path: '/register', class: 'nav-link' },
  { name: 'Juegos', path: '/games', class: 'nav-link' },
  { name: 'Graficas', path: '/Graphics', class: 'nav-link'}
];
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">GifApp</RouterLink>
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
