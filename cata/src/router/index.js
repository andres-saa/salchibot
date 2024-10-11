import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',

      component: () => import('../App.vue'),
      children: [
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
