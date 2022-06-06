import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Contats',
      name: 'Contats',
      component: () => import('../views/ContatsView.vue')
    },
    {
      path: '/Eshop',
      name: 'Eshop',
      component: () => import('../views/EshopView.vue')
    },
    {
      path: '/NewProduct',
      name: 'NewProduct',
      component: () => import('../views/NewProductView.vue')
    }

  ]
})

export default router
