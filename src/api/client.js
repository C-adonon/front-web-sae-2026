import axios from 'axios'
import { useAuthStore } from '@/stores/authStore'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 10000,
})

apiClient.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (authStore.jwtToken) {
    config.headers.Authorization = `Bearer ${authStore.jwtToken}`
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('API error:', error)
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        const authStore = useAuthStore()
        authStore.logout()
      }
    }
    return Promise.reject(error)
  },
)

export default apiClient
