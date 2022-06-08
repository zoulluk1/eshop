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
    },
    {
      path: '/Management',
      name: 'Management',
      component: () => import('../views/ManagementView.vue')
    },
    {
      path: '/UpdateProduct/:id',
      name: 'UpdateProduct',
      component: () => import('../views/UpdateView.vue')
    }

  ]
})

export default router
