import { createRouter, createWebHistory } from 'vue-router'
import { authGuard, roleGuard } from './guards'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ProfilView from '@/views/ProfilView.vue'
import CoursDetailsView from '@/views/CoursDetailsView.vue'
import AjouterCoursView from '@/views/AjouterCoursView.vue'
import FormationView from '@/views/FormationView.vue'
import DashboardEtudiantView from '@/views/DashboardEtudiantView.vue'
import DashboardProfView from '@/views/DashboardProfView.vue'
import MessagerieView from '@/views/MessagerieView.vue'
import CoursListView from '@/views/CoursListView.vue'

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
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilView,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/etudiant',
      name: 'dashboardEtudiant',
      component: DashboardEtudiantView,
      meta: { requiresAuth: true, role: 'ETUDIANT' },
    },
    {
      path: '/dashboard/professeur',
      name: 'dashboardProfesseur',
      component: DashboardProfView,
      meta: { requiresAuth: true, role: 'PROFESSEUR' },
    },
    {
      path: '/messagerie',
      name: 'messagerie',
      component: MessagerieView,
      meta: { requiresAuth: true },
    },
    {
      path: '/cours',
      name: 'coursList',
      component: CoursListView,
      meta: { requiresAuth: true },
    },
    {
      path: '/cours/:id',
      name: 'coursDetail',
      component: CoursDetailsView,
      meta: { requiresAuth: true },
    },
    {
      path: '/cours/ajouter',
      name: 'coursAjouter',
      component: AjouterCoursView,
      meta: { requiresAuth: true, role: 'PROFESSEUR' },
    },
    {
      path: '/mescours',
      name: 'mesCoursList',
      component: CoursListView,
      meta: { requiresAuth: true },
    },
    {
      path: '/formations',
      name: 'formationsList',
      component: FormationView,
      meta: { requiresAuth: true },
    },
    {
      path: '/formations/:id',
      name: 'formationsDetail',
      component: FormationView,
      meta: { requiresAuth: true },
    },
    {
      // /!\ pas sûr
      path: '/formations/ajouter',
      name: 'formationsAjouter',
      component: FormationView,
      meta: { requiresAuth: true, role: 'PROFESSEUR' },
    },
    {
      path: '/:catchAll(.*)',
      name: 'error404',
      component: () => import('@/views/404View.vue'),
    },
  ],
})

router.beforeEach(authGuard)
router.beforeEach(roleGuard)

export default router
