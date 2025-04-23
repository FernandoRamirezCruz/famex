// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Vistas
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import GamesView from '../views/GamesView.vue'
import GraphicsView from '../views/GraphicsView.vue'
import ScoresView from '../views/ScoresView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView,   
    },
    {
      path: '/graphics',
      name: 'graphics',
      component: GraphicsView,
    },
    {
      path: '/scores/:game_name',
      name: 'scores',
      props: true,
      component: ScoresView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    }
  ],
})

// Rutas que requieren autenticación
const privateRoutes = ['/games', '/graphics', '/scores/:game_name']

// Guard global para proteger rutas privadas
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  console.log('Token detectado en guard:', token);

  const isPrivateRoute = privateRoutes.some(route => {
    if (route === to.path) return true
    const regex = new RegExp(`^${route.replace(/:[^\s/]+/, '[^/]+')}$`)
    return regex.test(to.path)
  })

  if (isPrivateRoute && !token) {
    console.log('Token no encontrado, redirigiendo a login')
    next('/login')
  } else {
    next()
  }
})

export default router
