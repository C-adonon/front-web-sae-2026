import { createRouter, createWebHistory } from 'vue-router'
import { authGuard, roleGuard } from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/AppLayout.vue'),
    },
    {
      path: '/login',
      name: 'login',
    },
    {
      path: '/signup',
      name: 'signup',
    },
    {
      path: '/profil',
      name: 'profil',
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/etudiant',
      name: 'dashboardEtudiant',
      meta: { requiresAuth: true, role: 'ETUDIANT' },
    },
    {
      path: '/dashboard/professeur',
      name: 'dashboardProfesseur',
      meta: { requiresAuth: true, role: 'PROFESSEUR' },
    },
    {
      path: '/messagerie',
      name: 'messagerie',
      meta: { requiresAuth: true },
    },
    {
      path: '/cours',
      name: 'coursList',
      meta: { requiresAuth: true },
    },
    {
      path: '/cours/:id',
      name: 'coursDetail',
      meta: { requiresAuth: true },
    },
    {
      path: '/cours/ajouter',
      name: 'coursAjouter',
      meta: { requiresAuth: true, role: 'PROFESSEUR' },
    },
    {
      path: '/mes-cours',
      name: 'coursAdd',
      meta: { requiresAuth: true },
    },
    {
      path: '/formations',
      name: 'formationsList',
      meta: { requiresAuth: true },
    },
    {
      path: '/formations/:id',
      name: 'formationsDetail',
      meta: { requiresAuth: true },
    },
    {
      path: '/formations/ajouter',
      name: 'formationsAjouter',
      meta: { requiresAuth: true, role: 'PROFESSEUR' },
    },
    {
      path: '/calendrier',
      name: 'calendrier',
      meta: { requiresAuth: true },
    },
    {
      path: '/competences',
      name: 'competences',
      meta: { requiresAuth: true },
    },
    ,
    {
      path: '/:catchAll(.*)',
      name: 'error404',
    },
  ],
})

router.beforeEach(authGuard)
router.beforeEach(roleGuard)

export default router
