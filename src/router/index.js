import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    
    {
      path: '/quiz/:category',
      name: 'quiz',
      props: true,
      component: () => import('../views/QuizView.vue'),
    },

    {
      path: '/results',
      name: 'results',
      component: () => import('../views/ResultView.vue'),
    },

    {
      path: '/review',
      name: 'review',
      component: () => import('../views/ReviewView.vue'),
    },

  ],
})

export default router
