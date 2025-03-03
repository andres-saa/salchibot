import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',

      component: App,
      children: [

        {
          path: '/Ubicacion/:user_id',
          name: 'Ubicacion',
          component: () => import('../components/Ubicacion.vue')
        },

        {
          path: '/register/:user_id',
          name: 'register',
          component: () => import('../components/RegisterClient.vue')
        },

        {
          path: '/carta/:user_id',
          name: 'carta',
          component: () => import('../components/Menu.vue')
        }
      ]
    }
  ]
})

export default router
