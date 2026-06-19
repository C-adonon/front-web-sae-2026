import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { authApi } from '@/api/auth.api'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const jwtToken = ref(null)
    const user = ref(null)
    const isAuthenticated = computed(() => !!jwtToken.value)
    const fullName = computed(() => {
      if (user.value) {
        return `${user.value.prenom} ${user.value.nom}`
      } else {
        return ''
      }
    })
    const role = computed(() => user.value?.role || null)

    async function login(credentials) {
      // const testUser = {
      //   jwtToken: '',
      //   user: {
      //     id: 1,
      //     nom: 'Doe',
      //     prenom: 'John',
      //     email: 'john.doe@gmail.com',
      //     role: 'ETUDIANT',
      //     identifiant: '123456',
      //   },
      // }

      try {
        const resToken = await authApi.login(credentials)
        jwtToken.value = resToken.token

        const resUtilisateur = await authApi.getUtilisateur(credentials.identifiant)
        user.value = resUtilisateur.user

        isAuthenticated.value = true
        role.value = user.value.role
      } catch (error) {
        console.error('Login failed:', error)
        throw error
      }
    }

    function logout() {
      jwtToken.value = null
      user.value = null
      isAuthenticated.value = false
      role.value = null
    }

    return { jwtToken, user, isAuthenticated, role, fullName, login, logout }
  },
  {
    persist: {
      pick: ['jwtToken', 'user'],
    },
  },
)
