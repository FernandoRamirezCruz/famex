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
    },{
        path: '/Graphics',
        name: 'graphics',
        component: GraphicsView,
    },
    {
        path: '/Scores',
        name: 'scores',
        component: ScoresView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    }
  ],
})

export default router
