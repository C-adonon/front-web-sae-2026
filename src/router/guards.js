import { useAuthStore } from '@/stores/authStore'

export async function authGuard(to) {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  if (to.path.startsWith('/auth') && authStore.isAuthenticated) {
    if (authStore.role === 'ETUDIANT') return { name: 'dashboardEtudiant' }
    else if (authStore.role === 'PROFESSEUR') return { name: 'dashboardProfesseur' }
  }
}

export async function roleGuard(to, from, next) {
  // A faire
  return next()
}
