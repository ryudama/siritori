import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/aa',
      name: 'aa',
      component: () => import('../components/aa.vue')
    }
  ]
})

export default router