import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name: 'Explanation',
        component: () => import('../components/Explanation.vue')
    },
    {
        path: '/Top',
        name: 'Top',
        component: () => import('../components/Top.vue')
    },
    {
        path: '/Rule',
        name: 'Rule',
        component: () => import('../components/Rule.vue')
    },
    {
        path: '/Member',
        name: 'Membere',
        component: () => import('../components/Member.vue')
    },
    {
        path: '/Congratulations',
        name: 'Congratulationse',
        component: () => import('../components/Congratulations.vue')
    }
    ]
})

export default router