import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

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

    function login(credentials) {
      const testUser = {
        jwtToken: 'test',
        user: {
          id: 1,
          nom: 'Doe',
          prenom: 'John',
          email: 'john.doe@gmail.com',
          role: 'ETUDIANT',
          identifiant: '123456',
        },
      }

      jwtToken.value = testUser.jwtToken
      user.value = testUser.user
    }

    function Logout() {
      jwtToken.value = null
      user.value = null
    }

    return { jwtToken, user, isAuthenticated, role, fullName }
  },
  {
    persist: {
      pick: ['jwtToken', 'user'],
    },
  },
)
